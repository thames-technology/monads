[@hqoss/monads](../README.md) › [Globals](../globals.md) › [ResLeft](resleft.md)

# Interface: ResLeft <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* [Either](either.md)‹L, R›

  ↳ **ResLeft**

## Index

### Properties

* [type](resleft.md#type)

### Methods

* [isLeft](resleft.md#isleft)
* [isRight](resleft.md#isright)
* [left](resleft.md#left)
* [leftAndThen](resleft.md#leftandthen)
* [map](resleft.md#map)
* [mapLeft](resleft.md#mapleft)
* [mapRight](resleft.md#mapright)
* [match](resleft.md#match)
* [right](resleft.md#right)
* [rightAndThen](resleft.md#rightandthen)
* [unwrap](resleft.md#unwrap)
* [unwrapLeft](resleft.md#unwrapleft)
* [unwrapLeftOr](resleft.md#unwrapleftor)
* [unwrapLeftOrElse](resleft.md#unwrapleftorelse)
* [unwrapRight](resleft.md#unwrapright)
* [unwrapRightOr](resleft.md#unwraprightor)
* [unwrapRightOrElse](resleft.md#unwraprightorelse)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Either](either.md).[type](either.md#type)*

*Defined in [either/either.ts:15](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L15)*

## Methods

###  isLeft

▸ **isLeft**(): *boolean*

*Inherited from [Either](either.md).[isLeft](either.md#isleft)*

*Defined in [either/either.ts:16](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L16)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Inherited from [Either](either.md).[isRight](either.md#isright)*

*Defined in [either/either.ts:17](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L17)*

**Returns:** *boolean*

___

###  left

▸ **left**(): *[Option](option.md)‹L›*

*Inherited from [Either](either.md).[left](either.md#left)*

*Defined in [either/either.ts:18](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L18)*

**Returns:** *[Option](option.md)‹L›*

___

###  leftAndThen

▸ **leftAndThen**<**U**>(`fn`: function): *[Either](either.md)‹U, R›*

*Inherited from [Either](either.md).[leftAndThen](either.md#leftandthen)*

*Defined in [either/either.ts:19](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L19)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L): *[Either](either.md)‹U, R›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L |

**Returns:** *[Either](either.md)‹U, R›*

___

###  map

▸ **map**<**U**>(`fn`: function): *[ResLeft](resleft.md)‹U, never›*

*Overrides [Either](either.md).[map](either.md#map)*

*Defined in [either/either.ts:40](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L40)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L | R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L &#124; R |

**Returns:** *[ResLeft](resleft.md)‹U, never›*

___

###  mapLeft

▸ **mapLeft**<**U**>(`fn`: function): *[Either](either.md)‹U, never›*

*Overrides [Either](either.md).[mapLeft](either.md#mapleft)*

*Defined in [either/either.ts:41](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L41)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *[Either](either.md)‹U, never›*

___

###  mapRight

▸ **mapRight**<**U**>(`fn`: function): *[ResLeft](resleft.md)‹L, never›*

*Overrides [Either](either.md).[mapRight](either.md#mapright)*

*Defined in [either/either.ts:42](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L42)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`right`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *[ResLeft](resleft.md)‹L, never›*

___

###  match

▸ **match**<**U**>(`fn`: Match‹L, never, U›): *U*

*Overrides [Either](either.md).[match](either.md#match)*

*Defined in [either/either.ts:39](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L39)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Match‹L, never, U› |

**Returns:** *U*

___

###  right

▸ **right**(): *[Option](option.md)‹R›*

*Inherited from [Either](either.md).[right](either.md#right)*

*Defined in [either/either.ts:20](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L20)*

**Returns:** *[Option](option.md)‹R›*

___

###  rightAndThen

▸ **rightAndThen**<**U**>(`fn`: function): *[Either](either.md)‹L, U›*

*Inherited from [Either](either.md).[rightAndThen](either.md#rightandthen)*

*Defined in [either/either.ts:21](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L21)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: R): *[Either](either.md)‹L, U›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | R |

**Returns:** *[Either](either.md)‹L, U›*

___

###  unwrap

▸ **unwrap**(): *L*

*Overrides [Either](either.md).[unwrap](either.md#unwrap)*

*Defined in [either/either.ts:36](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L36)*

**Returns:** *L*

___

###  unwrapLeft

▸ **unwrapLeft**(): *L*

*Overrides [Either](either.md).[unwrapLeft](either.md#unwrapleft)*

*Defined in [either/either.ts:37](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L37)*

**Returns:** *L*

___

###  unwrapLeftOr

▸ **unwrapLeftOr**(`other`: L): *L*

*Inherited from [Either](either.md).[unwrapLeftOr](either.md#unwrapleftor)*

*Defined in [either/either.ts:24](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | L |

**Returns:** *L*

___

###  unwrapLeftOrElse

▸ **unwrapLeftOrElse**(`fn`: function): *L*

*Inherited from [Either](either.md).[unwrapLeftOrElse](either.md#unwrapleftorelse)*

*Defined in [either/either.ts:25](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L25)*

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

*Overrides [Either](either.md).[unwrapRight](either.md#unwrapright)*

*Defined in [either/either.ts:38](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L38)*

**Returns:** *never*

___

###  unwrapRightOr

▸ **unwrapRightOr**(`other`: R): *R*

*Inherited from [Either](either.md).[unwrapRightOr](either.md#unwraprightor)*

*Defined in [either/either.ts:27](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | R |

**Returns:** *R*

___

###  unwrapRightOrElse

▸ **unwrapRightOrElse**(`fn`: function): *R*

*Inherited from [Either](either.md).[unwrapRightOrElse](either.md#unwraprightorelse)*

*Defined in [either/either.ts:28](https://github.com/qworks-io/monads/blob/6a3a7f7/src/either/either.ts#L28)*

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *R*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *R*
