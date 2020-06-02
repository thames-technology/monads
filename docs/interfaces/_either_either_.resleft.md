[@hqoss/monads](../README.md) › [Globals](../globals.md) › ["either/either"](../modules/_either_either_.md) › [ResLeft](_either_either_.resleft.md)

# Interface: ResLeft <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* [Either](_either_either_.either.md)‹L, R›

  ↳ **ResLeft**

## Index

### Properties

* [type](_either_either_.resleft.md#type)

### Methods

* [isLeft](_either_either_.resleft.md#isleft)
* [isRight](_either_either_.resleft.md#isright)
* [left](_either_either_.resleft.md#left)
* [leftAndThen](_either_either_.resleft.md#leftandthen)
* [map](_either_either_.resleft.md#map)
* [mapLeft](_either_either_.resleft.md#mapleft)
* [mapRight](_either_either_.resleft.md#mapright)
* [match](_either_either_.resleft.md#match)
* [right](_either_either_.resleft.md#right)
* [rightAndThen](_either_either_.resleft.md#rightandthen)
* [unwrap](_either_either_.resleft.md#unwrap)
* [unwrapLeft](_either_either_.resleft.md#unwrapleft)
* [unwrapLeftOr](_either_either_.resleft.md#unwrapleftor)
* [unwrapLeftOrElse](_either_either_.resleft.md#unwrapleftorelse)
* [unwrapRight](_either_either_.resleft.md#unwrapright)
* [unwrapRightOr](_either_either_.resleft.md#unwraprightor)
* [unwrapRightOrElse](_either_either_.resleft.md#unwraprightorelse)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Either](_either_either_.either.md).[type](_either_either_.either.md#type)*

*Defined in [either/either.ts:15](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L15)*

## Methods

###  isLeft

▸ **isLeft**(): *boolean*

*Inherited from [Either](_either_either_.either.md).[isLeft](_either_either_.either.md#isleft)*

*Defined in [either/either.ts:16](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L16)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Inherited from [Either](_either_either_.either.md).[isRight](_either_either_.either.md#isright)*

*Defined in [either/either.ts:17](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L17)*

**Returns:** *boolean*

___

###  left

▸ **left**(): *[Option](_option_option_.option.md)‹L›*

*Inherited from [Either](_either_either_.either.md).[left](_either_either_.either.md#left)*

*Defined in [either/either.ts:18](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L18)*

**Returns:** *[Option](_option_option_.option.md)‹L›*

___

###  leftAndThen

▸ **leftAndThen**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹U, R›*

*Inherited from [Either](_either_either_.either.md).[leftAndThen](_either_either_.either.md#leftandthen)*

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

▸ **map**<**U**>(`fn`: function): *[ResLeft](_either_either_.resleft.md)‹U, never›*

*Overrides [Either](_either_either_.either.md).[map](_either_either_.either.md#map)*

*Defined in [either/either.ts:40](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L40)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L | R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L &#124; R |

**Returns:** *[ResLeft](_either_either_.resleft.md)‹U, never›*

___

###  mapLeft

▸ **mapLeft**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹U, never›*

*Overrides [Either](_either_either_.either.md).[mapLeft](_either_either_.either.md#mapleft)*

*Defined in [either/either.ts:41](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L41)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *[Either](_either_either_.either.md)‹U, never›*

___

###  mapRight

▸ **mapRight**<**U**>(`fn`: function): *[ResLeft](_either_either_.resleft.md)‹L, never›*

*Overrides [Either](_either_either_.either.md).[mapRight](_either_either_.either.md#mapright)*

*Defined in [either/either.ts:42](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L42)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`right`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *[ResLeft](_either_either_.resleft.md)‹L, never›*

___

###  match

▸ **match**<**U**>(`fn`: [Match](_either_either_.match.md)‹L, never, U›): *U*

*Overrides [Either](_either_either_.either.md).[match](_either_either_.either.md#match)*

*Defined in [either/either.ts:39](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L39)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Match](_either_either_.match.md)‹L, never, U› |

**Returns:** *U*

___

###  right

▸ **right**(): *[Option](_option_option_.option.md)‹R›*

*Inherited from [Either](_either_either_.either.md).[right](_either_either_.either.md#right)*

*Defined in [either/either.ts:20](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L20)*

**Returns:** *[Option](_option_option_.option.md)‹R›*

___

###  rightAndThen

▸ **rightAndThen**<**U**>(`fn`: function): *[Either](_either_either_.either.md)‹L, U›*

*Inherited from [Either](_either_either_.either.md).[rightAndThen](_either_either_.either.md#rightandthen)*

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

▸ **unwrap**(): *L*

*Overrides [Either](_either_either_.either.md).[unwrap](_either_either_.either.md#unwrap)*

*Defined in [either/either.ts:36](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L36)*

**Returns:** *L*

___

###  unwrapLeft

▸ **unwrapLeft**(): *L*

*Overrides [Either](_either_either_.either.md).[unwrapLeft](_either_either_.either.md#unwrapleft)*

*Defined in [either/either.ts:37](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L37)*

**Returns:** *L*

___

###  unwrapLeftOr

▸ **unwrapLeftOr**(`other`: L): *L*

*Inherited from [Either](_either_either_.either.md).[unwrapLeftOr](_either_either_.either.md#unwrapleftor)*

*Defined in [either/either.ts:24](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | L |

**Returns:** *L*

___

###  unwrapLeftOrElse

▸ **unwrapLeftOrElse**(`fn`: function): *L*

*Inherited from [Either](_either_either_.either.md).[unwrapLeftOrElse](_either_either_.either.md#unwrapleftorelse)*

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

▸ **unwrapRight**(): *never*

*Overrides [Either](_either_either_.either.md).[unwrapRight](_either_either_.either.md#unwrapright)*

*Defined in [either/either.ts:38](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L38)*

**Returns:** *never*

___

###  unwrapRightOr

▸ **unwrapRightOr**(`other`: R): *R*

*Inherited from [Either](_either_either_.either.md).[unwrapRightOr](_either_either_.either.md#unwraprightor)*

*Defined in [either/either.ts:27](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | R |

**Returns:** *R*

___

###  unwrapRightOrElse

▸ **unwrapRightOrElse**(`fn`: function): *R*

*Inherited from [Either](_either_either_.either.md).[unwrapRightOrElse](_either_either_.either.md#unwraprightorelse)*

*Defined in [either/either.ts:28](https://github.com/qworks-io/monads/blob/3596735/src/either/either.ts#L28)*

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *R*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *R*
