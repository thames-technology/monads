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

*Defined in [option/option.ts:21](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L21)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹U›*

*Defined in [option/option.ts:28](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L28)*

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

*Defined in [option/option.ts:23](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L23)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Defined in [option/option.ts:22](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L22)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Option](option.md)‹U›*

*Defined in [option/option.ts:25](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L25)*

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

▸ **or**<**U**>(`optb`: [Option](option.md)‹U›): *[Option](option.md)‹T | U›*

*Defined in [option/option.ts:27](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L27)*

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

*Defined in [option/option.ts:30](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L30)*

**Returns:** *T | never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Defined in [option/option.ts:29](https://github.com/qworks-io/monads/blob/6a3a7f7/src/option/option.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
