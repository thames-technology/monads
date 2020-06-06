[@hqoss/monads](../README.md) › [Globals](../globals.md) › [OptNone](optnone.md)

# Interface: OptNone <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Option](option.md)‹T›

  ↳ **OptNone**

## Index

### Properties

* [type](optnone.md#type)

### Methods

* [and](optnone.md#and)
* [andThen](optnone.md#andthen)
* [isNone](optnone.md#isnone)
* [isSome](optnone.md#issome)
* [map](optnone.md#map)
* [match](optnone.md#match)
* [or](optnone.md#or)
* [unwrap](optnone.md#unwrap)
* [unwrapOr](optnone.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Option](option.md).[type](option.md#type)*

*Defined in [src/option/option.ts:12](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L12)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](option.md)‹U›): *[OptNone](optnone.md)‹U›*

*Overrides [Option](option.md).[and](option.md#and)*

*Defined in [src/option/option.ts:35](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L35)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[OptNone](optnone.md)‹U›*

___

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Option](option.md)‹U›*

*Inherited from [Option](option.md).[andThen](option.md#andthen)*

*Defined in [src/option/option.ts:17](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L17)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Option](option.md)‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Option](option.md)‹U›*

___

###  isNone

▸ **isNone**(): *boolean*

*Inherited from [Option](option.md).[isNone](option.md#isnone)*

*Defined in [src/option/option.ts:14](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L14)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Inherited from [Option](option.md).[isSome](option.md#issome)*

*Defined in [src/option/option.ts:13](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L13)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[OptNone](optnone.md)‹U›*

*Overrides [Option](option.md).[map](option.md#map)*

*Defined in [src/option/option.ts:33](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L33)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptNone](optnone.md)‹U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](match.md)‹T, U›): *U*

*Inherited from [Option](option.md).[match](option.md#match)*

*Defined in [src/option/option.ts:15](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L15)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](match.md)‹T, U› |

**Returns:** *U*

___

###  or

▸ **or**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹U›*

*Overrides [Option](option.md).[or](option.md#or)*

*Defined in [src/option/option.ts:34](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L34)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[Option](option.md)‹U›*

___

###  unwrap

▸ **unwrap**(): *never*

*Overrides [Option](option.md).[unwrap](option.md#unwrap)*

*Defined in [src/option/option.ts:32](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L32)*

**Returns:** *never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Inherited from [Option](option.md).[unwrapOr](option.md#unwrapor)*

*Defined in [src/option/option.ts:20](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
