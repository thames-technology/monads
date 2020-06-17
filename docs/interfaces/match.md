[@hqoss/monads](../README.md) › [Globals](../globals.md) › [Match](match.md)

# Interface: Match ‹**T, U, L, R, U, T, E, U**›

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

Defined in lib/result/result.ts:10

#### Type declaration:

▸ (`val`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | E |

___

###  left

• **left**: *function*

Defined in lib/either/either.ts:9

#### Type declaration:

▸ (`val`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

___

###  none

• **none**: *function | U*

Defined in lib/option/option.ts:8

___

###  ok

• **ok**: *function*

Defined in lib/result/result.ts:9

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

___

###  right

• **right**: *function*

Defined in lib/either/either.ts:10

#### Type declaration:

▸ (`val`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

___

###  some

• **some**: *function*

Defined in lib/option/option.ts:7

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |
