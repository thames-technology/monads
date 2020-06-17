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
* [isErr](globals.md#iserr)
* [isLeft](globals.md#isleft)
* [isNone](globals.md#isnone)
* [isOk](globals.md#isok)
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

Defined in lib/option/option.ts:44

## Functions

###  Err

▸ **Err**‹**T**, **E**›(`err`: E): *[ResErr](interfaces/reserr.md)‹T, E›*

Defined in lib/result/result.ts:93

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

▸ **Left**‹**L**, **R**›(`val`: L): *[ResLeft](interfaces/resleft.md)‹L, R›*

Defined in lib/either/either.ts:54

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

▸ **Ok**‹**T**, **E**›(`val`: T): *[ResOk](interfaces/resok.md)‹T, E›*

Defined in lib/result/result.ts:51

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

▸ **Right**‹**L**, **R**›(`val`: R): *[ResRight](interfaces/resright.md)‹L, R›*

Defined in lib/either/either.ts:111

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

▸ **Some**‹**T**›(`val?`: T | undefined): *[Option](interfaces/option.md)‹T›*

Defined in lib/option/option.ts:38

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val?` | T &#124; undefined |

**Returns:** *[Option](interfaces/option.md)‹T›*

___

###  isErr

▸ **isErr**‹**T**, **E**›(`val`: [Result](interfaces/result.md)‹T, E›): *val is ResErr<T, E>*

Defined in lib/result/result.ts:139

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

▸ **isLeft**‹**L**, **R**›(`val`: [Either](interfaces/either.md)‹L, R›): *val is ResLeft<L, R>*

Defined in lib/either/either.ts:168

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

▸ **isNone**‹**T**›(`val`: [Option](interfaces/option.md)‹T›): *val is OptNone<T>*

Defined in lib/option/option.ts:132

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](interfaces/option.md)‹T› |

**Returns:** *val is OptNone<T>*

___

###  isOk

▸ **isOk**‹**T**, **E**›(`val`: [Result](interfaces/result.md)‹T, E›): *val is ResOk<T>*

Defined in lib/result/result.ts:135

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](interfaces/result.md)‹T, E› |

**Returns:** *val is ResOk<T>*

___

###  isRight

▸ **isRight**‹**L**, **R**›(`val`: [Either](interfaces/either.md)‹L, R›): *val is ResRight<L, R>*

Defined in lib/either/either.ts:172

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

▸ **isSome**‹**T**›(`val`: [Option](interfaces/option.md)‹T›): *val is OptSome<T>*

Defined in lib/option/option.ts:128

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](interfaces/option.md)‹T› |

**Returns:** *val is OptSome<T>*

___

###  none_constructor

▸ **none_constructor**‹**T**›(): *[OptNone](interfaces/optnone.md)‹T›*

Defined in lib/option/option.ts:85

**Type parameters:**

▪ **T**

**Returns:** *[OptNone](interfaces/optnone.md)‹T›*

___

###  some_constructor

▸ **some_constructor**‹**T**›(`val`: T): *[OptSome](interfaces/optsome.md)‹T›*

Defined in lib/option/option.ts:46

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

Defined in lib/either/either.ts:3

###  Left

• **Left**: *symbol* = Symbol(":left")

Defined in lib/either/either.ts:4

###  Right

• **Right**: *symbol* = Symbol(":right")

Defined in lib/either/either.ts:5

___

### `Const` OptionType

### ▪ **OptionType**: *object*

Defined in lib/option/option.ts:1

###  None

• **None**: *symbol* = Symbol(":none")

Defined in lib/option/option.ts:3

###  Some

• **Some**: *symbol* = Symbol(":some")

Defined in lib/option/option.ts:2

___

### `Const` ResultType

### ▪ **ResultType**: *object*

Defined in lib/result/result.ts:3

###  Err

• **Err**: *symbol* = Symbol(":err")

Defined in lib/result/result.ts:5

###  Ok

• **Ok**: *symbol* = Symbol(":ok")

Defined in lib/result/result.ts:4
