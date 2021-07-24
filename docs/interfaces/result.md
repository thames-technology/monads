[@hqoss/monads](../README.md) / Result

# Interface: Result<T, E\>

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Table of contents

### Properties

- [type](Result.md#type)

### Methods

- [andThen](Result.md#andthen)
- [err](Result.md#err)
- [isErr](Result.md#iserr)
- [isOk](Result.md#isok)
- [map](Result.md#map)
- [mapErr](Result.md#maperr)
- [match](Result.md#match)
- [ok](Result.md#ok)
- [orElse](Result.md#orelse)
- [unwrap](Result.md#unwrap)
- [unwrapErr](Result.md#unwraperr)
- [unwrapOr](Result.md#unwrapor)
- [unwrapOrElse](Result.md#unwraporelse)

## Properties

### type

• **type**: `symbol`

#### Defined in

[result/result.ts:14](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L14)

## Methods

### andThen

▸ **andThen**<`U`\>(`fn`): [`Result`](Result.md)<`U`, `E`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `T`) => [`Result`](Result.md)<`U`, `E`\> |

#### Returns

[`Result`](Result.md)<`U`, `E`\>

#### Defined in

[result/result.ts:26](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L26)

___

### err

▸ **err**(): [`Option`](Option.md)<`E`\>

#### Returns

[`Option`](Option.md)<`E`\>

#### Defined in

[result/result.ts:18](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L18)

___

### isErr

▸ **isErr**(): `boolean`

#### Returns

`boolean`

#### Defined in

[result/result.ts:16](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L16)

___

### isOk

▸ **isOk**(): `boolean`

#### Returns

`boolean`

#### Defined in

[result/result.ts:15](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L15)

___

### map

▸ **map**<`U`\>(`fn`): [`Result`](Result.md)<`U`, `E`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`val`: `T`) => `U` |

#### Returns

[`Result`](Result.md)<`U`, `E`\>

#### Defined in

[result/result.ts:24](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L24)

___

### mapErr

▸ **mapErr**<`U`\>(`fn`): [`Result`](Result.md)<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`err`: `E`) => `U` |

#### Returns

[`Result`](Result.md)<`T`, `U`\>

#### Defined in

[result/result.ts:25](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L25)

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
| `fn` | `Match`<`T`, `E`, `U`\> |

#### Returns

`U`

#### Defined in

[result/result.ts:23](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L23)

___

### ok

▸ **ok**(): [`Option`](Option.md)<`T`\>

#### Returns

[`Option`](Option.md)<`T`\>

#### Defined in

[result/result.ts:17](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L17)

___

### orElse

▸ **orElse**<`U`\>(`fn`): [`Result`](Result.md)<`T`, `E`\> \| [`Result`](Result.md)<`U`, `E`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`err`: `E`) => [`Result`](Result.md)<`U`, `E`\> |

#### Returns

[`Result`](Result.md)<`T`, `E`\> \| [`Result`](Result.md)<`U`, `E`\>

#### Defined in

[result/result.ts:27](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L27)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Defined in

[result/result.ts:19](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L19)

___

### unwrapErr

▸ **unwrapErr**(): `E`

#### Returns

`E`

#### Defined in

[result/result.ts:22](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L22)

___

### unwrapOr

▸ **unwrapOr**(`optb`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `optb` | `T` |

#### Returns

`T`

#### Defined in

[result/result.ts:20](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L20)

___

### unwrapOrElse

▸ **unwrapOrElse**(`fn`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`err`: `E`) => `T` |

#### Returns

`T`

#### Defined in

[result/result.ts:21](https://github.com/sniptt-official/monads/blob/588afea/lib/result/result.ts#L21)
