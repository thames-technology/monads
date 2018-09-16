"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("Option", () => {
    function getAssertion(type) {
        return (scenario) => {
            it("correctly creates an instance of Some with value '" + scenario.value + "'", () => {
                const subject = _1.Some(scenario.value);
                expect(subject.type).toEqual(_1.OptionType.Some);
                expect(subject.is_some()).toEqual(true);
                expect(subject.is_none()).toEqual(false);
                expect(subject.unwrap_or({})).toEqual(scenario.value);
                expect(typeof subject.unwrap()).toEqual(type.toLowerCase());
                expect(subject.unwrap()).toEqual(scenario.value);
            });
        };
    }
    describe("Some", () => {
        describe("Boolean", () => {
            const type = "Boolean";
            const scenarios = [
                { value: true },
                { value: false },
                { value: Boolean(true) },
            ];
            const assertion = getAssertion(type);
            scenarios.forEach(assertion);
        });
        describe("Number", () => {
            const type = "Number";
            const scenarios = [
                { value: 37 },
                { value: 3.14 },
                { value: 0 },
                { value: Math.LN2 },
                { value: Infinity },
                { value: NaN },
                { value: Number(1) },
            ];
            const assertion = getAssertion(type);
            scenarios.forEach(assertion);
        });
        describe("String", () => {
            const type = "String";
            const scenarios = [
                { value: "" },
                { value: "bla" },
                { value: typeof 1 },
                { value: String("abc") },
            ];
            const assertion = getAssertion(type);
            scenarios.forEach(assertion);
        });
        describe("Function", () => {
            const type = "Function";
            const scenarios = [
                {
                    value: function () { },
                },
                {
                    value: class C {
                    },
                },
                { value: Math.sin },
            ];
            const assertion = getAssertion(type);
            scenarios.forEach(assertion);
        });
        describe("Object", () => {
            const type = "Object";
            const scenarios = [
                { value: { a: 1 } },
                { value: [1, 2, 4] },
                { value: new Date() },
                { value: new Boolean(true) },
                { value: new Number(1) },
                { value: new String("abc") },
            ];
            const assertion = getAssertion(type);
            scenarios.forEach(assertion);
        });
        describe("RegEx", () => {
            const val = /s/;
            it("correctly creates an instance of Option with value '" + val + "'", () => {
                const subject = _1.Some(val);
                expect(subject.type).toEqual(_1.OptionType.Some);
                expect(subject.is_some()).toEqual(true);
                expect(subject.is_none()).toEqual(false);
                expect(subject.unwrap_or(val)).toEqual(val);
                const type = typeof subject.unwrap();
                expect(type === "function" || type === "object").toEqual(true);
                expect(subject.unwrap()).toEqual(val);
            });
        });
        describe("Undefined, Null", () => {
            let array = ["a", "b"];
            const outOfBoundIndex = array.length + 1;
            let object = {
                a: "_a",
                b: "_b",
            };
            const outOfBoundProperty = "z";
            const scenarios = [
                { value: undefined },
                { value: null },
                { value: array[outOfBoundIndex] },
                { value: [null][0] },
                { value: object[outOfBoundProperty] },
                { value: { _: null }._ },
            ];
            const assertion = (scenario) => {
                it("is None when trying to access out of bound index, property or variable, calling unwrap() impossible", () => {
                    const subject = _1.Some(scenario.value);
                    expect(subject.type).toEqual(_1.OptionType.None);
                    expect(subject.is_none()).toEqual(true);
                    expect(subject.is_some()).toEqual(false);
                    expect(() => subject.unwrap()).toThrow();
                });
            };
            scenarios.forEach(assertion);
        });
        describe("match", () => {
            it("correctly matches Some and returns transformed value", () => {
                const string = _1.Some("string");
                const subject = string.match({
                    some: str => str.toUpperCase(),
                    none: "OTHER STRING",
                });
                expect(subject).toEqual("STRING");
            });
            it("correctly matches None and returns fallback value", () => {
                const arr = [1, 2, 3];
                const maybeNumber = _1.Some(arr[arr.length + 1]);
                const subject = maybeNumber.match({
                    some: _ => _ * 2,
                    none: NaN,
                });
                expect(subject).toEqual(NaN);
            });
        });
        describe("map", () => {
            it("correctly maps Some and returns a new Some with transformed value", () => {
                const string = _1.Some("123");
                const subject = string.map(_ => parseInt(_));
                expect(_1.is_some(subject) ? subject.unwrap() : undefined).toEqual(123);
            });
        });
    });
    describe("None", () => {
        it("correctly creates its instance, returns correct value when calling unwrap_or()", () => {
            const subject = _1.None;
            expect(subject.type).toEqual(_1.OptionType.None);
            expect(subject.is_none()).toEqual(true);
            expect(subject.is_some()).toEqual(false);
            expect(subject.unwrap_or("string")).toEqual("string");
        });
        describe("unwrap_or", () => {
            it("should correctly throw if trying to call with undefined or null", () => {
                const subject = _1.None;
                const array = ["a"], outOfBoundIndex = array.length + 1;
                expect(() => subject.unwrap_or(array[outOfBoundIndex])).toThrow();
            });
        });
        describe("match", () => {
            it("correctly matches None and returns fallback value", () => {
                const subject = _1.None.match({
                    some: _ => "something",
                    none: "nothing",
                });
                expect(subject).toEqual("nothing");
            });
        });
        describe("map", () => {
            it("correctly maps Some and returns a new Some with transformed value", () => {
                const subject = _1.None.map(_ => parseInt(_));
                expect(subject.type).toEqual(_1.OptionType.None);
            });
        });
    });
    describe("Option", () => {
        describe("match", () => {
            it("correctly matches Some and returns transformed value", () => {
                let a;
                const date = new Date();
                if (true === true)
                    a = _1.Some(date);
                else
                    a = _1.None;
                const subject = a.match({
                    some: _ => _.getFullYear(),
                    none: 1994,
                });
                expect(subject).toEqual(date.getFullYear());
            });
            it("correctly matches None and returns fallback value", () => {
                let a;
                const initialValue = true;
                if (1 > 2)
                    a = _1.Some(initialValue);
                else
                    a = _1.None;
                const subject = a.match({
                    some: _ => !_,
                    none: initialValue,
                });
                expect(subject).toEqual(initialValue);
            });
            it("correctly matches None and returns fallback value when method provided to none branch", () => {
                let a = _1.None;
                const subject = a.match({
                    some: _ => _,
                    none: () => "N/A",
                });
                expect(subject).toEqual("N/A");
            });
        });
        describe("map", () => {
            it("returns transformed Some when method applied to a value that exists", () => {
                const arr = [1, 2, 3];
                const subject = _1.Some(arr[0]).map(_ => _.toString());
                expect(_1.is_some(subject) ? subject.unwrap() : undefined).toEqual("1");
            });
            it("returns None when method applied to a value that does not exist", () => {
                const arr = [1, 2, 3];
                const subject = _1.Some(arr[arr.length + 1]).map(_ => _.toString());
                expect(subject.is_none()).toEqual(true);
            });
            it("throws when transform function throws", () => {
                const arr = [1, 2, 3];
                const subject = () => _1.Some(arr[0]).map(_ => JSON.parse("{null}"));
                expect(subject).toThrow(SyntaxError);
            });
        });
    });
    describe("constructor", () => {
        it("throws if no value inside", () => {
            expect(() => _1.some_constructor(null)).toThrow();
        });
    });
});
describe("is_some", () => {
    it("should unwrap after a successful preliminary check", () => {
        let a;
        const subject = _1.Some(42);
        if (_1.is_some(subject)) {
            a = subject.unwrap();
        }
        else {
            a = 0;
        }
        expect(a).toEqual(42);
    });
    it("should not unwrap after a failing preliminary check", () => {
        const a = ["a", "b", "c"], outOfBoundIndex = a.length + 1;
        let b;
        const subject = _1.Some(a[outOfBoundIndex]);
        if (_1.is_some(subject)) {
            b = subject.unwrap();
        }
        else {
            b = "This Is None";
        }
        expect(b).toEqual("This Is None");
    });
});
describe("is_none", () => {
    it("should return true if Option is None", () => {
        const a = ["a", "b", "c"], outOfBoundIndex = a.length + 1;
        let b;
        const subject = _1.Some(a[outOfBoundIndex]);
        if (_1.is_none(subject)) {
            b = "Correct";
        }
        else {
            b = "Fail";
        }
        expect(_1.is_none(subject)).toEqual(true);
        expect(b).toEqual("Correct");
    });
    it("should return false if Option is Some", () => {
        const a = () => null;
        let b;
        const subject = _1.Some(a);
        if (_1.is_none(subject)) {
            b = "Fail";
        }
        else {
            b = "Correct";
        }
        expect(_1.is_none(subject)).toEqual(false);
        expect(b).toEqual("Correct");
    });
    it("should return true if value is None", () => {
        let a;
        const subject = _1.None;
        if (_1.is_none(subject)) {
            a = "Correct";
        }
        else {
            a = "Fail";
        }
        expect(_1.is_none(subject)).toEqual(true);
        expect(a).toEqual("Correct");
    });
});
describe("is_option", () => {
    it("should return true if Option is None", () => {
        expect(_1.is_option(_1.None)).toEqual(true);
    });
    it("should return true if Option is Some", () => {
        expect(_1.is_option(_1.Some(""))).toEqual(true);
    });
    it("should return false if value is not an Option", () => {
        expect(_1.is_option(new Function())).toEqual(false);
        expect(_1.is_option({})).toEqual(false);
        expect(_1.is_option([])).toEqual(false);
        expect(_1.is_option(true)).toEqual(false);
        expect(_1.is_option("")).toEqual(false);
        expect(_1.is_option(42)).toEqual(false);
    });
});
describe("get_in", () => {
    it("correctly returns a Some if key found in nested object", () => {
        const obj = { a: { b: "val" } };
        const subject = _1.get_in(obj, "a.b");
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or("")).toEqual("val");
    });
    it("correctly returns a None if key not found in nested object", () => {
        const obj = { a: { b: "val" } };
        const subject = _1.get_in(obj, "a.nonExistentKey");
        expect(subject.is_none()).toEqual(true);
    });
    it("correctly returns a None if object itself undefined", () => {
        const subject = _1.get_in(undefined, "a.b.c.d");
        expect(subject.is_none()).toEqual(true);
    });
});
describe("and_then", () => {
    let contact;
    let driver;
    let truck;
    beforeEach(() => {
        contact = { name: _1.None };
        driver = { contact: _1.None };
        truck = { driver: _1.None };
    });
    it("correctly returns the name as a Some if all properties are Some", () => {
        contact.name = _1.Some("Name");
        driver.contact = _1.Some(contact);
        truck.driver = _1.Some(driver);
        const subject = truck.driver.and_then(_ => _.contact).and_then(_ => _.name);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or("")).toEqual("Name");
    });
    it("correctly returns None if 'contact.name' is None", () => {
        driver.contact = _1.Some(contact);
        truck.driver = _1.Some(driver);
        const subject = truck.driver.and_then(_ => _.contact).and_then(_ => _.name);
        expect(subject.is_none()).toEqual(true);
    });
    it("correctly returns None if 'contact' is None", () => {
        contact.name = _1.Some("Name");
        driver.contact = _1.None;
        truck.driver = _1.Some(driver);
        const subject = truck.driver.and_then(_ => _.contact).and_then(_ => _.name);
        expect(subject.is_none()).toEqual(true);
    });
    it("correctly returns None if 'driver' is None", () => {
        contact.name = _1.Some("Name");
        driver.contact = _1.Some(contact);
        truck.driver = _1.None;
        const subject = truck.driver.and_then(_ => _.contact).and_then(_ => _.name);
        expect(subject.is_none()).toEqual(true);
    });
    it("throws if transform function throws", () => {
        contact.name = _1.Some("Name");
        driver.contact = _1.Some(contact);
        truck.driver = _1.Some(driver);
        const subject = () => truck.driver.and_then(_ => _1.Some(JSON.parse("{null}")));
        expect(subject).toThrow(SyntaxError);
    });
});
describe("or", () => {
    it("correctly returns Some(a) if 'a' is Some and 'b' is None", () => {
        const a = _1.Some(123), b = _1.None;
        const subject = a.or(b);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or(0)).toEqual(123);
    });
    it("correctly returns Some(b) if 'a' is None and 'b' is Some", () => {
        const a = _1.None, b = _1.Some(456);
        const subject = a.or(b);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or(0)).toEqual(456);
    });
    it("correctly returns Some(a) if 'a' is Some and 'b' is Some", () => {
        const a = _1.Some(11), b = _1.Some(12);
        const subject = a.or(b);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or(0)).toEqual(11);
    });
    it("correctly returns None if 'a' is None and 'b' is None", () => {
        const a = _1.None, b = _1.None;
        const subject = a.or(b);
        expect(subject.is_none()).toEqual(true);
    });
});
describe("and", () => {
    it("correctly returns None if 'a' is Some and 'b' is None", () => {
        const a = _1.Some(123), b = _1.None;
        const subject = a.and(b);
        expect(subject.is_none()).toEqual(true);
    });
    it("correctly returns None if 'a' is None and 'b' is Some", () => {
        const a = _1.None, b = _1.Some(123);
        const subject = a.and(b);
        expect(subject.is_none()).toEqual(true);
    });
    it("correctly returns Some(b) if 'a' is Some and 'b' is Some", () => {
        const a = _1.Some(123), b = _1.Some(456);
        const subject = a.and(b);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or(0)).toEqual(456);
    });
    it("correctly returns None if 'a' is None and 'b' is None", () => {
        const a = _1.None, b = _1.None;
        const subject = a.and(b);
        expect(subject.is_none()).toEqual(true);
    });
});
//# sourceMappingURL=index.spec.js.map