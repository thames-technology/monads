[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["option/option"](../modules/_option_option_.md) › [Option](_option_option_.option.md)

# Interface: Option <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Option**

  ↳ [OptSome](_option_option_.optsome.md)

  ↳ [OptNone](_option_option_.optnone.md)

## Index

### Properties

* [type](_option_option_.option.md#type)

### Methods

* [and](_option_option_.option.md#and)
* [andThen](_option_option_.option.md#andthen)
* [isNone](_option_option_.option.md#isnone)
* [isSome](_option_option_.option.md#issome)
* [map](_option_option_.option.md#map)
* [match](_option_option_.option.md#match)
* [or](_option_option_.option.md#or)
* [unwrap](_option_option_.option.md#unwrap)
* [unwrapOr](_option_option_.option.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Defined in [option/option.ts:21](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L21)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[Option](_option_option_.option.md)‹U›*

*Defined in [option/option.ts:28](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L28)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](_option_option_.option.md)‹U› |

**Returns:** *[Option](_option_option_.option.md)‹U›*

___

###  andThen

▸ **andThen**<**U**>(`fn`: function): *[Option](_option_option_.option.md)‹U›*

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

*Defined in [option/option.ts:23](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L23)*

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Defined in [option/option.ts:22](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L22)*

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Option](_option_option_.option.md)‹U›*

*Defined in [option/option.ts:25](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L25)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[Option](_option_option_.option.md)‹U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_option_option_.match.md)‹T, U›): *U*

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

▸ **or**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[Option](_option_option_.option.md)‹T | U›*

*Defined in [option/option.ts:27](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L27)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](_option_option_.option.md)‹U› |

**Returns:** *[Option](_option_option_.option.md)‹T | U›*

___

###  unwrap

▸ **unwrap**(): *T | never*

*Defined in [option/option.ts:30](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L30)*

**Returns:** *T | never*

___

###  unwrapOr

▸ **unwrapOr**(`def`: T): *T*

*Defined in [option/option.ts:29](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | T |

**Returns:** *T*
