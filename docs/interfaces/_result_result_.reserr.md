[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["result/result"](../modules/_result_result_.md) › [ResErr](_result_result_.reserr.md)

# Interface: ResErr <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [Result](_result_result_.result.md)‹T, E›

  ↳ **ResErr**

## Index

### Properties

* [type](_result_result_.reserr.md#type)

### Methods

* [andThen](_result_result_.reserr.md#andthen)
* [err](_result_result_.reserr.md#err)
* [isErr](_result_result_.reserr.md#iserr)
* [isOk](_result_result_.reserr.md#isok)
* [map](_result_result_.reserr.md#map)
* [mapErr](_result_result_.reserr.md#maperr)
* [match](_result_result_.reserr.md#match)
* [ok](_result_result_.reserr.md#ok)
* [orElse](_result_result_.reserr.md#orelse)
* [unwrap](_result_result_.reserr.md#unwrap)
* [unwrapErr](_result_result_.reserr.md#unwraperr)
* [unwrapOr](_result_result_.reserr.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Result](_result_result_.result.md).[type](_result_result_.result.md#type)*

*Defined in [result/result.ts:15](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L15)*

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[ResErr](_result_result_.reserr.md)‹never, E›*

*Overrides [Result](_result_result_.result.md).[andThen](_result_result_.result.md#andthen)*

*Defined in [result/result.ts:48](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L48)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Result](_result_result_.result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResErr](_result_result_.reserr.md)‹never, E›*

___

###  err

▸ **err**(): *[Option](_option_option_.option.md)‹E›*

*Inherited from [Result](_result_result_.result.md).[err](_result_result_.result.md#err)*

*Defined in [result/result.ts:19](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L19)*

**Returns:** *[Option](_option_option_.option.md)‹E›*

___

###  isErr

▸ **isErr**(): *boolean*

*Inherited from [Result](_result_result_.result.md).[isErr](_result_result_.result.md#iserr)*

*Defined in [result/result.ts:17](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L17)*

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Inherited from [Result](_result_result_.result.md).[isOk](_result_result_.result.md#isok)*

*Defined in [result/result.ts:16](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L16)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[ResErr](_result_result_.reserr.md)‹never, E›*

*Overrides [Result](_result_result_.result.md).[map](_result_result_.result.md#map)*

*Defined in [result/result.ts:46](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L46)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResErr](_result_result_.reserr.md)‹never, E›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[ResErr](_result_result_.reserr.md)‹never, U›*

*Overrides [Result](_result_result_.result.md).[mapErr](_result_result_.result.md#maperr)*

*Defined in [result/result.ts:47](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L47)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResErr](_result_result_.reserr.md)‹never, U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_result_result_.match.md)‹never, E, U›): *U*

*Overrides [Result](_result_result_.result.md).[match](_result_result_.result.md#match)*

*Defined in [result/result.ts:45](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L45)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_result_result_.match.md)‹never, E, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](_option_option_.option.md)‹T›*

*Inherited from [Result](_result_result_.result.md).[ok](_result_result_.result.md#ok)*

*Defined in [result/result.ts:18](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L18)*

**Returns:** *[Option](_option_option_.option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹U, E›*

*Overrides [Result](_result_result_.result.md).[orElse](_result_result_.result.md#orelse)*

*Defined in [result/result.ts:49](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L49)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](_result_result_.result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](_result_result_.result.md)‹U, E›*

___

###  unwrap

▸ **unwrap**(): *never*

*Overrides [Result](_result_result_.result.md).[unwrap](_result_result_.result.md#unwrap)*

*Defined in [result/result.ts:42](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L42)*

**Returns:** *never*

___

###  unwrapErr

▸ **unwrapErr**(): *E*

*Overrides [Result](_result_result_.result.md).[unwrapErr](_result_result_.result.md#unwraperr)*

*Defined in [result/result.ts:44](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L44)*

**Returns:** *E*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Overrides [Result](_result_result_.result.md).[unwrapOr](_result_result_.result.md#unwrapor)*

*Defined in [result/result.ts:43](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
