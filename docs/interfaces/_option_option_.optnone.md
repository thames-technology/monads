[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["option/option"](../modules/_option_option_.md) › [OptNone](_option_option_.optnone.md)

# Interface: OptNone <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Option](_option_option_.option.md)‹T›

  ↳ **OptNone**

## Index

### Properties

* [type](_option_option_.optnone.md#type)

### Methods

* [and](_option_option_.optnone.md#and)
* [andThen](_option_option_.optnone.md#andthen)
* [isNone](_option_option_.optnone.md#isnone)
* [isSome](_option_option_.optnone.md#issome)
* [map](_option_option_.optnone.md#map)
* [match](_option_option_.optnone.md#match)
* [or](_option_option_.optnone.md#or)
* [unwrap](_option_option_.optnone.md#unwrap)
* [unwrapOr](_option_option_.optnone.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Option](_option_option_.option.md).[type](_option_option_.option.md#type)*

*Defined in [option/option.ts:21](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L21)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[OptNone](_option_option_.optnone.md)‹U›*

*Overrides [Option](_option_option_.option.md).[and](_option_option_.option.md#and)*

*Defined in [option/option.ts:44](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L44)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](_option_option_.option.md)‹U› |

**Returns:** *[OptNone](_option_option_.optnone.md)‹U›*

___

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Option](_option_option_.option.md)‹U›*

*Inherited from [Option](_option_option_.option.md).[andThen](_option_option_.option.md#andthen)*

*Defined in [option/option.ts:26](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L26)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *[Option](_option_option_.option.md)‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Option](_option_option_.option.md)‹U›*

___

###  isNone

▸ **isNone**(): *boolean*

*Inherited from [Option](_option_option_.option.md).[isNone](_option_option_.option.md#isnone)*

*Defined in [option/option.ts:23](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L23)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Inherited from [Option](_option_option_.option.md).[isSome](_option_option_.option.md#issome)*

*Defined in [option/option.ts:22](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L22)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[OptNone](_option_option_.optnone.md)‹U›*

*Overrides [Option](_option_option_.option.md).[map](_option_option_.option.md#map)*

*Defined in [option/option.ts:42](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L42)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptNone](_option_option_.optnone.md)‹U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_option_option_.match.md)‹T, U›): *U*

*Inherited from [Option](_option_option_.option.md).[match](_option_option_.option.md#match)*

*Defined in [option/option.ts:24](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L24)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_option_option_.match.md)‹T, U› |

**Returns:** *U*

___

###  or

▸ **or**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[Option](_option_option_.option.md)‹U›*

*Overrides [Option](_option_option_.option.md).[or](_option_option_.option.md#or)*

*Defined in [option/option.ts:43](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L43)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](_option_option_.option.md)‹U› |

**Returns:** *[Option](_option_option_.option.md)‹U›*

___

###  unwrap

▸ **unwrap**(): *never*

*Overrides [Option](_option_option_.option.md).[unwrap](_option_option_.option.md#unwrap)*

*Defined in [option/option.ts:41](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L41)*

**Returns:** *never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Inherited from [Option](_option_option_.option.md).[unwrapOr](_option_option_.option.md#unwrapor)*

*Defined in [option/option.ts:29](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
