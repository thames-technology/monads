[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["option/option"](../modules/_option_option_.md) › [OptSome](_option_option_.optsome.md)

# Interface: OptSome <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Option](_option_option_.option.md)‹T›

  ↳ **OptSome**

## Index

### Properties

* [type](_option_option_.optsome.md#type)

### Methods

* [and](_option_option_.optsome.md#and)
* [andThen](_option_option_.optsome.md#andthen)
* [isNone](_option_option_.optsome.md#isnone)
* [isSome](_option_option_.optsome.md#issome)
* [map](_option_option_.optsome.md#map)
* [match](_option_option_.optsome.md#match)
* [or](_option_option_.optsome.md#or)
* [unwrap](_option_option_.optsome.md#unwrap)
* [unwrapOr](_option_option_.optsome.md#unwrapor)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Option](_option_option_.option.md).[type](_option_option_.option.md#type)*

*Defined in [option/option.ts:21](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L21)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[Option](_option_option_.option.md)‹U›*

*Overrides [Option](_option_option_.option.md).[and](_option_option_.option.md#and)*

*Defined in [option/option.ts:37](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L37)*

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

▸ **map**<**U**>(`fn`: function): *[OptSome](_option_option_.optsome.md)‹U›*

*Overrides [Option](_option_option_.option.md).[map](_option_option_.option.md#map)*

*Defined in [option/option.ts:35](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L35)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptSome](_option_option_.optsome.md)‹U›*

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

▸ **or**<**U**>(`optb`: [Option](_option_option_.option.md)‹U›): *[Option](_option_option_.option.md)‹T›*

*Overrides [Option](_option_option_.option.md).[or](_option_option_.option.md#or)*

*Defined in [option/option.ts:36](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L36)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [Option](_option_option_.option.md)‹U› |

**Returns:** *[Option](_option_option_.option.md)‹T›*

___

###  unwrap

▸ **unwrap**(): *T*

*Overrides [Option](_option_option_.option.md).[unwrap](_option_option_.option.md#unwrap)*

*Defined in [option/option.ts:34](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L34)*

**Returns:** *T*

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
