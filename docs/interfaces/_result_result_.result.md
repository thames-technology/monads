[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["result/result"](../modules/_result_result_.md) › [Result](_result_result_.result.md)

# Interface: Result <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* **Result**

  ↳ [ResOk](_result_result_.resok.md)

  ↳ [ResErr](_result_result_.reserr.md)

## Index

### Properties

* [type](_result_result_.result.md#type)

### Methods

* [andThen](_result_result_.result.md#andthen)
* [err](_result_result_.result.md#err)
* [isErr](_result_result_.result.md#iserr)
* [isOk](_result_result_.result.md#isok)
* [map](_result_result_.result.md#map)
* [mapErr](_result_result_.result.md#maperr)
* [match](_result_result_.result.md#match)
* [ok](_result_result_.result.md#ok)
* [orElse](_result_result_.result.md#orelse)
* [unwrap](_result_result_.result.md#unwrap)
* [unwrapErr](_result_result_.result.md#unwraperr)
* [unwrapOr](_result_result_.result.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Defined in [result/result.ts:15](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L15)*

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹U, E›*

*Defined in [result/result.ts:26](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L26)*

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

*Defined in [result/result.ts:19](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L19)*

**Returns:** *[Option](_option_option_.option.md)‹E›*

___

###  isErr

▸ **isErr**(): *boolean*

*Defined in [result/result.ts:17](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L17)*

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Defined in [result/result.ts:16](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L16)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹U, E›*

*Defined in [result/result.ts:24](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L24)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Result](_result_result_.result.md)‹U, E›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹T, U›*

*Defined in [result/result.ts:25](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L25)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](_result_result_.result.md)‹T, U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_result_result_.match.md)‹T, E, U›): *U*

*Defined in [result/result.ts:23](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L23)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_result_result_.match.md)‹T, E, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](_option_option_.option.md)‹T›*

*Defined in [result/result.ts:18](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L18)*

**Returns:** *[Option](_option_option_.option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](_result_result_.result.md)‹T, E› | [Result](_result_result_.result.md)‹U, E›*

*Defined in [result/result.ts:27](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L27)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](_result_result_.result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](_result_result_.result.md)‹T, E› | [Result](_result_result_.result.md)‹U, E›*

___

###  unwrap

▸ **unwrap**(): *T | never*

*Defined in [result/result.ts:20](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L20)*

**Returns:** *T | never*

___

###  unwrapErr

▸ **unwrapErr**(): *E | never*

*Defined in [result/result.ts:22](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L22)*

**Returns:** *E | never*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Defined in [result/result.ts:21](https://github.com/qworks-io/monads/blob/3596735/src/result/result.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
