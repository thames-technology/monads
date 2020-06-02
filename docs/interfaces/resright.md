[@hqoss/monads](../README.md) › [Globals](../globals.md) › [ResRight](resright.md)

# Interface: ResRight <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* [Either](either.md)‹L, R›

  ↳ **ResRight**

## Index

### Properties

* [type](resright.md#type)

### Methods

* [isLeft](resright.md#isleft)
* [isRight](resright.md#isright)
* [left](resright.md#left)
* [leftAndThen](resright.md#leftandthen)
* [map](resright.md#map)
* [mapLeft](resright.md#mapleft)
* [mapRight](resright.md#mapright)
* [match](resright.md#match)
* [right](resright.md#right)
* [rightAndThen](resright.md#rightandthen)
* [unwrap](resright.md#unwrap)
* [unwrapLeft](resright.md#unwrapleft)
* [unwrapLeftOr](resright.md#unwrapleftor)
* [unwrapLeftOrElse](resright.md#unwrapleftorelse)
* [unwrapRight](resright.md#unwrapright)
* [unwrapRightOr](resright.md#unwraprightor)
* [unwrapRightOrElse](resright.md#unwraprightorelse)

## Properties

###  type

• **type**: *symbol*

*Inherited from [Either](either.md).[type](either.md#type)*

Defined in either/either.ts:15

## Methods

###  isLeft

▸ **isLeft**(): *boolean*

*Inherited from [Either](either.md).[isLeft](either.md#isleft)*

Defined in either/either.ts:16

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Inherited from [Either](either.md).[isRight](either.md#isright)*

Defined in either/either.ts:17

**Returns:** *boolean*

___

###  left

▸ **left**(): *[Option](option.md)‹L›*

*Inherited from [Either](either.md).[left](either.md#left)*

Defined in either/either.ts:18

**Returns:** *[Option](option.md)‹L›*

___

###  leftAndThen

▸ **leftAndThen**<**U**>(`fn`: function): *[Either](either.md)‹U, R›*

*Inherited from [Either](either.md).[leftAndThen](either.md#leftandthen)*

Defined in either/either.ts:19

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

▸ **map**<**U**>(`fn`: function): *[ResRight](resright.md)‹never, U›*

*Overrides [Either](either.md).[map](either.md#map)*

Defined in either/either.ts:50

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`val`: L | R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`val` | L &#124; R |

**Returns:** *[ResRight](resright.md)‹never, U›*

___

###  mapLeft

▸ **mapLeft**<**U**>(`fn`: function): *[Either](either.md)‹never, R›*

*Overrides [Either](either.md).[mapLeft](either.md#mapleft)*

Defined in either/either.ts:51

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *U*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *[Either](either.md)‹never, R›*

___

###  mapRight

▸ **mapRight**<**U**>(`fn`: function): *[ResRight](resright.md)‹never, U›*

*Overrides [Either](either.md).[mapRight](either.md#mapright)*

Defined in either/either.ts:52

**Type parameters:**

▪ **U**

**Parameters:**

▪ **fn**: *function*

▸ (`right`: R): *U*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *[ResRight](resright.md)‹never, U›*

___

###  match

▸ **match**<**U**>(`fn`: Match‹never, R, U›): *U*

*Overrides [Either](either.md).[match](either.md#match)*

Defined in either/either.ts:49

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Match‹never, R, U› |

**Returns:** *U*

___

###  right

▸ **right**(): *[Option](option.md)‹R›*

*Inherited from [Either](either.md).[right](either.md#right)*

Defined in either/either.ts:20

**Returns:** *[Option](option.md)‹R›*

___

###  rightAndThen

▸ **rightAndThen**<**U**>(`fn`: function): *[Either](either.md)‹L, U›*

*Inherited from [Either](either.md).[rightAndThen](either.md#rightandthen)*

Defined in either/either.ts:21

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

▸ **unwrap**(): *R*

*Overrides [Either](either.md).[unwrap](either.md#unwrap)*

Defined in either/either.ts:46

**Returns:** *R*

___

###  unwrapLeft

▸ **unwrapLeft**(): *never*

*Overrides [Either](either.md).[unwrapLeft](either.md#unwrapleft)*

Defined in either/either.ts:47

**Returns:** *never*

___

###  unwrapLeftOr

▸ **unwrapLeftOr**(`other`: L): *L*

*Inherited from [Either](either.md).[unwrapLeftOr](either.md#unwrapleftor)*

Defined in either/either.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`other` | L |

**Returns:** *L*

___

###  unwrapLeftOrElse

▸ **unwrapLeftOrElse**(`fn`: function): *L*

*Inherited from [Either](either.md).[unwrapLeftOrElse](either.md#unwrapleftorelse)*

Defined in either/either.ts:25

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

▸ **unwrapRight**(): *R*

*Overrides [Either](either.md).[unwrapRight](either.md#unwrapright)*

Defined in either/either.ts:48

**Returns:** *R*

___

###  unwrapRightOr

▸ **unwrapRightOr**(`other`: R): *R*

*Inherited from [Either](either.md).[unwrapRightOr](either.md#unwraprightor)*

Defined in either/either.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`other` | R |

**Returns:** *R*

___

###  unwrapRightOrElse

▸ **unwrapRightOrElse**(`fn`: function): *R*

*Inherited from [Either](either.md).[unwrapRightOrElse](either.md#unwraprightorelse)*

Defined in either/either.ts:28

**Parameters:**

▪ **fn**: *function*

▸ (`left`: L): *R*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

**Returns:** *R*
