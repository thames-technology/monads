[@hqoss/monads](../README.md) › [Globals](../globals.md) › [Match](match.md)

# Interface: Match <**T, U, T, E, U, L, R, U**>

## Type parameters

▪ **T**

▪ **U**

▪ **T**

▪ **E**

▪ **U**

▪ **L**

▪ **R**

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

Defined in result/result.ts:11

#### Type declaration:

▸ (`val`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | E |

___

###  left

• **left**: *function*

Defined in either/either.ts:10

#### Type declaration:

▸ (`val`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

___

###  none

• **none**: *function | U*

Defined in option/option.ts:17

___

###  ok

• **ok**: *function*

Defined in result/result.ts:10

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

___

###  right

• **right**: *function*

Defined in either/either.ts:11

#### Type declaration:

▸ (`val`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

___

###  some

• **some**: *function*

Defined in option/option.ts:16

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |
