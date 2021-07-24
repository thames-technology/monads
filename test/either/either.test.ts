import test from 'ava';

const fn = () => 'foo';

test('fn() returns foo', (t) => {
  t.is(fn(), 'foo');
});

// import {
//   Right,
//   isRight,
//   isLeft,
//   Left,
//   Either,
//   EitherType,
// } from '../../lib/either/either.js';

// describe('Either', () => {
//   interface IScenario<T> {
//     value: T;
//   }

//   function getLeftAssertion<T>(type: string): (scenario: IScenario<T>) => void {
//     return (scenario: IScenario<T>) => {
//       it(
//         "correctly creates an instance of Left with value '" +
//           scenario.value +
//           "'",
//         () => {
//           const subject = Left(scenario.value);

//           expect(subject.type).toEqual(EitherType.Left);

//           expect(subject.isLeft()).toEqual(true);
//           expect(subject.isRight()).toEqual(false);

//           expect(subject.left().isSome()).toEqual(true);
//           expect(subject.right().isSome()).toEqual(false);

//           expect(subject.unwrapLeft()).toEqual(scenario.value);
//           expect(() => subject.unwrapRight()).toThrow();

//           if (isLeft(subject)) {
//             expect(typeof subject.unwrap()).toEqual(type.toLowerCase());
//             expect(subject.unwrap()).toEqual(scenario.value);
//           } else {
//             throw new Error('Has to be _Left!');
//           }
//         },
//       );
//     };
//   }

//   function getRightAssertion<T>(
//     type: string,
//   ): (scenario: IScenario<T>) => void {
//     return (scenario: IScenario<T>) => {
//       it(
//         "correctly creates an instance of Right with value '" +
//           scenario.value +
//           "'",
//         () => {
//           const subject = Right(scenario.value);

//           expect(subject.type).toEqual(EitherType.Right);

//           expect(subject.isLeft()).toEqual(false);
//           expect(subject.isRight()).toEqual(true);

//           expect(subject.left().isSome()).toEqual(false);
//           expect(subject.right().isSome()).toEqual(true);

//           expect(() => subject.unwrapLeft()).toThrow();
//           expect(subject.unwrapRight()).toEqual(scenario.value);

//           if (isRight(subject)) {
//             expect(typeof subject.unwrap()).toEqual(type.toLowerCase());
//             expect(subject.unwrap()).toEqual(scenario.value);
//           } else {
//             throw new Error('Has to be _Right!');
//           }
//         },
//       );
//     };
//   }

//   describe('Boolean', () => {
//     const type = 'Boolean';

//     const scenarios: IScenario<boolean>[] = [
//       { value: true },
//       { value: false },
//       { value: Boolean(true) },
//     ];

//     const assertionLeft = getLeftAssertion<boolean>(type);
//     const assertionRight = getRightAssertion<boolean>(type);

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('Number', () => {
//     const type = 'Number';

//     const scenarios: IScenario<number>[] = [
//       { value: 37 },
//       { value: 3.14 },
//       { value: 0 },
//       { value: Math.LN2 },
//       { value: Infinity },
//       { value: NaN },
//       { value: Number(1) },
//     ];

//     const assertionLeft = getLeftAssertion<number>(type);
//     const assertionRight = getRightAssertion<number>(type);

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('String', () => {
//     const type = 'String';

//     const scenarios: IScenario<string>[] = [
//       { value: '' },
//       { value: 'bla' },
//       { value: typeof 1 },
//       { value: String('abc') },
//     ];

//     const assertionLeft = getLeftAssertion<string>(type);
//     const assertionRight = getRightAssertion<string>(type);

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('Function', () => {
//     const type = 'Function';

//     const scenarios: IScenario<any>[] = [
//       {
//         value(): undefined {
//           return undefined;
//         },
//       },
//       {
//         value: class C {},
//       },
//       { value: Math.sin },
//     ];

//     const assertionLeft = getLeftAssertion<any>(type);
//     const assertionRight = getRightAssertion<any>(type);

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('Object', () => {
//     const type = 'Object';

//     const scenarios: IScenario<object>[] = [
//       { value: { a: 1 } },
//       { value: [1, 2, 4] },
//       { value: new Date() },
//     ];

//     const assertionLeft = getLeftAssertion<object>(type);
//     const assertionRight = getRightAssertion<object>(type);

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('RegEx', () => {
//     const val = /s/;

//     it("correctly creates an instance of Left with value '" + val + "'", () => {
//       const subject = Left(val);

//       expect(subject.type).toEqual(EitherType.Left);

//       expect(subject.isLeft()).toEqual(true);
//       expect(subject.isRight()).toEqual(false);

//       if (isLeft(subject)) {
//         const type = typeof subject.unwrap();

//         expect(type === 'function' || type === 'object').toEqual(true);
//         expect(subject.unwrap()).toEqual(val);
//       } else {
//         throw new Error('Has to be _Left!');
//       }
//     });

//     it(
//       "correctly creates an instance of Right with value '" + val + "'",
//       () => {
//         const subject = Right(val);

//         expect(subject.type).toEqual(EitherType.Right);

//         expect(subject.isLeft()).toEqual(false);
//         expect(subject.isRight()).toEqual(true);

//         if (isRight(subject)) {
//           const type = typeof subject.unwrapRight();

//           expect(type === 'function' || type === 'object').toEqual(true);
//           expect(subject.unwrapRight()).toEqual(val);
//         } else {
//           throw new Error('Has to be _Right!');
//         }
//       },
//     );
//   });

//   describe('Undefined, Null', () => {
//     const array: string[] = ['a', 'b'];
//     const outOfBoundIndex = array.length + 1;

//     const object = { a: '_a', b: '_b' };
//     const outOfBoundProperty = 'z';

//     const scenarios: IScenario<undefined | null>[] = [
//       { value: undefined },
//       { value: null },
//       { value: array[outOfBoundIndex] },
//       { value: [null][0] },
//       { value: (object as any)[outOfBoundProperty] },
//       { value: ({ _: null } as any)._ },
//     ];

//     const assertionLeft = (scenario: IScenario<any>) => {
//       it('Left works correctly', () => {
//         const subject = Left(scenario.value);

//         expect(subject.type).toEqual(EitherType.Left);

//         expect(subject.isLeft()).toEqual(true);
//         expect(subject.isRight()).toEqual(false);
//         expect(subject.unwrap()).toEqual(scenario.value);
//         expect(subject.unwrapLeft()).toEqual(scenario.value);
//       });
//     };

//     const assertionRight = (scenario: IScenario<any>) => {
//       it('Right works correctly', () => {
//         const subject = Right(scenario.value);

//         expect(subject.type).toEqual(EitherType.Right);

//         expect(subject.isLeft()).toEqual(false);
//         expect(subject.isRight()).toEqual(true);
//         expect(subject.unwrap()).toEqual(scenario.value);
//         expect(subject.unwrapRight()).toEqual(scenario.value);
//       });
//     };

//     scenarios.forEach(assertionLeft);
//     scenarios.forEach(assertionRight);
//   });

//   describe('left', () => {
//     it('converts value into Some for Left', () => {
//       const string = Left('123');
//       const subject = string.left();
//       expect(subject.isSome()).toEqual(true);
//       expect(subject.unwrap()).toEqual('123');
//     });

//     it('converts value into None for Right', () => {
//       const string = Right('123');
//       const subject = string.left();
//       expect(subject.isNone()).toEqual(true);
//     });
//   });

//   describe('leftAndThen', () => {
//     it('correctly returns new either on Left', () => {
//       const left = Left(2);
//       const subject1 = left.leftAndThen((int) => Left(int * int));
//       expect(subject1.isLeft()).toEqual(true);
//       expect(subject1.unwrap()).toEqual(4);
//       const subject2 = left.leftAndThen((int) => Right(int * 10));
//       expect(subject2.isRight()).toEqual(true);
//       expect(subject2.unwrap()).toEqual(20);
//     });

//     it("doesn't change Right val on Right", () => {
//       const right: Either<number, string> = Right('error');
//       const subject = right.leftAndThen((int) => Left(int * int));
//       expect(subject.isRight()).toEqual(true);
//       expect(subject.unwrapRight()).toEqual('error');
//     });
//   });

//   describe('right', () => {
//     it('converts value into Some for Right', () => {
//       const string = Right('123');
//       const subject = string.right();
//       expect(subject.isSome()).toEqual(true);
//       expect(subject.unwrap()).toEqual('123');
//     });

//     it('converts value into None for Left', () => {
//       const string = Left('123');
//       const subject = string.right();
//       expect(subject.isNone()).toEqual(true);
//     });
//   });

//   describe('rightAndThen', () => {
//     it('correctly returns new either on Right', () => {
//       const right = Right(2);
//       const subject1 = right.rightAndThen((int) => Right(int * int));
//       expect(subject1.isRight()).toEqual(true);
//       expect(subject1.unwrap()).toEqual(4);
//       const subject2 = right.rightAndThen((int) => Left(int * 10));
//       expect(subject2.isLeft()).toEqual(true);
//       expect(subject2.unwrap()).toEqual(20);
//     });

//     it("doesn't change Left val on Left", () => {
//       const left: Either<string, number> = Left('three');
//       const subject = left.rightAndThen((int) => Right(int * int));
//       expect(subject.isLeft()).toEqual(true);
//       expect(subject.unwrapLeft()).toEqual('three');
//     });
//   });

//   describe('unwrap', () => {
//     it('unwraps when Either is left or right', () => {
//       const string_left = Left('123');
//       const subject1 = string_left.unwrap();
//       expect(subject1).toEqual('123');
//       const string_right = Right('456');
//       const subject2 = string_right.unwrap();
//       expect(subject2).toEqual('456');
//     });
//   });

//   describe('unwrapLeft', () => {
//     it('unwraps when Either is left', () => {
//       const string_left = Left('123');
//       const subject = string_left.unwrapLeft();
//       expect(subject).toEqual('123');
//     });

//     it('throws when Either is right', () => {
//       const string_right = Right('123');
//       const subject = () => string_right.unwrapLeft();
//       expect(subject).toThrow(ReferenceError);
//       expect(subject).toThrow('Cannot unwrap Left value of Either.Right');
//     });
//   });

//   describe('unwrapLeftOr', () => {
//     it('unwraps original value when Either is left', () => {
//       const string_left = Left('123');
//       const subject = string_left.unwrapLeftOr('456');
//       expect(subject).toEqual('123');
//     });

//     it('unwraps other value when Either is right', () => {
//       const string_left = Right('123');
//       const subject = string_left.unwrapLeftOr('456');
//       expect(subject).toEqual('456');
//     });
//   });

//   describe('unwrapLeftOrElse', () => {
//     it('unwraps original value when Either is left', () => {
//       const string_left = Left('123');
//       const subject = string_left.unwrapLeftOrElse((_) => '456');
//       expect(subject).toEqual('123');
//     });

//     it('unwraps other value when Either is right', () => {
//       const string_left = Right('123');
//       const subject = string_left.unwrapLeftOrElse((_) => '456');
//       expect(subject).toEqual('456');
//     });

//     it("doesn't call fn when Either is left", () => {
//       const string_left = Left('123');
//       const subject = jest.fn();
//       string_left.unwrapLeftOrElse(subject);
//       expect(subject).not.toBeCalled();
//     });
//   });

//   describe('unwrapRight', () => {
//     it('unwraps when Either is right', () => {
//       const string_right = Right('123');
//       const subject = string_right.unwrapRight();
//       expect(subject).toEqual('123');
//     });

//     it('throws when Either is left', () => {
//       const string_left = Left('123');
//       const subject = () => string_left.unwrapRight();
//       expect(subject).toThrow(ReferenceError);
//       expect(subject).toThrow('Cannot unwrap Right value of Either.Left');
//     });
//   });

//   describe('unwrapRightOr', () => {
//     it('unwraps original value when Either is right', () => {
//       const string_right = Right('123');
//       const subject = string_right.unwrapRightOr('456');
//       expect(subject).toEqual('123');
//     });

//     it('unwraps other value when Either is left', () => {
//       const string_right = Left('123');
//       const subject = string_right.unwrapRightOr('456');
//       expect(subject).toEqual('456');
//     });
//   });

//   describe('unwrapRightOrElse', () => {
//     it('unwraps original value when Either is right', () => {
//       const string_right = Right('123');
//       const subject = string_right.unwrapRightOrElse((_) => '456');
//       expect(subject).toEqual('123');
//     });

//     it('unwraps other value when Either is left', () => {
//       const string_right = Left('123');
//       const subject = string_right.unwrapRightOrElse((_) => '456');
//       expect(subject).toEqual('456');
//     });

//     it("doesn't call fn when Either is right", () => {
//       const string_right = Right('123');
//       const subject = jest.fn();
//       string_right.unwrapRightOrElse(subject);
//       expect(subject).not.toBeCalled();
//     });
//   });

//   describe('match', () => {
//     it('matches Either and returns transformed value', () => {
//       function getMessage(data: Either<string, string>): string {
//         return data.match({
//           left: (_) => `Left: ${_}`,
//           right: (_) => `Right: ${_}`,
//         });
//       }

//       expect(getMessage(Left('left'))).toEqual(`Left: left`);
//       expect(getMessage(Right('right'))).toEqual(`Right: right`);
//     });
//   });

//   describe('map', () => {
//     it('maps Left and Right and returns transformed Either', () => {
//       const string_left = Left<string, string>('123');
//       const string_right = Right<string, string>('456');

//       const subject1 = string_left.map((_) => parseInt(_, 10));
//       const subject2 = string_right.map((_) => parseInt(_, 10));

//       expect(subject1.unwrap()).toEqual(123);
//       expect(subject2.unwrap()).toEqual(456);
//     });
//   });

//   describe('mapLeft', () => {
//     it('maps Left and returns transformed Either', () => {
//       const string = Left('123');

//       const subject = string.mapLeft((_) => parseInt(_, 10));

//       expect(subject.unwrap()).toEqual(123);
//     });

//     it("doesn't maps when Either is right", () => {
//       const arr = [1, 2, 3];
//       const number = Right(arr[0]);

//       const subject = number.mapLeft((_) => 'different value');

//       expect(subject.unwrap()).toEqual(1);
//     });

//     it("doesn't call fn when Either is right", () => {
//       const string_right = Right('123');
//       const subject = jest.fn();
//       string_right.mapLeft(subject);
//       expect(subject).not.toBeCalled();
//     });
//   });

//   describe('mapRight', () => {
//     it('maps Right and returns transformed Either', () => {
//       const string = Right('123');

//       const subject = string.mapRight((_) => parseInt(_, 10));

//       expect(subject.unwrap()).toEqual(123);
//     });

//     it("doesn't maps when Either is left", () => {
//       const arr = [1, 2, 3];
//       const number = Left(arr[0]);

//       const subject = number.mapRight((_) => 'different value');

//       expect(subject.unwrap()).toEqual(1);
//     });

//     it("doesn't call fn when Either is left", () => {
//       const string_left = Left('123');
//       const subject = jest.fn();
//       string_left.mapRight(subject);
//       expect(subject).not.toBeCalled();
//     });
//   });
// });
