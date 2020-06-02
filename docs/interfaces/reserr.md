[@hqoss/monads](../README.md) › [Globals](../globals.md) › [ResErr](reserr.md)

# Interface: ResErr <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [Result](result.md)‹T, E›

  ↳ **ResErr**

## Index

### Properties

* [type](reserr.md#type)

### Methods

* [andThen](reserr.md#andthen)
* [err](reserr.md#err)
* [isErr](reserr.md#iserr)
* [isOk](reserr.md#isok)
* [map](reserr.md#map)
* [mapErr](reserr.md#maperr)
* [match](reserr.md#match)
* [ok](reserr.md#ok)
* [orElse](reserr.md#orelse)
* [unwrap](reserr.md#unwrap)
* [unwrapErr](reserr.md#unwraperr)
* [unwrapOr](reserr.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Result](result.md).[type](result.md#type)*

Defined in result/result.ts:15

## Methods

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[ResErr](reserr.md)‹never, E›*

*Overrides [Result](result.md).[andThen](result.md#andthen)*

Defined in result/result.ts:48

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Result](result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResErr](reserr.md)‹never, E›*

___

###  err

▸ **err**(): *[Option](option.md)‹E›*

*Inherited from [Result](result.md).[err](result.md#err)*

Defined in result/result.ts:19

**Returns:** *[Option](option.md)‹E›*

___

###  isErr

▸ **isErr**(): *boolean*

*Inherited from [Result](result.md).[isErr](result.md#iserr)*

Defined in result/result.ts:17

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Inherited from [Result](result.md).[isOk](result.md#isok)*

Defined in result/result.ts:16

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[ResErr](reserr.md)‹never, E›*

*Overrides [Result](result.md).[map](result.md#map)*

Defined in result/result.ts:46

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[ResErr](reserr.md)‹never, E›*

___

###  mapErr

▸ **mapErr**<**U**>(`fn`: function): *[ResErr](reserr.md)‹never, U›*

*Overrides [Result](result.md).[mapErr](result.md#maperr)*

Defined in result/result.ts:47

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[ResErr](reserr.md)‹never, U›*

___

###  match

▸ **match**<**U**>(`fn`: Match‹never, E, U›): *U*

*Overrides [Result](result.md).[match](result.md#match)*

Defined in result/result.ts:45

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Match‹never, E, U› |

**Returns:** *U*

___

###  ok

▸ **ok**(): *[Option](option.md)‹T›*

*Inherited from [Result](result.md).[ok](result.md#ok)*

Defined in result/result.ts:18

**Returns:** *[Option](option.md)‹T›*

___

###  orElse

▸ **orElse**<**U**>(`fn`: function): *[Result](result.md)‹U, E›*

*Overrides [Result](result.md).[orElse](result.md#orelse)*

Defined in result/result.ts:49

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`err`: E): *[Result](result.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`err` | E |

**Returns:** *[Result](result.md)‹U, E›*

___

###  unwrap

▸ **unwrap**(): *never*

*Overrides [Result](result.md).[unwrap](result.md#unwrap)*

Defined in result/result.ts:42

**Returns:** *never*

___

###  unwrapErr

▸ **unwrapErr**(): *E*

*Overrides [Result](result.md).[unwrapErr](result.md#unwraperr)*

Defined in result/result.ts:44

**Returns:** *E*

___

###  unwrapOr

▸ **unwrapOr**(`optb`: T): *T*

*Overrides [Result](result.md).[unwrapOr](result.md#unwrapor)*

Defined in result/result.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`optb` | T |

**Returns:** *T*
