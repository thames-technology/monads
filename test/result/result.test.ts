import {
  Err,
  isErr,
  isOk,
  isResult,
  Ok,
  Result,
  ResultType,
} from "../../src/result/result";

describe("Result", () => {
  interface IScenario<T> {
    value: T;
  }

  function getOkAssertion<T>(type: string): (scenario: IScenario<T>) => void {
    return (scenario: IScenario<T>) => {
      it(
        "correctly creates an instance of Ok with value '" +
          scenario.value +
          "'",
        () => {
          const subject = Ok(scenario.value);

          expect(subject.type).toEqual(ResultType.Ok);

          expect(subject.isOk()).toEqual(true);
          expect(subject.isErr()).toEqual(false);

          expect(() => subject.unwrapErr()).toThrow();
          expect(subject.unwrapOr("" as any)).toEqual(scenario.value);

          if (isOk(subject)) {
            expect(typeof subject.unwrap()).toEqual(type.toLowerCase());
            expect(subject.unwrap()).toEqual(scenario.value);
          } else {
            throw new Error("Has to be _Ok!");
          }
        },
      );
    };
  }

  function getErrAssertion<T>(type: string): (scenario: IScenario<T>) => void {
    return (scenario: IScenario<T>) => {
      it(
        "correctly creates an instance of Err with value '" +
          scenario.value +
          "'",
        () => {
          const subject = Err(scenario.value);

          expect(subject.type).toEqual(ResultType.Err);

          expect(subject.isOk()).toEqual(false);
          expect(subject.isErr()).toEqual(true);

          expect(() => subject.unwrap()).toThrow();
          expect(subject.unwrapOr("optb" as any)).toEqual("optb");

          if (isErr(subject)) {
            expect(typeof subject.unwrapErr()).toEqual(type.toLowerCase());
            expect(subject.unwrapErr()).toEqual(scenario.value);
          } else {
            throw new Error("Has to be _Err!");
          }
        },
      );
    };
  }

  describe("Boolean", () => {
    const type = "Boolean";

    const scenarios: IScenario<boolean>[] = [
      { value: true },
      { value: false },
      { value: Boolean(true) },
    ];

    const assertionOk = getOkAssertion<boolean>(type);
    const assertionErr = getErrAssertion<boolean>(type);

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("Number", () => {
    const type = "Number";

    const scenarios: IScenario<number>[] = [
      { value: 37 },
      { value: 3.14 },
      { value: 0 },
      { value: Math.LN2 },
      { value: Infinity },
      { value: NaN },
      { value: Number(1) },
    ];

    const assertionOk = getOkAssertion<number>(type);
    const assertionErr = getErrAssertion<number>(type);

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("String", () => {
    const type = "String";

    const scenarios: IScenario<string>[] = [
      { value: "" },
      { value: "bla" },
      { value: typeof 1 },
      { value: String("abc") },
    ];

    const assertionOk = getOkAssertion<string>(type);
    const assertionErr = getErrAssertion<string>(type);

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("Function", () => {
    const type = "Function";

    const scenarios: IScenario<any>[] = [
      {
        value(): undefined {
          return undefined;
        },
      },
      {
        value: class C {},
      },
      { value: Math.sin },
    ];

    const assertionOk = getOkAssertion<any>(type);
    const assertionErr = getErrAssertion<any>(type);

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("Object", () => {
    const type = "Object";

    const scenarios: IScenario<object>[] = [
      { value: { a: 1 } },
      { value: [1, 2, 4] },
      { value: new Date() },
      // { value: Boolean(true) },
      // { value: Number(1) },
      // { value: String("abc") },
    ];

    const assertionOk = getOkAssertion<object>(type);
    const assertionErr = getErrAssertion<object>(type);

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("RegEx", () => {
    const val = /s/;

    it("correctly creates an instance of Ok with value '" + val + "'", () => {
      const subject = Ok(val);

      expect(subject.type).toEqual(ResultType.Ok);

      expect(subject.isOk()).toEqual(true);
      expect(subject.isErr()).toEqual(false);

      if (isOk(subject)) {
        const type = typeof subject.unwrap();

        expect(type === "function" || type === "object").toEqual(true);
        expect(subject.unwrap()).toEqual(val);
      } else {
        throw new Error("Has to be _Ok!");
      }
    });

    it("correctly creates an instance of Err with value '" + val + "'", () => {
      const subject = Err(val);

      expect(subject.type).toEqual(ResultType.Err);

      expect(subject.isOk()).toEqual(false);
      expect(subject.isErr()).toEqual(true);

      if (isErr(subject)) {
        const type = typeof subject.unwrapErr();

        expect(type === "function" || type === "object").toEqual(true);
        expect(subject.unwrapErr()).toEqual(val);
      } else {
        throw new Error("Has to be _Err!");
      }
    });
  });

  describe("Undefined, Null", () => {
    const array: string[] = ["a", "b"];
    const outOfBoundIndex = array.length + 1;

    const object = { a: "_a", b: "_b" };
    const outOfBoundProperty = "z";

    const scenarios: IScenario<undefined | null>[] = [
      { value: undefined },
      { value: null },
      { value: array[outOfBoundIndex] },
      { value: [null][0] },
      { value: (object as any)[outOfBoundProperty] },
      { value: ({ _: null } as any)._ },
    ];

    const assertionOk = (scenario: IScenario<any>) => {
      it("Ok works correctly", () => {
        const subject = Ok(scenario.value);

        expect(subject.type).toEqual(ResultType.Ok);

        expect(subject.isOk()).toEqual(true);
        expect(subject.isErr()).toEqual(false);
        expect(subject.unwrap()).toEqual(scenario.value);
      });
    };

    const assertionErr = (scenario: IScenario<any>) => {
      it("Err works correctly", () => {
        const subject = Err(scenario.value);

        expect(subject.type).toEqual(ResultType.Err);

        expect(subject.isOk()).toEqual(false);
        expect(subject.isErr()).toEqual(true);
        expect(subject.unwrapErr()).toEqual(scenario.value);
      });
    };

    scenarios.forEach(assertionOk);
    scenarios.forEach(assertionErr);
  });

  describe("ok_or", () => {
    it("returns optb correctly", () => {
      let string: Result<string, string> = Ok("foo");
      expect(string.unwrapOr("bar")).toEqual("foo");

      string = Err("foo");
      expect(string.unwrapOr("bar")).toEqual("bar");
    });
  });

  describe("match", () => {
    it("correctly matches Ok and returns transformed value", () => {
      const string = Ok("string");

      const subject = string.match({
        ok: (_) => _.toUpperCase(),
        err: (_) => _,
      });

      expect(subject).toEqual("STRING");
    });

    it("correctly matches Err and returns fallback value", () => {
      const arr = [1, 2, 3];
      const number = Err(arr[0]);

      const subject = number.match({
        ok: (_) => 0,
        err: (_) => _,
      });

      expect(subject).toEqual(1);
    });

    it("correctly matches Result and returns fallback value", () => {
      function getMessage(data: Result<string, string>): string {
        return data.match({
          ok: (_) => `Success: ${_}`,
          err: (_) => `Error: ${_}`,
        });
      }

      expect(getMessage(Ok("ok"))).toEqual(`Success: ok`);
      expect(getMessage(Err("err"))).toEqual(`Error: err`);
    });
  });

  describe("map", () => {
    it("correctly maps Ok and returns transformed Result", () => {
      const string = Ok("123");

      const subject = string.map((_) => parseInt(_, 10));

      expect(subject.unwrap()).toEqual(123);
    });

    it("correctly returns untouched Err when trying to use map", () => {
      const arr = [1, 2, 3];
      const number = Err(arr[0]);

      const subject = number.map((_) => "different value");

      expect(subject.unwrapErr()).toEqual(1);
    });

    it("correctly maps Result and returns transformed value", () => {
      function getMessage(
        data: Result<string, string>,
      ): Result<number, string> {
        return data.map((_) => parseInt(_, 10));
      }

      let subject = getMessage(Ok("123"));
      expect(isOk(subject) ? subject.unwrap() : 0).toEqual(123);

      subject = getMessage(Err("123"));
      expect(isErr(subject) ? subject.unwrapErr() : "0").toEqual("123");
    });
  });

  describe("mapErr", () => {
    it("correctly maps on Err and returns transformed Result", () => {
      const err = Err("unknown error");
      const subject = err.mapErr((errStr) => errStr.toUpperCase());
      expect(subject.isErr()).toEqual(true);
      expect(subject.unwrapErr()).toEqual("UNKNOWN ERROR");
    });

    it("doesn't change Ok val on Ok", () => {
      const ok: Result<string, number> = Ok("value");
      const subject = ok.mapErr((errNum) => errNum.toString());
      expect(subject.isOk()).toEqual(true);
      expect(subject.unwrap()).toEqual("value");
    });
  });

  describe("andThen", () => {
    it("correctly returns new result on Ok", () => {
      const ok = Ok(2);
      const subject = ok.andThen((int) => Ok(int * int));
      expect(subject.isOk()).toEqual(true);
      expect(subject.unwrap()).toEqual(4);
    });

    it("doesn't change Err val on Err", () => {
      const err: Result<number, string> = Err("error");
      const subject = err.andThen((int) => Ok(int * int));
      expect(subject.isErr()).toEqual(true);
      expect(subject.unwrapErr()).toEqual("error");
    });
  });

  describe("orElse", () => {
    it("correctly returns ok value of this on Ok", () => {
      const ok = Ok(2);
      const subject = ok.orElse(() => Ok(5));
      expect(subject.isOk()).toEqual(true);
      expect(subject.unwrap()).toEqual(2);
    });

    it("correctly return alternative new value on error", () => {
      const err: Result<number, number> = Err(2);
      const subject = err.orElse((int) => Ok(int * int));
      expect(subject.isOk()).toEqual(true);
      expect(subject.unwrap()).toEqual(4);
    });

    it("correctly chain multiple (Ok) statements", () => {
      const doubleOr12: (int: number) => Result<number, number> = (
        int: number,
      ) => (int * 2 === 16 ? Ok(12) : Err(int * 2));

      const subject = doubleOr12(2)
        .orElse(doubleOr12)
        .orElse(doubleOr12)
        .orElse(doubleOr12);
      expect(subject.isOk()).toEqual(true);
      expect(subject.unwrap()).toEqual(12);
    });
  });

  describe("unwrap", () => {
    it("unwraps when Result is ok", () => {
      const string_ok = Ok("123");
      const subject = string_ok.unwrap();
      expect(subject).toEqual("123");
    });

    it("throws when Result is err", () => {
      const string_err = Err("123");
      const subject = () => string_err.unwrap();
      expect(subject).toThrow(ReferenceError);
      expect(subject).toThrow("Cannot unwrap Ok value of Result.Err");
    });
  });

  describe("unwrapOr", () => {
    it("unwraps original value when Result is ok", () => {
      const string_ok = Ok("123");
      const subject = string_ok.unwrapOr("456");
      expect(subject).toEqual("123");
    });

    it("unwraps optb when Result is err", () => {
      const string_err = Err("123");
      const subject = string_err.unwrapOr("456");
      expect(subject).toEqual("456");
    });
  });

  describe("unwrapErr", () => {
    it("unwraps error when Result is err", () => {
      const string_err = Err("123");
      const subject = string_err.unwrapErr();
      expect(subject).toEqual("123");
    });

    it("throws when Result is ok", () => {
      const string_ok = Ok("123");
      const subject = () => string_ok.unwrapErr();
      expect(subject).toThrow(ReferenceError);
      expect(subject).toThrow("Cannot unwrap Err value of Result.Ok");
    });
  });

  describe("ok", () => {
    it("converts value into Some for Ok", () => {
      const string = Ok("123");
      const subject = string.ok();
      expect(subject.isSome()).toEqual(true);
      expect(subject.unwrap()).toEqual("123");
    });

    it("converts value into None for Err", () => {
      const string = Err("123");
      const subject = string.ok();
      expect(subject.isNone()).toEqual(true);
    });
  });

  describe("err", () => {
    it("converts value into Some for Err", () => {
      const string = Err("123");
      const subject = string.err();
      expect(subject.isSome()).toEqual(true);
      expect(subject.unwrap()).toEqual("123");
    });

    it("converts value into None for Ok", () => {
      const string = Ok("123");
      const subject = string.err();
      expect(subject.isNone()).toEqual(true);
    });
  });

  describe("isResult", () => {
    it("should return true if Result is Err", () => {
      expect(isResult(Err(""))).toEqual(true);
    });

    it("should return true if Result is Ok", () => {
      expect(isResult(Ok(""))).toEqual(true);
    });

    it("should return false if value is not a Result", () => {
      expect(isResult(new Function())).toEqual(false);
      expect(isResult({})).toEqual(false);
      expect(isResult([])).toEqual(false);
      expect(isResult(true)).toEqual(false);
      expect(isResult("")).toEqual(false);
      expect(isResult(42)).toEqual(false);
    });
  });
});
