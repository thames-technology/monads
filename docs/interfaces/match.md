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

*Defined in [src/result/result.ts:10](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L10)*

#### Type declaration:

▸ (`val`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | E |

___

###  left

• **left**: *function*

*Defined in [src/either/either.ts:9](https://github.com/qworks-io/monads/blob/d32300b/src/either/either.ts#L9)*

#### Type declaration:

▸ (`val`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

___

###  none

• **none**: *function | U*

*Defined in [src/option/option.ts:8](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L8)*

___

###  ok

• **ok**: *function*

*Defined in [src/result/result.ts:9](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L9)*

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

___

###  right

• **right**: *function*

*Defined in [src/either/either.ts:10](https://github.com/qworks-io/monads/blob/d32300b/src/either/either.ts#L10)*

#### Type declaration:

▸ (`val`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

___

###  some

• **some**: *function*

*Defined in [src/option/option.ts:7](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L7)*

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |
