@sniptt/monads

# @sniptt/monads

## Table of contents

### Interfaces

- [Either](interfaces/Either.md)
- [Option](interfaces/Option.md)
- [Result](interfaces/Result.md)

### Variables

- [None](README.md#none)

### Functions

- [Err](README.md#err)
- [Left](README.md#left)
- [Ok](README.md#ok)
- [Right](README.md#right)
- [Some](README.md#some)
- [isErr](README.md#iserr)
- [isLeft](README.md#isleft)
- [isNone](README.md#isnone)
- [isOk](README.md#isok)
- [isRight](README.md#isright)
- [isSome](README.md#issome)

## Variables

### None

• `Const` **None**: `OptNone`<`any`\>

#### Defined in

[option/option.ts:44](https://github.com/sniptt-official/monads/blob/f783cc8/lib/option/option.ts#L44)

## Functions

### Err

▸ **Err**<`T`, `E`\>(`err`): `ResErr`<`T`, `E`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

#### Returns

`ResErr`<`T`, `E`\>

#### Defined in

[result/result.ts:99](https://github.com/sniptt-official/monads/blob/f783cc8/lib/result/result.ts#L99)

___

### Left

▸ **Left**<`L`, `R`\>(`val`): `ResLeft`<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `L` |

#### Returns

`ResLeft`<`L`, `R`\>

#### Defined in

[either/either.ts:54](https://github.com/sniptt-official/monads/blob/f783cc8/lib/either/either.ts#L54)

___

### Ok

▸ **Ok**<`T`, `E`\>(`val`): `ResOk`<`T`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Returns

`ResOk`<`T`, `E`\>

#### Defined in

[result/result.ts:54](https://github.com/sniptt-official/monads/blob/f783cc8/lib/result/result.ts#L54)

___

### Right

▸ **Right**<`L`, `R`\>(`val`): `ResRight`<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `R` |

#### Returns

`ResRight`<`L`, `R`\>

#### Defined in

[either/either.ts:111](https://github.com/sniptt-official/monads/blob/f783cc8/lib/either/either.ts#L111)

___

### Some

▸ **Some**<`T`\>(`val?`): [`Option`](interfaces/Option.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `T` |

#### Returns

[`Option`](interfaces/Option.md)<`T`\>

#### Defined in

[option/option.ts:38](https://github.com/sniptt-official/monads/blob/f783cc8/lib/option/option.ts#L38)

___

### isErr

▸ **isErr**<`T`, `E`\>(`val`): val is ResErr<T, E\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Result`](interfaces/Result.md)<`T`, `E`\> |

#### Returns

val is ResErr<T, E\>

#### Defined in

[result/result.ts:148](https://github.com/sniptt-official/monads/blob/f783cc8/lib/result/result.ts#L148)

___

### isLeft

▸ **isLeft**<`L`, `R`\>(`val`): val is ResLeft<L, R\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Either`](interfaces/Either.md)<`L`, `R`\> |

#### Returns

val is ResLeft<L, R\>

#### Defined in

[either/either.ts:168](https://github.com/sniptt-official/monads/blob/f783cc8/lib/either/either.ts#L168)

___

### isNone

▸ **isNone**<`T`\>(`val`): val is OptNone<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Option`](interfaces/Option.md)<`T`\> |

#### Returns

val is OptNone<T\>

#### Defined in

[option/option.ts:126](https://github.com/sniptt-official/monads/blob/f783cc8/lib/option/option.ts#L126)

___

### isOk

▸ **isOk**<`T`, `E`\>(`val`): val is ResOk<T, never\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Result`](interfaces/Result.md)<`T`, `E`\> |

#### Returns

val is ResOk<T, never\>

#### Defined in

[result/result.ts:144](https://github.com/sniptt-official/monads/blob/f783cc8/lib/result/result.ts#L144)

___

### isRight

▸ **isRight**<`L`, `R`\>(`val`): val is ResRight<L, R\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Either`](interfaces/Either.md)<`L`, `R`\> |

#### Returns

val is ResRight<L, R\>

#### Defined in

[either/either.ts:172](https://github.com/sniptt-official/monads/blob/f783cc8/lib/either/either.ts#L172)

___

### isSome

▸ **isSome**<`T`\>(`val`): val is OptSome<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Option`](interfaces/Option.md)<`T`\> |

#### Returns

val is OptSome<T\>

#### Defined in

[option/option.ts:122](https://github.com/sniptt-official/monads/blob/f783cc8/lib/option/option.ts#L122)
