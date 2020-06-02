[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["either/either"](../modules/_either_either_.md) › [Either](_either_either_.either.md)

# Interface: Either <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* **Either**

  ↳ [ResLeft](_either_either_.resleft.md)

  ↳ [ResRight](_either_either_.resright.md)

## Index

### Properties

* [type](_either_either_.either.md#type)

### Methods

* [isLeft](_either_either_.either.md#isleft)
* [isRight](_either_either_.either.md#isright)
* [left](_either_either_.either.md#left)
* [leftAndThen](_either_either_.either.md#leftandthen)
* [map](_either_either_.either.md#map)
* [mapLeft](_either_either_.either.md#mapleft)
* [mapRight](_either_either_.either.md#mapright)
* [match](_either_either_.either.md#match)
* [right](_either_either_.either.md#right)
* [rightAndThen](_either_either_.either.md#rightandthen)
* [unwrap](_either_either_.either.md#unwrap)
* [unwrapLeft](_either_either_.either.md#unwrapleft)
* [unwrapLeftOr](_either_either_.either.md#unwrapleftor)
* [unwrapLeftOrElse](_either_either_.either.md#unwrapleftorelse)
* [unwrapRight](_either_either_.either.md#unwrapright)
* [unwrapRightOr](_either_either_.either.md#unwraprightor)
* [unwrapRightOrElse](_either_either_.either.md#unwraprightorelse)

## Properties

###  type

• **type**: *symbol*

*Defined in [either/either.ts:15](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L15)*

## Methods

###  isLeft

▸ **isLeft**(): *boolean*

*Defined in [either/either.ts:16](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L16)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Defined in [either/either.ts:17](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L17)*

**Returns:** *boolean*

___

###  left

▸ **left**(): *[Option](_option_option_.option.md)‹L›*

*Defined in [either/either.ts:18](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L18)*

**Returns:** *[Option](_option_option_.option.md)‹L›*

___

###  leftAndThen

▸ **leftAndThen**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹U, R›*

*Defined in [either/either.ts:19](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L19)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L): *[Either](_either_either_.either.md)‹U, R›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

**Returns:** *[Either](_either_either_.either.md)‹U, R›*

___

###  map

▸ **map**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹U, U›*

*Defined in [either/either.ts:30](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L30)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L | R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L &#124; R |

**Returns:** *[Either](_either_either_.either.md)‹U, U›*

___

###  mapLeft

▸ **mapLeft**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹U, R›*

*Defined in [either/either.ts:31](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L31)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *[Either](_either_either_.either.md)‹U, R›*

___

###  mapRight

▸ **mapRight**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹L, U›*

*Defined in [either/either.ts:32](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L32)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`right`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *[Either](_either_either_.either.md)‹L, U›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_either_either_.match.md)‹L, R, U›): *U*

*Defined in [either/either.ts:29](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L29)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_either_either_.match.md)‹L, R, U› |

**Returns:** *U*

___

###  right

▸ **right**(): *[Option](_option_option_.option.md)‹R›*

*Defined in [either/either.ts:20](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L20)*

**Returns:** *[Option](_option_option_.option.md)‹R›*

___

###  rightAndThen

▸ **rightAndThen**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹L, U›*

*Defined in [either/either.ts:21](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L21)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: R): *[Either](_either_either_.either.md)‹L, U›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

**Returns:** *[Either](_either_either_.either.md)‹L, U›*

___

###  unwrap

▸ **unwrap**(): *L | R*

*Defined in [either/either.ts:22](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L22)*

**Returns:** *L | R*

___

###  unwrapLeft

▸ **unwrapLeft**(): *L | never*

*Defined in [either/either.ts:23](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L23)*

**Returns:** *L | never*

___

###  unwrapLeftOr

▸ **unwrapLeftOr**(`other`: L): *L*

*Defined in [either/either.ts:24](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | L |

**Returns:** *L*

___

###  unwrapLeftOrElse

▸ **unwrapLeftOrElse**(`fn`: function): *L*

*Defined in [either/either.ts:25](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L25)*

**Parameters:**

▪ **fn**: *function*

▸ (`right`: R): *L*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *L*

___

###  unwrapRight

▸ **unwrapRight**(): *R | never*

*Defined in [either/either.ts:26](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L26)*

**Returns:** *R | never*

___

###  unwrapRightOr

▸ **unwrapRightOr**(`other`: R): *R*

*Defined in [either/either.ts:27](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | R |

**Returns:** *R*

___

###  unwrapRightOrElse

▸ **unwrapRightOrElse**(`fn`: function): *R*

*Defined in [either/either.ts:28](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L28)*

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *R*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *R*
