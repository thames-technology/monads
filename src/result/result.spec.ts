import { Err, isErr, isOk, Ok, Result, ResultType } from "./result";

describe("Result", () => {
  describe("Ok", () => {
    const value = "success";
    const okResult: Result<string, string> = Ok(value);

    test("type should return Ok", () => {
      expect(okResult.type).toBe(ResultType.Ok);
    });

    test("isOk should return true", () => {
      expect(okResult.isOk()).toBe(true);
    });

    test("isErr should return false", () => {
      expect(okResult.isErr()).toBe(false);
    });

    test("ok should return a Some with the value", () => {
      expect(okResult.ok().unwrap()).toBe(value);
    });

    test("err should return None", () => {
      expect(okResult.err().isNone()).toBe(true);
    });

    test("unwrap should return the value", () => {
      expect(okResult.unwrap()).toBe(value);
    });

    test("unwrapErr should throw", () => {
      expect(() => okResult.unwrapErr()).toThrow();
    });

    test("unwrapOr should return the value", () => {
      expect(okResult.unwrapOr("default")).toBe(value);
    });

    test("match should execute ok branch", () => {
      const result = okResult.match({
        ok: (val) => `Ok ${val}`,
        err: (val) => `Err ${val}`,
      });
      expect(result).toBe(`Ok ${value}`);
    });

    test("map should apply function and wrap result in Ok", () => {
      const mapped = okResult.map((val) => val.length);
      expect(mapped.unwrap()).toBe(value.length);
    });

    test("mapErr should not apply function and return Ok", () => {
      const mappedErr = okResult.mapErr((err) => `Error: ${err}`);
      expect(mappedErr.unwrap()).toBe(value);
    });

    test("andThen should apply function returning Result", () => {
      const andThenResult = okResult.andThen((val) => Ok(val.length));
      expect(andThenResult.unwrap()).toBe(value.length);
    });

    test("orElse should not apply function and return Ok", () => {
      const orElseResult = okResult.orElse((err) => Err(`Error: ${err}`));
      expect(orElseResult.unwrap()).toBe(value);
    });
  });

  describe("Err", () => {
    const error = "error";
    const errResult: Result<string, string> = Err(error);

    test("type should return Err", () => {
      expect(errResult.type).toBe(ResultType.Err);
    });

    test("isOk should return false", () => {
      expect(errResult.isOk()).toBe(false);
    });

    test("isErr should return true", () => {
      expect(errResult.isErr()).toBe(true);
    });

    test("ok should return None", () => {
      expect(errResult.ok().isNone()).toBe(true);
    });

    test("err should return a Some with the error", () => {
      expect(errResult.err().unwrap()).toBe(error);
    });

    test("unwrap should throw", () => {
      expect(() => errResult.unwrap()).toThrow();
    });

    test("unwrapErr should return the error", () => {
      expect(errResult.unwrapErr()).toBe(error);
    });

    test("unwrapOr should return the default value", () => {
      expect(errResult.unwrapOr("default")).toBe("default");
    });

    test("match should execute err branch", () => {
      const result = errResult.match({
        ok: (val) => `Ok ${val}`,
        err: (val) => `Err ${val}`,
      });
      expect(result).toBe(`Err ${error}`);
    });

    test("map should not apply function and return Err", () => {
      const mapped = errResult.map((val) => val.length);
      expect(() => mapped.unwrap()).toThrow();
    });

    test("mapErr should apply function and wrap result in Err", () => {
      const mappedErr = errResult.mapErr((err) => `Error: ${err}`);
      expect(mappedErr.unwrapErr()).toBe(`Error: ${error}`);
    });

    test("andThen should not apply function and return Err", () => {
      const andThenResult = errResult.andThen((val) => Ok(val.length));
      expect(() => andThenResult.unwrap()).toThrow();
    });

    test("orElse should apply function returning Result", () => {
      const orElseResult = errResult.orElse((err) =>
        Ok(`Recovered from ${err}`)
      );
      expect(orElseResult.unwrap()).toBe(`Recovered from ${error}`);
    });
  });

  describe("isOk", () => {
    const ok = Ok("success");
    const err = Err("error");

    test("should return true for Ok", () => {
      expect(isOk(ok)).toBe(true);
    });

    test("should return false for Err", () => {
      expect(isOk(err)).toBe(false);
    });
  });

  describe("isErr", () => {
    const ok = Ok("success");
    const err = Err("error");

    test("should return false for Ok", () => {
      expect(isErr(ok)).toBe(false);
    });

    test("should return true for Err", () => {
      expect(isErr(err)).toBe(true);
    });
  });

  describe("typeguards", () => {
    const value = "success";
    const result: Result<string, string> = Ok(value);
    // Will throw a type error if `arg` is not never
    const assertNever = (arg: never): never => {
      return arg;
    };
    test("isOk should serve as a typeguard", () => {
      if (result.isOk()) {
        assertNever(result.unwrapErr()); // is `never`, as expected
        // @ts-expect-error - not `never`
        assertNever(result.unwrap()); // is not `never`, as expected
      }
    });
    test("isErr should serve as a typeguard", () => {
      if (result.isErr()) {
        assertNever(result.unwrap()); // is `never`, as expected
        // @ts-expect-error - not `never`
        assertNever(result.unwrapErr()); // is not `never`, as expected
      }
    });
    test("typeguardds should continue even with mapping", () => {
      if (result.isOk()) {
        const updatedRes = result.map((v) => "Invoked!");
        assertNever(updatedRes.err().unwrap());
        // @ts-expect-error - not `never`
        assertNever(updatedRes.ok().unwrap());

        const updatedErr = result.mapErr((v) => new Error("Never invoked"));
        assertNever(updatedErr.err().unwrap());
        // @ts-expect-error - not `never`
        assertNever(updatedErr.ok().unwrap());
      }
      if (result.isErr()) {
        const updatedRes = result.map((v) => "Never invoked");
        assertNever(updatedRes.ok().unwrap());
        // @ts-expect-error - not `never`
        assertNever(updatedRes.err().unwrap());

        const updatedErr = result.mapErr((v) => new Error("Invoked!"));
        assertNever(updatedErr.ok().unwrap());
        // @ts-expect-error - not `never`
        assertNever(updatedErr.err().unwrap());
      }
    });
  });
});
