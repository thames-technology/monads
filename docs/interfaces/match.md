[@hqoss/monads](../README.md) › [Globals](../globals.md) › [Match](match.md)

# Interface: Match <**T, U, L, R, U, T, E, U**>

## Type parameters

▪ **T**

▪ **U**

▪ **L**

▪ **R**

▪ **U**

▪ **T**

▪ **E**

▪ **U**

## Hierarchy

* **Match**

## Index

### Properties

* [err](match.md#err)
* [left](match.md#left)
* [none](match.md#none)
* [ok](match.md#ok)
* [right](match.md#right)
* [some](match.md#some)

## Properties

###  err

• **err**: *function*

*Defined in [result/result.ts:11](https://github.com/qworks-io/monads/blob/6a3a7f7/src/result/result.ts#L11)*

#### Type declaration:

▸ (`val`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | E |

___

###  left

• **left**: *function*

*Defined in [either/either.ts:10](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L10)*

#### Type declaration:

▸ (`val`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

___

###  none

• **none**: *function | U*

*Defined in [option/option.ts:17](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L17)*

___

###  ok

• **ok**: *function*

*Defined in [result/result.ts:10](https://github.com/qworks-io/monads/blob/6a3a7f7/src/result/result.ts#L10)*

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

___

###  right

• **right**: *function*

*Defined in [either/either.ts:11](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L11)*

#### Type declaration:

▸ (`val`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

___

###  some

• **some**: *function*

*Defined in [option/option.ts:16](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L16)*

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |
