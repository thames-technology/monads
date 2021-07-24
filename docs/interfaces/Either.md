[@sniptt/monads](../README.md) / Either

# Interface: Either<L, R\>

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Table of contents

### Properties

- [type](Either.md#type)

### Methods

- [isLeft](Either.md#isleft)
- [isRight](Either.md#isright)
- [left](Either.md#left)
- [leftAndThen](Either.md#leftandthen)
- [map](Either.md#map)
- [mapLeft](Either.md#mapleft)
- [mapRight](Either.md#mapright)
- [match](Either.md#match)
- [right](Either.md#right)
- [rightAndThen](Either.md#rightandthen)
- [unwrap](Either.md#unwrap)
- [unwrapLeft](Either.md#unwrapleft)
- [unwrapLeftOr](Either.md#unwrapleftor)
- [unwrapLeftOrElse](Either.md#unwrapleftorelse)
- [unwrapRight](Either.md#unwrapright)
- [unwrapRightOr](Either.md#unwraprightor)
- [unwrapRightOrElse](Either.md#unwraprightorelse)

## Properties

### type

• **type**: `symbol`

#### Defined in

[either/either.ts:14](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L14)

## Methods

### isLeft

▸ **isLeft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[either/either.ts:15](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L15)

___

### isRight

▸ **isRight**(): `boolean`

#### Returns

`boolean`

#### Defined in

[either/either.ts:16](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L16)

___

### left

▸ **left**(): [`Option`](Option.md)<`L`\>

#### Returns

[`Option`](Option.md)<`L`\>

#### Defined in

[either/either.ts:17](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L17)

___

### leftAndThen

▸ **leftAndThen**<`U`\>(`fn`): [`Either`](Either.md)<`U`, `R`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `L`) => [`Either`](Either.md)<`U`, `R`\> |

#### Returns

[`Either`](Either.md)<`U`, `R`\>

#### Defined in

[either/either.ts:18](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L18)

___

### map

▸ **map**<`U`\>(`fn`): [`Either`](Either.md)<`U`, `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `L` \| `R`) => `U` |

#### Returns

[`Either`](Either.md)<`U`, `U`\>

#### Defined in

[either/either.ts:29](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L29)

___

### mapLeft

▸ **mapLeft**<`U`\>(`fn`): [`Either`](Either.md)<`U`, `R`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`left`: `L`) => `U` |

#### Returns

[`Either`](Either.md)<`U`, `R`\>

#### Defined in

[either/either.ts:30](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L30)

___

### mapRight

▸ **mapRight**<`U`\>(`fn`): [`Either`](Either.md)<`L`, `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`right`: `R`) => `U` |

#### Returns

[`Either`](Either.md)<`L`, `U`\>

#### Defined in

[either/either.ts:31](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L31)

___

### match

▸ **match**<`U`\>(`fn`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Match`<`L`, `R`, `U`\> |

#### Returns

`U`

#### Defined in

[either/either.ts:28](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L28)

___

### right

▸ **right**(): [`Option`](Option.md)<`R`\>

#### Returns

[`Option`](Option.md)<`R`\>

#### Defined in

[either/either.ts:19](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L19)

___

### rightAndThen

▸ **rightAndThen**<`U`\>(`fn`): [`Either`](Either.md)<`L`, `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `R`) => [`Either`](Either.md)<`L`, `U`\> |

#### Returns

[`Either`](Either.md)<`L`, `U`\>

#### Defined in

[either/either.ts:20](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L20)

___

### unwrap

▸ **unwrap**(): `L` \| `R`

#### Returns

`L` \| `R`

#### Defined in

[either/either.ts:21](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L21)

___

### unwrapLeft

▸ **unwrapLeft**(): `L`

#### Returns

`L`

#### Defined in

[either/either.ts:22](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L22)

___

### unwrapLeftOr

▸ **unwrapLeftOr**(`other`): `L`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `L` |

#### Returns

`L`

#### Defined in

[either/either.ts:23](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L23)

___

### unwrapLeftOrElse

▸ **unwrapLeftOrElse**(`fn`): `L`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`right`: `R`) => `L` |

#### Returns

`L`

#### Defined in

[either/either.ts:24](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L24)

___

### unwrapRight

▸ **unwrapRight**(): `R`

#### Returns

`R`

#### Defined in

[either/either.ts:25](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L25)

___

### unwrapRightOr

▸ **unwrapRightOr**(`other`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `R` |

#### Returns

`R`

#### Defined in

[either/either.ts:26](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L26)

___

### unwrapRightOrElse

▸ **unwrapRightOrElse**(`fn`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`left`: `L`) => `R` |

#### Returns

`R`

#### Defined in

[either/either.ts:27](https://github.com/sniptt-official/monads/blob/b8a68b4/lib/either/either.ts#L27)
