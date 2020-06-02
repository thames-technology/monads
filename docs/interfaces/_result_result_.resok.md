[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["result/result"](../modules/_result_result_.md) › [ResOk](_result_result_.resok.md)

# Interface: ResOk <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [Result](_result_result_.result.md)‹T, E›

  ↳ **ResOk**

## Index

### Properties

* [type](_result_result_.resok.md#type)

### Methods

* [andThen](_result_result_.resok.md#andthen)
* [err](_result_result_.resok.md#err)
* [isErr](_result_result_.resok.md#iserr)
* [isOk](_result_result_.resok.md#isok)
* [map](_result_result_.resok.md#map)
* [mapErr](_result_result_.resok.md#maperr)
* [match](_result_result_.resok.md#match)
* [ok](_result_result_.resok.md#ok)
* [orElse](_result_result_.resok.md#orelse)
* [unwrap](_result_result_.resok.md#unwrap)
* [unwrapErr](_result_result_.resok.md#unwraperr)
* [unwrapOr](_result_result_.resok.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Result](_result_result_.result.md).[type](_result_result_.result.md#type)*

*Defined in [result/result.ts:15](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L15)*

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹U, E›*

*Overrides [Result](_result_result_.result.md).[andThen](_result_result_.result.md#andthen)*

*Defined in [result/result.ts:37](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L37)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Result](_result_result_.result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Result](_result_result_.result.md)‹U, E›*

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

▸ **map**<**U**>(`fn`: function): *[ResOk](_result_result_.resok.md)‹U, never›*

*Overrides [Result](_result_result_.result.md).[map](_result_result_.result.md#map)*

*Defined in [result/result.ts:35](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L35)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResOk](_result_result_.resok.md)‹U, never›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[ResOk](_result_result_.resok.md)‹T, never›*

*Overrides [Result](_result_result_.result.md).[mapErr](_result_result_.result.md#maperr)*

*Defined in [result/result.ts:36](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L36)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResOk](_result_result_.resok.md)‹T, never›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_result_result_.match.md)‹T, never, U›): *U*

*Overrides [Result](_result_result_.result.md).[match](_result_result_.result.md#match)*

*Defined in [result/result.ts:34](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L34)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_result_result_.match.md)‹T, never, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](_option_option_.option.md)‹T›*

*Inherited from [Result](_result_result_.result.md).[ok](_result_result_.result.md#ok)*

*Defined in [result/result.ts:18](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L18)*

**Returns:** *[Option](_option_option_.option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹T, E›*

*Overrides [Result](_result_result_.result.md).[orElse](_result_result_.result.md#orelse)*

*Defined in [result/result.ts:38](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L38)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](_result_result_.result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](_result_result_.result.md)‹T, E›*

___

###  unwrap

▸ **unwrap**(): *T*

*Overrides [Result](_result_result_.result.md).[unwrap](_result_result_.result.md#unwrap)*

*Defined in [result/result.ts:31](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L31)*

**Returns:** *T*

___

###  unwrapErr

▸ **unwrapErr**(): *never*

*Overrides [Result](_result_result_.result.md).[unwrapErr](_result_result_.result.md#unwraperr)*

*Defined in [result/result.ts:33](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L33)*

**Returns:** *never*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Overrides [Result](_result_result_.result.md).[unwrapOr](_result_result_.result.md#unwrapor)*

*Defined in [result/result.ts:32](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
