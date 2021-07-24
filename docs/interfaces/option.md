[@hqoss/monads](../README.md) / Option

# Interface: Option<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [type](Option.md#type)

### Methods

- [and](Option.md#and)
- [andThen](Option.md#andthen)
- [isNone](Option.md#isnone)
- [isSome](Option.md#issome)
- [map](Option.md#map)
- [match](Option.md#match)
- [or](Option.md#or)
- [unwrap](Option.md#unwrap)
- [unwrapOr](Option.md#unwrapor)

## Properties

### type

• **type**: `symbol`

#### Defined in

[option/option.ts:12](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L12)

## Methods

### and

▸ **and**<`U`\>(`optb`): [`Option`](Option.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `optb` | [`Option`](Option.md)<`U`\> |

#### Returns

[`Option`](Option.md)<`U`\>

#### Defined in

[option/option.ts:19](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L19)

___

### andThen

▸ **andThen**<`U`\>(`fn`): [`Option`](Option.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `T`) => [`Option`](Option.md)<`U`\> |

#### Returns

[`Option`](Option.md)<`U`\>

#### Defined in

[option/option.ts:17](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L17)

___

### isNone

▸ **isNone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[option/option.ts:14](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L14)

___

### isSome

▸ **isSome**(): `boolean`

#### Returns

`boolean`

#### Defined in

[option/option.ts:13](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L13)

___

### map

▸ **map**<`U`\>(`fn`): [`Option`](Option.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `T`) => `U` |

#### Returns

[`Option`](Option.md)<`U`\>

#### Defined in

[option/option.ts:16](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L16)

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
| `fn` | `Match`<`T`, `U`\> |

#### Returns

`U`

#### Defined in

[option/option.ts:15](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L15)

___

### or

▸ **or**<`U`\>(`optb`): [`Option`](Option.md)<`T` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `optb` | [`Option`](Option.md)<`U`\> |

#### Returns

[`Option`](Option.md)<`T` \| `U`\>

#### Defined in

[option/option.ts:18](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L18)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Defined in

[option/option.ts:21](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L21)

___

### unwrapOr

▸ **unwrapOr**(`def`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

`T`

#### Defined in

[option/option.ts:20](https://github.com/sniptt-official/monads/blob/eccaba1/lib/option/option.ts#L20)
