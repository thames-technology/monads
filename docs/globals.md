[@hqoss/monads](README.md) › [Globals](globals.md)

# @hqoss/monads

## Index

### Interfaces

* [Either](interfaces/either.md)
* [Match](interfaces/match.md)
* [OptNone](interfaces/optnone.md)
* [OptSome](interfaces/optsome.md)
* [Option](interfaces/option.md)
* [ResErr](interfaces/reserr.md)
* [ResLeft](interfaces/resleft.md)
* [ResOk](interfaces/resok.md)
* [ResRight](interfaces/resright.md)
* [Result](interfaces/result.md)

### Variables

* [None](globals.md#const-none)

### Functions

* [Err](globals.md#err)
* [Left](globals.md#left)
* [Ok](globals.md#ok)
* [Right](globals.md#right)
* [Some](globals.md#some)
* [getIn](globals.md#getin)
* [isEither](globals.md#iseither)
* [isErr](globals.md#iserr)
* [isLeft](globals.md#isleft)
* [isNone](globals.md#isnone)
* [isOk](globals.md#isok)
* [isOption](globals.md#isoption)
* [isResult](globals.md#isresult)
* [isRight](globals.md#isright)
* [isSome](globals.md#issome)
* [none_constructor](globals.md#none_constructor)
* [some_constructor](globals.md#some_constructor)

### Object literals

* [EitherType](globals.md#const-eithertype)
* [OptionType](globals.md#const-optiontype)
* [ResultType](globals.md#const-resulttype)

## Variables

### `Const` None

• **None**: *[OptNone](interfaces/optnone.md)‹any›* = none_constructor<any>()

Defined in option/option.ts:53

## Functions

###  Err

▸ **Err**<**T**, **E**>(`err`: E): *[ResErr](interfaces/reserr.md)‹T, E›*

Defined in result/result.ts:94

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResErr](interfaces/reserr.md)‹T, E›*

___

###  Left

▸ **Left**<**L**, **R**>(`val`: L): *[ResLeft](interfaces/resleft.md)‹L, R›*

Defined in either/either.ts:55

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

**Returns:** *[ResLeft](interfaces/resleft.md)‹L, R›*

___

###  Ok

▸ **Ok**<**T**, **E**>(`val`: T): *[ResOk](interfaces/resok.md)‹T, E›*

Defined in result/result.ts:52

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResOk](interfaces/resok.md)‹T, E›*

___

###  Right

▸ **Right**<**L**, **R**>(`val`: R): *[ResRight](interfaces/resright.md)‹L, R›*

Defined in either/either.ts:112

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

**Returns:** *[ResRight](interfaces/resright.md)‹L, R›*

___

###  Some

▸ **Some**<**T**>(`val?`: T | undefined): *[Option](interfaces/option.md)‹T›*

Defined in option/option.ts:47

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val?` | T &#124; undefined |

**Returns:** *[Option](interfaces/option.md)‹T›*

___

###  getIn

▸ **getIn**(`obj`: object | undefined | null, `key`: string): *[Option](interfaces/option.md)‹any›*

Defined in option/option.ts:146

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object &#124; undefined &#124; null |
`key` | string |

**Returns:** *[Option](interfaces/option.md)‹any›*

___

###  isEither

▸ **isEither**<**L**, **R**>(`val`: [Either](interfaces/either.md)‹L, R› | any): *val is Either<L, R>*

Defined in either/either.ts:169

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](interfaces/either.md)‹L, R› &#124; any |

**Returns:** *val is Either<L, R>*

___

###  isErr

▸ **isErr**<**T**, **E**>(`val`: [Result](interfaces/result.md)‹T, E›): *val is ResErr<T, E>*

Defined in result/result.ts:145

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](interfaces/result.md)‹T, E› |

**Returns:** *val is ResErr<T, E>*

___

###  isLeft

▸ **isLeft**<**L**, **R**>(`val`: [Either](interfaces/either.md)‹L, R›): *val is ResLeft<L, R>*

Defined in either/either.ts:175

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](interfaces/either.md)‹L, R› |

**Returns:** *val is ResLeft<L, R>*

___

###  isNone

▸ **isNone**<**T**>(`val`: [Option](interfaces/option.md)‹T›): *val is OptNone<T>*

Defined in option/option.ts:141

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](interfaces/option.md)‹T› |

**Returns:** *val is OptNone<T>*

___

###  isOk

▸ **isOk**<**T**, **E**>(`val`: [Result](interfaces/result.md)‹T, E›): *val is ResOk<T>*

Defined in result/result.ts:140

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](interfaces/result.md)‹T, E› |

**Returns:** *val is ResOk<T>*

___

###  isOption

▸ **isOption**<**T**>(`val`: [Option](interfaces/option.md)‹T› | any): *val is Option<T>*

Defined in option/option.ts:129

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](interfaces/option.md)‹T› &#124; any |

**Returns:** *val is Option<T>*

___

###  isResult

▸ **isResult**<**T**, **E**>(`val`: [Result](interfaces/result.md)‹T, E› | any): *val is Result<T, E>*

Defined in result/result.ts:136

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](interfaces/result.md)‹T, E› &#124; any |

**Returns:** *val is Result<T, E>*

___

###  isRight

▸ **isRight**<**L**, **R**>(`val`: [Either](interfaces/either.md)‹L, R›): *val is ResRight<L, R>*

Defined in either/either.ts:180

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](interfaces/either.md)‹L, R› |

**Returns:** *val is ResRight<L, R>*

___

###  isSome

▸ **isSome**<**T**>(`val`: [Option](interfaces/option.md)‹T›): *val is OptSome<T>*

Defined in option/option.ts:136

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](interfaces/option.md)‹T› |

**Returns:** *val is OptSome<T>*

___

###  none_constructor

▸ **none_constructor**<**T**>(): *[OptNone](interfaces/optnone.md)‹T›*

Defined in option/option.ts:95

**Type parameters:**

▪ **T**

**Returns:** *[OptNone](interfaces/optnone.md)‹T›*

___

###  some_constructor

▸ **some_constructor**<**T**>(`val`: T): *[OptSome](interfaces/optsome.md)‹T›*

Defined in option/option.ts:55

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptSome](interfaces/optsome.md)‹T›*

## Object literals

### `Const` EitherType

### ▪ **EitherType**: *object*

Defined in either/either.ts:4

###  Left

• **Left**: *symbol* = Symbol(":left")

Defined in either/either.ts:5

###  Right

• **Right**: *symbol* = Symbol(":right")

Defined in either/either.ts:6

___

### `Const` OptionType

### ▪ **OptionType**: *object*

Defined in option/option.ts:10

###  None

• **None**: *symbol* = Symbol(":none")

Defined in option/option.ts:12

###  Some

• **Some**: *symbol* = Symbol(":some")

Defined in option/option.ts:11

___

### `Const` ResultType

### ▪ **ResultType**: *object*

Defined in result/result.ts:4

###  Err

• **Err**: *symbol* = Symbol(":err")

Defined in result/result.ts:6

###  Ok

• **Ok**: *symbol* = Symbol(":ok")

Defined in result/result.ts:5
