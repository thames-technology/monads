import {
  Either,
  EitherType,
  isLeft,
  isRight,
  Left,
  LeftEither,
  Right,
  RightEither,
} from "./either";

describe("Either", () => {
  describe("Left", () => {
    const error = "error";
    const leftResult = Left<string, string>(error);

    test("type should return Left", () => {
      expect(leftResult.type).toBe(EitherType.Left);
    });

    test("isLeft should return true", () => {
      expect(leftResult.isLeft()).toBe(true);
    });

    test("isRight should return false", () => {
      expect(leftResult.isRight()).toBe(false);
    });

    test("left should return a Some with the error", () => {
      expect(leftResult.left().unwrap()).toBe(error);
    });

    test("right should return None", () => {
      expect(leftResult.right().isNone()).toBe(true);
    });

    test("unwrap should return the error", () => {
      expect(leftResult.unwrap()).toBe(error);
    });

    test("unwrapLeft should return the error", () => {
      expect(leftResult.unwrapLeft()).toBe(error);
    });

    test("unwrapLeftOr should return the error", () => {
      expect(leftResult.unwrapLeftOr("default")).toBe(error);
    });

    test("unwrapRight should throw", () => {
      expect(() => leftResult.unwrapRight()).toThrow();
    });

    test("unwrapRightOr should return the default value", () => {
      expect(leftResult.unwrapRightOr("default")).toBe("default");
    });

    test("match should execute left branch", () => {
      const result = leftResult.match({
        left: (val) => `Left ${val}`,
        right: (val) => `Right ${val}`,
      });
      expect(result).toBe(`Left ${error}`);
    });

    test("mapLeft should return a new Left with the mapped value", () => {
      const mapped = leftResult.mapLeft((val) => val.toUpperCase());
      expect(mapped.left().unwrap()).toBe(error.toUpperCase());
    });

    test("mapRight should not apply function and return Left", () => {
      const mapped = leftResult.mapRight((val) => val.length);
      expect(mapped).toStrictEqual(leftResult);
    });

    test("leftAndThen should return a new Left with the mapped value", () => {
      const andThenResult = leftResult.leftAndThen((val) =>
        Left(val.toUpperCase())
      );
      expect(andThenResult.left().unwrap()).toBe(error.toUpperCase());
    });

    test("rightAndThen should not apply function and return Left", () => {
      const andThenResult = leftResult.rightAndThen((val) => Right(val.length));
      expect(andThenResult).toStrictEqual(leftResult);
    });
  });

  describe("Right", () => {
    const value = "success";
    const rightResult = Right<string, string>(value);

    test("type should return Right", () => {
      expect(rightResult.type).toBe(EitherType.Right);
    });

    test("isLeft should return false", () => {
      expect(rightResult.isLeft()).toBe(false);
    });

    test("isRight should return true", () => {
      expect(rightResult.isRight()).toBe(true);
    });

    test("left should return None", () => {
      expect(rightResult.left().isNone()).toBe(true);
    });

    test("right should return a Some with the value", () => {
      expect(rightResult.right().unwrap()).toBe(value);
    });

    test("unwrap should return the value", () => {
      expect(rightResult.unwrap()).toBe(value);
    });

    test("unwrapLeft should throw", () => {
      expect(() => rightResult.unwrapLeft()).toThrow();
    });

    test("unwrapLeftOr should return the default value", () => {
      expect(rightResult.unwrapLeftOr("default")).toBe("default");
    });

    test("unwrapRight should return the value", () => {
      expect(rightResult.unwrapRight()).toBe(value);
    });

    test("unwrapRightOr should return the value", () => {
      expect(rightResult.unwrapRightOr("default")).toBe(value);
    });

    test("match should execute right branch", () => {
      const result = rightResult.match({
        left: (val) => `Left ${val}`,
        right: (val) => `Right ${val}`,
      });
      expect(result).toBe(`Right ${value}`);
    });

    test("mapLeft should not apply function and return Right", () => {
      const mapped = rightResult.mapLeft((val) => val.toUpperCase());
      expect(mapped).toStrictEqual(rightResult);
    });

    test("mapRight should return a new Right with the mapped value", () => {
      const mapped = rightResult.mapRight((val) => val.length);
      expect(mapped.right().unwrap()).toBe(value.length);
    });

    test("leftAndThen should not apply function and return Right", () => {
      const andThenResult = rightResult.leftAndThen((val) =>
        Left(val.toUpperCase())
      );
      expect(andThenResult).toStrictEqual(rightResult);
    });

    test("rightAndThen should return a new Right with the mapped value", () => {
      const andThenResult = rightResult.rightAndThen((val) =>
        Right(val.length)
      );
      expect(andThenResult.right().unwrap()).toBe(value.length);
    });
  });

  describe("isLeft", () => {
    const left = Left("error");
    const right = Right("success");

    test("should return true for Left", () => {
      expect(isLeft(left)).toBe(true);
    });

    test("should return false for Right", () => {
      expect(isLeft(right)).toBe(false);
    });
  });

  describe("isRight", () => {
    const left = Left("error");
    const right = Right("success");

    test("should return false for Left", () => {
      expect(isRight(left)).toBe(false);
    });

    test("should return true for Right", () => {
      expect(isRight(right)).toBe(true);
    });
  });

  describe("typeguards", () => {
    const l = "left" as const;
    const r = "right" as const;
    type NonUndefined = {} | null; // eslint-disable-line @typescript-eslint/ban-types

    type Expect<T extends true> = T;
    type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
      T
    >() => T extends Y ? 1 : 2
      ? true
      : false;
    type ExpectNever<T> = Equal<T, never>;

    test("isLeft and isRight should serve as typeguards", () => {
      const l1 = Left(l);
      type LT1 = Expect<Equal<typeof l1, LeftEither<"left", never>>>;
      const l2 = l1.mapLeft((x) => "updated" as const);
      type LT2 = Expect<Equal<typeof l2, LeftEither<"updated", never>>>;
      const l3 = l1.mapRight((x) => "not relevant" as const);
      type LT3 = Expect<Equal<typeof l3, LeftEither<"left", "not relevant">>>;

      const left = l1.left().unwrap();
      type LT4 = Expect<Equal<typeof left, "left">>;
      const right = l1.right().unwrap();
      type LT5 = Expect<ExpectNever<typeof right>>;

      const r1 = Right(r);
      type RT1 = Expect<Equal<typeof r1, RightEither<never, "right">>>;
      const r2 = r1.mapLeft((x) => "not relevant" as const);
      type RT2 = Expect<Equal<typeof r2, RightEither<"not relevant", "right">>>;
      const r3 = r1.mapRight((x) => "updated" as const);
      type RT3 = Expect<Equal<typeof r3, RightEither<never, "updated">>>;

      const left2 = r1.left().unwrap();
      type RT4 = Expect<ExpectNever<typeof left2>>;
      const right2 = r1.right().unwrap();
      type RT5 = Expect<Equal<typeof right2, "right">>;
    });
  });
});
