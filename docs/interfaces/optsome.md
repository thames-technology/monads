[@hqoss/monads](../README.md) › [Globals](../globals.md) › [OptSome](optsome.md)

# Interface: OptSome ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [Option](option.md)‹T›

  ↳ **OptSome**

## Index

### Properties

* [type](optsome.md#type)

### Methods

* [and](optsome.md#and)
* [andThen](optsome.md#andthen)
* [isNone](optsome.md#isnone)
* [isSome](optsome.md#issome)
* [map](optsome.md#map)
* [match](optsome.md#match)
* [or](optsome.md#or)
* [unwrap](optsome.md#unwrap)
* [unwrapOr](optsome.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Option](option.md).[type](option.md#type)*

Defined in lib/option/option.ts:12

## Methods

###  and

▸ **and**‹**U**›(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹U›*

*Overrides [Option](option.md).[and](option.md#and)*

Defined in lib/option/option.ts:28

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[Option](option.md)‹U›*

___

###  andThen

▸ **andThen**‹**U**›(`fn`: function): *[Option](option.md)‹U›*

*Inherited from [Option](option.md).[andThen](option.md#andthen)*

Defined in lib/option/option.ts:17

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

Defined in lib/option/option.ts:14

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Inherited from [Option](option.md).[isSome](option.md#issome)*

Defined in lib/option/option.ts:13

**Returns:** *boolean*

___

###  map

▸ **map**‹**U**›(`fn`: function): *[OptSome](optsome.md)‹U›*

*Overrides [Option](option.md).[map](option.md#map)*

Defined in lib/option/option.ts:26

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptSome](optsome.md)‹U›*

___

###  match

▸ **match**‹**U**›(`fn`: [Match](match.md)‹T, U›): *U*

*Inherited from [Option](option.md).[match](option.md#match)*

Defined in lib/option/option.ts:15

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](match.md)‹T, U› |

**Returns:** *U*

___

###  or

▸ **or**‹**U**›(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹T›*

*Overrides [Option](option.md).[or](option.md#or)*

Defined in lib/option/option.ts:27

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](option.md)‹U› |

**Returns:** *[Option](option.md)‹T›*

___

###  unwrap

▸ **unwrap**(): *T*

*Overrides [Option](option.md).[unwrap](option.md#unwrap)*

Defined in lib/option/option.ts:25

**Returns:** *T*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Inherited from [Option](option.md).[unwrapOr](option.md#unwrapor)*

Defined in lib/option/option.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
