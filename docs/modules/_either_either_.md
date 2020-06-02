[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["either/either"](_either_either_.md)

# Module: "either/either"

## Index

### Interfaces

* [Either](../interfaces/_either_either_.either.md)
* [Match](../interfaces/_either_either_.match.md)
* [ResLeft](../interfaces/_either_either_.resleft.md)
* [ResRight](../interfaces/_either_either_.resright.md)

### Functions

* [Left](_either_either_.md#left)
* [Right](_either_either_.md#right)
* [isEither](_either_either_.md#iseither)
* [isLeft](_either_either_.md#isleft)
* [isRight](_either_either_.md#isright)

### Object literals

* [EitherType](_either_either_.md#const-eithertype)

## Functions

###  Left

▸ **Left**<**L**, **R**>(`val`: L): *[ResLeft](../interfaces/_either_either_.resleft.md)‹L, R›*

*Defined in [either/either.ts:55](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L55)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

**Returns:** *[ResLeft](../interfaces/_either_either_.resleft.md)‹L, R›*

___

###  Right

▸ **Right**<**L**, **R**>(`val`: R): *[ResRight](../interfaces/_either_either_.resright.md)‹L, R›*

*Defined in [either/either.ts:112](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L112)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

**Returns:** *[ResRight](../interfaces/_either_either_.resright.md)‹L, R›*

___

###  isEither

▸ **isEither**<**L**, **R**>(`val`: [Either](../interfaces/_either_either_.either.md)‹L, R› | any): *val is Either<L, R>*

*Defined in [either/either.ts:169](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L169)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](../interfaces/_either_either_.either.md)‹L, R› &#124; any |

**Returns:** *val is Either<L, R>*

___

###  isLeft

▸ **isLeft**<**L**, **R**>(`val`: [Either](../interfaces/_either_either_.either.md)‹L, R›): *val is ResLeft<L, R>*

*Defined in [either/either.ts:175](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L175)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](../interfaces/_either_either_.either.md)‹L, R› |

**Returns:** *val is ResLeft<L, R>*

___

###  isRight

▸ **isRight**<**L**, **R**>(`val`: [Either](../interfaces/_either_either_.either.md)‹L, R›): *val is ResRight<L, R>*

*Defined in [either/either.ts:180](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L180)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Either](../interfaces/_either_either_.either.md)‹L, R› |

**Returns:** *val is ResRight<L, R>*

## Object literals

### `Const` EitherType

### ▪ **EitherType**: *object*

*Defined in [either/either.ts:4](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L4)*

###  Left

• **Left**: *symbol* = Symbol(":left")

*Defined in [either/either.ts:5](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L5)*

###  Right

• **Right**: *symbol* = Symbol(":right")

*Defined in [either/either.ts:6](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L6)*
