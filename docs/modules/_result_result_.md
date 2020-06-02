[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["result/result"](_result_result_.md)

# Module: "result/result"

## Index

### Interfaces

* [Match](../interfaces/_result_result_.match.md)
* [ResErr](../interfaces/_result_result_.reserr.md)
* [ResOk](../interfaces/_result_result_.resok.md)
* [Result](../interfaces/_result_result_.result.md)

### Functions

* [Err](_result_result_.md#err)
* [Ok](_result_result_.md#ok)
* [isErr](_result_result_.md#iserr)
* [isOk](_result_result_.md#isok)
* [isResult](_result_result_.md#isresult)

### Object literals

* [ResultType](_result_result_.md#const-resulttype)

## Functions

###  Err

▸ **Err**<**T**, **E**>(`err`: E): *[ResErr](../interfaces/_result_result_.reserr.md)‹T, E›*

*Defined in [result/result.ts:94](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L94)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResErr](../interfaces/_result_result_.reserr.md)‹T, E›*

___

###  Ok

▸ **Ok**<**T**, **E**>(`val`: T): *[ResOk](../interfaces/_result_result_.resok.md)‹T, E›*

*Defined in [result/result.ts:52](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L52)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResOk](../interfaces/_result_result_.resok.md)‹T, E›*

___

###  isErr

▸ **isErr**<**T**, **E**>(`val`: [Result](../interfaces/_result_result_.result.md)‹T, E›): *val is ResErr<T, E>*

*Defined in [result/result.ts:145](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L145)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](../interfaces/_result_result_.result.md)‹T, E› |

**Returns:** *val is ResErr<T, E>*

___

###  isOk

▸ **isOk**<**T**, **E**>(`val`: [Result](../interfaces/_result_result_.result.md)‹T, E›): *val is ResOk<T>*

*Defined in [result/result.ts:140](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L140)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](../interfaces/_result_result_.result.md)‹T, E› |

**Returns:** *val is ResOk<T>*

___

###  isResult

▸ **isResult**<**T**, **E**>(`val`: [Result](../interfaces/_result_result_.result.md)‹T, E› | any): *val is Result<T, E>*

*Defined in [result/result.ts:136](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L136)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Result](../interfaces/_result_result_.result.md)‹T, E› &#124; any |

**Returns:** *val is Result<T, E>*

## Object literals

### `Const` ResultType

### ▪ **ResultType**: *object*

*Defined in [result/result.ts:4](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L4)*

###  Err

• **Err**: *symbol* = Symbol(":err")

*Defined in [result/result.ts:6](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L6)*

###  Ok

• **Ok**: *symbol* = Symbol(":ok")

*Defined in [result/result.ts:5](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L5)*
