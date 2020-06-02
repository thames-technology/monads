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

*Defined in [option/option.ts:21](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L21)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](option.md)‹U›): *[OptNone](optnone.md)‹U›*

*Overrides [Option](option.md).[and](option.md#and)*

*Defined in [option/option.ts:44](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L44)*

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

*Defined in [option/option.ts:26](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L26)*

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

*Defined in [option/option.ts:23](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L23)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Inherited from [Option](option.md).[isSome](option.md#issome)*

*Defined in [option/option.ts:22](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L22)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[OptNone](optnone.md)‹U›*

*Overrides [Option](option.md).[map](option.md#map)*

*Defined in [option/option.ts:42](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L42)*

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

*Defined in [option/option.ts:24](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L24)*

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

*Defined in [option/option.ts:43](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L43)*

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

*Defined in [option/option.ts:41](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L41)*

**Returns:** *never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Inherited from [Option](option.md).[unwrapOr](option.md#unwrapor)*

*Defined in [option/option.ts:29](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
