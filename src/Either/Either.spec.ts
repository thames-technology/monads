import { Right, is_right, is_left, is_either, Left, Either, EitherType } from "./Either"

describe("Either", () => {
  interface IScenario<T> {
    value: T
  }

  function getLeftAssertion<T>(type: string): (scenario: IScenario<T>) => void {
    return (scenario: IScenario<T>) => {
      it(
        "correctly creates an instance of Left with value '" + scenario.value + "'",
        () => {
          const subject = Left(scenario.value)

          expect(subject.type).toEqual(EitherType.Left)

          expect(subject.is_left()).toEqual(true)
          expect(subject.is_right()).toEqual(false)

          expect(subject.left().is_some()).toEqual(true)
          expect(subject.right().is_some()).toEqual(false)

          expect(subject.unwrap_left()).toEqual(scenario.value)
          expect(() => subject.unwrap_right()).toThrow()

          if (is_left(subject)) {
            expect(typeof subject.unwrap()).toEqual(type.toLowerCase())
            expect(subject.unwrap()).toEqual(scenario.value)
          } else {
            throw new Error("Has to be _Left!")
          }
        },
      )
    }
  }

  function getRightAssertion<T>(type: string): (scenario: IScenario<T>) => void {
    return (scenario: IScenario<T>) => {
      it(
        "correctly creates an instance of Right with value '" + scenario.value + "'",
        () => {
          const subject = Right(scenario.value)

          expect(subject.type).toEqual(EitherType.Right)

          expect(subject.is_left()).toEqual(false)
          expect(subject.is_right()).toEqual(true)

          expect(subject.left().is_some()).toEqual(false)
          expect(subject.right().is_some()).toEqual(true)

          expect(() => subject.unwrap_left()).toThrow()
          expect(subject.unwrap_right()).toEqual(scenario.value)

          if (is_right(subject)) {
            expect(typeof subject.unwrap()).toEqual(type.toLowerCase())
            expect(subject.unwrap()).toEqual(scenario.value)
          } else {
            throw new Error("Has to be _Right!")
          }
        },
      )
    }
  }

  describe("Boolean", () => {
    const type = "Boolean"

    const scenarios: IScenario<boolean>[] = [
      { value: true },
      { value: false },
      { value: Boolean(true) },
    ]

    const assertionLeft = getLeftAssertion<boolean>(type)
    const assertionRight = getRightAssertion<boolean>(type)

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("Number", () => {
    const type = "Number"

    const scenarios: IScenario<number>[] = [
      { value: 37 },
      { value: 3.14 },
      { value: 0 },
      { value: Math.LN2 },
      { value: Infinity },
      { value: NaN },
      { value: Number(1) },
    ]

    const assertionLeft = getLeftAssertion<number>(type)
    const assertionRight = getRightAssertion<number>(type)

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("String", () => {
    const type = "String"

    const scenarios: IScenario<string>[] = [
      { value: "" },
      { value: "bla" },
      { value: typeof 1 },
      { value: String("abc") },
    ]

    const assertionLeft = getLeftAssertion<string>(type)
    const assertionRight = getRightAssertion<string>(type)

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("Function", () => {
    const type = "Function"

    const scenarios: IScenario<any>[] = [
      {
        value(): undefined {
          return undefined
        },
      },
      {
        value: class C {},
      },
      { value: Math.sin },
    ]

    const assertionLeft = getLeftAssertion<any>(type)
    const assertionRight = getRightAssertion<any>(type)

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("Object", () => {
    const type = "Object"

    const scenarios: IScenario<object>[] = [
      { value: { a: 1 } },
      { value: [1, 2, 4] },
      { value: new Date() },
    ]

    const assertionLeft = getLeftAssertion<object>(type)
    const assertionRight = getRightAssertion<object>(type)

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("RegEx", () => {
    const val = /s/

    it("correctly creates an instance of Left with value '" + val + "'", () => {
      const subject = Left(val)

      expect(subject.type).toEqual(EitherType.Left)

      expect(subject.is_left()).toEqual(true)
      expect(subject.is_right()).toEqual(false)

      if (is_left(subject)) {
        const type = typeof subject.unwrap()

        expect(type === "function" || type === "object").toEqual(true)
        expect(subject.unwrap()).toEqual(val)
      } else {
        throw new Error("Has to be _Left!")
      }
    })

    it("correctly creates an instance of Right with value '" + val + "'", () => {
      const subject = Right(val)

      expect(subject.type).toEqual(EitherType.Right)

      expect(subject.is_left()).toEqual(false)
      expect(subject.is_right()).toEqual(true)

      if (is_right(subject)) {
        const type = typeof subject.unwrap_right()

        expect(type === "function" || type === "object").toEqual(true)
        expect(subject.unwrap_right()).toEqual(val)
      } else {
        throw new Error("Has to be _Right!")
      }
    })
  })

  describe("Undefined, Null", () => {
    const array: string[] = ["a", "b"]
    const outOfBoundIndex = array.length + 1

    const object = { a: "_a", b: "_b" }
    const outOfBoundProperty = "z"

    const scenarios: IScenario<undefined | null>[] = [
      { value: undefined },
      { value: null },
      { value: array[outOfBoundIndex] },
      { value: [null][0] },
      { value: (object as any)[outOfBoundProperty] },
      { value: ({ _: null } as any)._ },
    ]

    const assertionLeft = (scenario: IScenario<any>) => {
      it("Left works correctly", () => {
        const subject = Left(scenario.value)

        expect(subject.type).toEqual(EitherType.Left)

        expect(subject.is_left()).toEqual(true)
        expect(subject.is_right()).toEqual(false)
        expect(subject.unwrap()).toEqual(scenario.value)
        expect(subject.unwrap_left()).toEqual(scenario.value)
      })
    }

    const assertionRight = (scenario: IScenario<any>) => {
      it("Right works correctly", () => {
        const subject = Right(scenario.value)

        expect(subject.type).toEqual(EitherType.Right)

        expect(subject.is_left()).toEqual(false)
        expect(subject.is_right()).toEqual(true)
        expect(subject.unwrap()).toEqual(scenario.value)
        expect(subject.unwrap_right()).toEqual(scenario.value)
      })
    }

    scenarios.forEach(assertionLeft)
    scenarios.forEach(assertionRight)
  })

  describe("left", () => {
    it("converts value into Some for Left", () => {
      const string = Left("123")
      const subject = string.left()
      expect(subject.is_some()).toEqual(true)
      expect(subject.unwrap()).toEqual("123")
    })

    it("converts value into None for Right", () => {
      const string = Right("123")
      const subject = string.left()
      expect(subject.is_none()).toEqual(true)
    })
  })

  describe("left_and_then", () => {
    it("correctly returns new either on Left", () => {
      const left = Left(2)
      const subject1 = left.left_and_then((int) => Left(int * int))
      expect(subject1.is_left()).toEqual(true)
      expect(subject1.unwrap()).toEqual(4)
      const subject2 = left.left_and_then((int) => Right(int * 10))
      expect(subject2.is_right()).toEqual(true)
      expect(subject2.unwrap()).toEqual(20)
    })

    it("doesn't change Right val on Right", () => {
      const right: Either<number, string> = Right("error")
      const subject = right.left_and_then((int) => Left(int * int))
      expect(subject.is_right()).toEqual(true)
      expect(subject.unwrap_right()).toEqual("error")
    })
  })

  describe("right", () => {
    it("converts value into Some for Right", () => {
      const string = Right("123")
      const subject = string.right()
      expect(subject.is_some()).toEqual(true)
      expect(subject.unwrap()).toEqual("123")
    })

    it("converts value into None for Left", () => {
      const string = Left("123")
      const subject = string.right()
      expect(subject.is_none()).toEqual(true)
    })
  })

  describe("right_and_then", () => {
    it("correctly returns new either on Right", () => {
      const right = Right(2)
      const subject1 = right.right_and_then((int) => Right(int * int))
      expect(subject1.is_right()).toEqual(true)
      expect(subject1.unwrap()).toEqual(4)
      const subject2 = right.right_and_then((int) => Left(int * 10))
      expect(subject2.is_left()).toEqual(true)
      expect(subject2.unwrap()).toEqual(20)
    })

    it("doesn't change Left val on Left", () => {
      const left: Either<string, number> = Left("three")
      const subject = left.right_and_then((int) => Right(int * int))
      expect(subject.is_left()).toEqual(true)
      expect(subject.unwrap_left()).toEqual("three")
    })
  })

  describe("unwrap", () => {
    it("unwraps when Either is left or right", () => {
      const string_left = Left("123")
      const subject1 = string_left.unwrap()
      expect(subject1).toEqual("123")
      const string_right = Right("456")
      const subject2 = string_right.unwrap()
      expect(subject2).toEqual("456")
    })
  })

  describe("unwrap_left", () => {
    it("unwraps when Either is left", () => {
      const string_left = Left("123")
      const subject = string_left.unwrap_left()
      expect(subject).toEqual("123")
    })

    it("throws when Either is right", () => {
      const string_right = Right("123")
      const subject = () => string_right.unwrap_left()
      expect(subject).toThrow(ReferenceError)
      expect(subject).toThrow("Cannot unwrap Left value of Either.Right")
    })
  })

  describe("unwrap_left_or", () => {
    it("unwraps original value when Either is left", () => {
      const string_left = Left("123")
      const subject = string_left.unwrap_left_or("456")
      expect(subject).toEqual("123")
    })

    it("unwraps other value when Either is right", () => {
      const string_left = Right("123")
      const subject = string_left.unwrap_left_or("456")
      expect(subject).toEqual("456")
    })
  })

  describe("unwrap_left_or_else", () => {
    it("unwraps original value when Either is left", () => {
      const string_left = Left("123")
      const subject = string_left.unwrap_left_or_else((_) => "456")
      expect(subject).toEqual("123")
    })

    it("unwraps other value when Either is right", () => {
      const string_left = Right("123")
      const subject = string_left.unwrap_left_or_else((_) => "456")
      expect(subject).toEqual("456")
    })

    it("doesn't call fn when Either is left", () => {
      const string_left = Left("123")
      const subject = jest.fn()
      string_left.unwrap_left_or_else(subject)
      expect(subject).not.toBeCalled()
    })
  })

  describe("unwrap_right", () => {
    it("unwraps when Either is right", () => {
      const string_right = Right("123")
      const subject = string_right.unwrap_right()
      expect(subject).toEqual("123")
    })

    it("throws when Either is left", () => {
      const string_left = Left("123")
      const subject = () => string_left.unwrap_right()
      expect(subject).toThrow(ReferenceError)
      expect(subject).toThrow("Cannot unwrap Right value of Either.Left")
    })
  })

  describe("unwrap_right_or", () => {
    it("unwraps original value when Either is right", () => {
      const string_right = Right("123")
      const subject = string_right.unwrap_right_or("456")
      expect(subject).toEqual("123")
    })

    it("unwraps other value when Either is left", () => {
      const string_right = Left("123")
      const subject = string_right.unwrap_right_or("456")
      expect(subject).toEqual("456")
    })
  })

  describe("unwrap_right_or_else", () => {
    it("unwraps original value when Either is right", () => {
      const string_right = Right("123")
      const subject = string_right.unwrap_right_or_else((_) => "456")
      expect(subject).toEqual("123")
    })

    it("unwraps other value when Either is left", () => {
      const string_right = Left("123")
      const subject = string_right.unwrap_right_or_else((_) => "456")
      expect(subject).toEqual("456")
    })

    it("doesn't call fn when Either is right", () => {
      const string_right = Right("123")
      const subject = jest.fn()
      string_right.unwrap_right_or_else(subject)
      expect(subject).not.toBeCalled()
    })
  })

  describe("match", () => {
    it("matches Either and returns transformed value", () => {
      function getMessage(data: Either<string, string>): string {
        return data.match({
          left: (_) => `Left: ${_}`,
          right: (_) => `Right: ${_}`,
        })
      }

      expect(getMessage(Left("left"))).toEqual(`Left: left`)
      expect(getMessage(Right("right"))).toEqual(`Right: right`)
    })
  })

  describe("map", () => {
    it("maps Left and Right and returns transformed Either", () => {
      const string_left = Left<string, string>("123")
      const string_right = Right<string, string>("456")

      const subject1 = string_left.map((_) => parseInt(_, 10))
      const subject2 = string_right.map((_) => parseInt(_, 10))

      expect(subject1.unwrap()).toEqual(123)
      expect(subject2.unwrap()).toEqual(456)
    })
  })

  describe("map_left", () => {
    it("maps Left and returns transformed Either", () => {
      const string = Left("123")

      const subject = string.map_left((_) => parseInt(_, 10))

      expect(subject.unwrap()).toEqual(123)
    })

    it("doesn't maps when Either is right", () => {
      const arr = [1, 2, 3]
      const number = Right(arr[0])

      const subject = number.map_left((_) => "different value")

      expect(subject.unwrap()).toEqual(1)
    })

    it("doesn't call fn when Either is right", () => {
      const string_right = Right("123")
      const subject = jest.fn()
      string_right.map_left(subject)
      expect(subject).not.toBeCalled()
    })
  })

  describe("map_right", () => {
    it("maps Right and returns transformed Either", () => {
      const string = Right("123")

      const subject = string.map_right((_) => parseInt(_, 10))

      expect(subject.unwrap()).toEqual(123)
    })

    it("doesn't maps when Either is left", () => {
      const arr = [1, 2, 3]
      const number = Left(arr[0])

      const subject = number.map_right((_) => "different value")

      expect(subject.unwrap()).toEqual(1)
    })

    it("doesn't call fn when Either is left", () => {
      const string_left = Left("123")
      const subject = jest.fn()
      string_left.map_right(subject)
      expect(subject).not.toBeCalled()
    })
  })

  describe("is_either", () => {
    it("should return true if Either is Right", () => {
      expect(is_either(Right(""))).toEqual(true)
    })

    it("should return true if Either is Left", () => {
      expect(is_either(Left(""))).toEqual(true)
    })

    it("should return false if value is not a Either", () => {
      expect(is_either(new Function())).toEqual(false)
      expect(is_either({})).toEqual(false)
      expect(is_either([])).toEqual(false)
      expect(is_either(true)).toEqual(false)
      expect(is_either("")).toEqual(false)
      expect(is_either(42)).toEqual(false)
    })
  })
})
