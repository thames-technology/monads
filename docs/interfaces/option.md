[@hqoss/monads](../README.md) › [Globals](../globals.md) › [Option](option.md)

# Interface: Option <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Option**

  ↳ [OptSome](optsome.md)

  ↳ [OptNone](optnone.md)

## Index

### Properties

* [type](option.md#type)

### Methods

* [and](option.md#and)
* [andThen](option.md#andthen)
* [isNone](option.md#isnone)
* [isSome](option.md#issome)
* [map](option.md#map)
* [match](option.md#match)
* [or](option.md#or)
* [unwrap](option.md#unwrap)
* [unwrapOr](option.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Defined in [src/option/option.ts:12](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L12)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹U›*

*Defined in [src/option/option.ts:19](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L19)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[Option](option.md)‹U›*

___

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Option](option.md)‹U›*

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

*Defined in [src/option/option.ts:14](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L14)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Defined in [src/option/option.ts:13](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L13)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Option](option.md)‹U›*

*Defined in [src/option/option.ts:16](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L16)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Option](option.md)‹U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](match.md)‹T, U›): *U*

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

▸ **or**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹T | U›*

*Defined in [src/option/option.ts:18](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L18)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[Option](option.md)‹T | U›*

___

###  unwrap

▸ **unwrap**(): *T | never*

*Defined in [src/option/option.ts:21](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L21)*

**Returns:** *T | never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Defined in [src/option/option.ts:20](https://github.com/qworks-io/monads/blob/d32300b/src/option/option.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
