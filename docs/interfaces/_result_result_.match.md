[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["result/result"](../modules/_result_result_.md) › [Match](_result_result_.match.md)

# Interface: Match <**T, E, U**>

## Type parameters

▪ **T**

▪ **E**

▪ **U**

## Hierarchy

* **Match**

## Index

### Properties

* [err](_result_result_.match.md#err)
* [ok](_result_result_.match.md#ok)

## Properties

###  err

• **err**: *function*

*Defined in [result/result.ts:11](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L11)*

#### Type declaration:

▸ (`val`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | E |

___

###  ok

• **ok**: *function*

*Defined in [result/result.ts:10](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L10)*

#### Type declaration:

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |
