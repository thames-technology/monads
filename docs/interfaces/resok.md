[@hqoss/monads](../README.md) › [Globals](../globals.md) › [ResOk](resok.md)

# Interface: ResOk <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [Result](result.md)‹T, E›

  ↳ **ResOk**

## Index

### Properties

* [type](resok.md#type)

### Methods

* [andThen](resok.md#andthen)
* [err](resok.md#err)
* [isErr](resok.md#iserr)
* [isOk](resok.md#isok)
* [map](resok.md#map)
* [mapErr](resok.md#maperr)
* [match](resok.md#match)
* [ok](resok.md#ok)
* [orElse](resok.md#orelse)
* [unwrap](resok.md#unwrap)
* [unwrapErr](resok.md#unwraperr)
* [unwrapOr](resok.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Result](result.md).[type](result.md#type)*

*Defined in [result/result.ts:15](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L15)*

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Result](result.md)‹U, E›*

*Overrides [Result](result.md).[andThen](result.md#andthen)*

*Defined in [result/result.ts:37](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L37)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Result](result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Result](result.md)‹U, E›*

___

###  err

▸ **err**(): *[Option](option.md)‹E›*

*Inherited from [Result](result.md).[err](result.md#err)*

*Defined in [result/result.ts:19](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L19)*

**Returns:** *[Option](option.md)‹E›*

___

###  isErr

▸ **isErr**(): *boolean*

*Inherited from [Result](result.md).[isErr](result.md#iserr)*

*Defined in [result/result.ts:17](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L17)*

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Inherited from [Result](result.md).[isOk](result.md#isok)*

*Defined in [result/result.ts:16](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L16)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[ResOk](resok.md)‹U, never›*

*Overrides [Result](result.md).[map](result.md#map)*

*Defined in [result/result.ts:35](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L35)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResOk](resok.md)‹U, never›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[ResOk](resok.md)‹T, never›*

*Overrides [Result](result.md).[mapErr](result.md#maperr)*

*Defined in [result/result.ts:36](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L36)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResOk](resok.md)‹T, never›*

___

###  match

▸ **match**<**U**>(`fn`: Match‹T, never, U›): *U*

*Overrides [Result](result.md).[match](result.md#match)*

*Defined in [result/result.ts:34](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L34)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Match‹T, never, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](option.md)‹T›*

*Inherited from [Result](result.md).[ok](result.md#ok)*

*Defined in [result/result.ts:18](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L18)*

**Returns:** *[Option](option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](result.md)‹T, E›*

*Overrides [Result](result.md).[orElse](result.md#orelse)*

*Defined in [result/result.ts:38](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L38)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](result.md)‹T, E›*

___

###  unwrap

▸ **unwrap**(): *T*

*Overrides [Result](result.md).[unwrap](result.md#unwrap)*

*Defined in [result/result.ts:31](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L31)*

**Returns:** *T*

___

###  unwrapErr

▸ **unwrapErr**(): *never*

*Overrides [Result](result.md).[unwrapErr](result.md#unwraperr)*

*Defined in [result/result.ts:33](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L33)*

**Returns:** *never*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Overrides [Result](result.md).[unwrapOr](result.md#unwrapor)*

*Defined in [result/result.ts:32](https://github.com/qworks-io/monads/blob/61eb289/src/result/result.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
