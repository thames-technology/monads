[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["option/option"](_option_option_.md)

# Module: "option/option"

## Index

### Interfaces

* [Match](../interfaces/_option_option_.match.md)
* [OptNone](../interfaces/_option_option_.optnone.md)
* [OptSome](../interfaces/_option_option_.optsome.md)
* [Option](../interfaces/_option_option_.option.md)

### Variables

* [None](_option_option_.md#const-none)

### Functions

* [Some](_option_option_.md#some)
* [getIn](_option_option_.md#getin)
* [isNone](_option_option_.md#isnone)
* [isOption](_option_option_.md#isoption)
* [isSome](_option_option_.md#issome)
* [none_constructor](_option_option_.md#none_constructor)
* [some_constructor](_option_option_.md#some_constructor)

### Object literals

* [OptionType](_option_option_.md#const-optiontype)

## Variables

### `Const` None

• **None**: *[OptNone](../interfaces/_option_option_.optnone.md)‹any›* = none_constructor<any>()

*Defined in [option/option.ts:53](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L53)*

## Functions

###  Some

▸ **Some**<**T**>(`val?`: T | undefined): *[Option](../interfaces/_option_option_.option.md)‹T›*

*Defined in [option/option.ts:47](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L47)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val?` | T &#124; undefined |

**Returns:** *[Option](../interfaces/_option_option_.option.md)‹T›*

___

###  getIn

▸ **getIn**(`obj`: object | undefined | null, `key`: string): *[Option](../interfaces/_option_option_.option.md)‹any›*

*Defined in [option/option.ts:146](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object &#124; undefined &#124; null |
`key` | string |

**Returns:** *[Option](../interfaces/_option_option_.option.md)‹any›*

___

###  isNone

▸ **isNone**<**T**>(`val`: [Option](../interfaces/_option_option_.option.md)‹T›): *val is OptNone<T>*

*Defined in [option/option.ts:141](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L141)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](../interfaces/_option_option_.option.md)‹T› |

**Returns:** *val is OptNone<T>*

___

###  isOption

▸ **isOption**<**T**>(`val`: [Option](../interfaces/_option_option_.option.md)‹T› | any): *val is Option<T>*

*Defined in [option/option.ts:129](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L129)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](../interfaces/_option_option_.option.md)‹T› &#124; any |

**Returns:** *val is Option<T>*

___

###  isSome

▸ **isSome**<**T**>(`val`: [Option](../interfaces/_option_option_.option.md)‹T›): *val is OptSome<T>*

*Defined in [option/option.ts:136](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L136)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | [Option](../interfaces/_option_option_.option.md)‹T› |

**Returns:** *val is OptSome<T>*

___

###  none_constructor

▸ **none_constructor**<**T**>(): *[OptNone](../interfaces/_option_option_.optnone.md)‹T›*

*Defined in [option/option.ts:95](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L95)*

**Type parameters:**

▪ **T**

**Returns:** *[OptNone](../interfaces/_option_option_.optnone.md)‹T›*

___

###  some_constructor

▸ **some_constructor**<**T**>(`val`: T): *[OptSome](../interfaces/_option_option_.optsome.md)‹T›*

*Defined in [option/option.ts:55](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L55)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *[OptSome](../interfaces/_option_option_.optsome.md)‹T›*

## Object literals

### `Const` OptionType

### ▪ **OptionType**: *object*

*Defined in [option/option.ts:10](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L10)*

###  None

• **None**: *symbol* = Symbol(":none")

*Defined in [option/option.ts:12](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L12)*

###  Some

• **Some**: *symbol* = Symbol(":some")

*Defined in [option/option.ts:11](https://github.com/qworks-io/monads/blob/3596735/src/option/option.ts#L11)*
