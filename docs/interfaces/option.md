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

Defined in option/option.ts:21

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹U›*

Defined in option/option.ts:28

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

Defined in option/option.ts:26

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

Defined in option/option.ts:23

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

Defined in option/option.ts:22

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Option](option.md)‹U›*

Defined in option/option.ts:25

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

Defined in option/option.ts:24

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

Defined in option/option.ts:27

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

Defined in option/option.ts:30

**Returns:** *T | never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

Defined in option/option.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
