[@hqoss/monads](../README.md) › [Globals](../globals.md) › [Result](result.md)

# Interface: Result <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* **Result**

  ↳ [ResOk](resok.md)

  ↳ [ResErr](reserr.md)

## Index

### Properties

* [type](result.md#type)

### Methods

* [andThen](result.md#andthen)
* [err](result.md#err)
* [isErr](result.md#iserr)
* [isOk](result.md#isok)
* [map](result.md#map)
* [mapErr](result.md#maperr)
* [match](result.md#match)
* [ok](result.md#ok)
* [orElse](result.md#orelse)
* [unwrap](result.md#unwrap)
* [unwrapErr](result.md#unwraperr)
* [unwrapOr](result.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Defined in [src/result/result.ts:14](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L14)*

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Result](result.md)‹U, E›*

*Defined in [src/result/result.ts:25](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L25)*

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

*Defined in [src/result/result.ts:18](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L18)*

**Returns:** *[Option](option.md)‹E›*

___

###  isErr

▸ **isErr**(): *boolean*

*Defined in [src/result/result.ts:16](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L16)*

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Defined in [src/result/result.ts:15](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L15)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Result](result.md)‹U, E›*

*Defined in [src/result/result.ts:23](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L23)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Result](result.md)‹U, E›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[Result](result.md)‹T, U›*

*Defined in [src/result/result.ts:24](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L24)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](result.md)‹T, U›*

___

###  match

▸ **match**<**U**>(`fn`: Match‹T, E, U›): *U*

*Defined in [src/result/result.ts:22](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L22)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Match‹T, E, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](option.md)‹T›*

*Defined in [src/result/result.ts:17](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L17)*

**Returns:** *[Option](option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](result.md)‹T, E› | [Result](result.md)‹U, E›*

*Defined in [src/result/result.ts:26](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L26)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](result.md)‹T, E› | [Result](result.md)‹U, E›*

___

###  unwrap

▸ **unwrap**(): *T | never*

*Defined in [src/result/result.ts:19](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L19)*

**Returns:** *T | never*

___

###  unwrapErr

▸ **unwrapErr**(): *E | never*

*Defined in [src/result/result.ts:21](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L21)*

**Returns:** *E | never*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Defined in [src/result/result.ts:20](https://github.com/qworks-io/monads/blob/d32300b/src/result/result.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
