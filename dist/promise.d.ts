import { Result } from "./Result";
export declare const map_async: <T, E = any>(p: Promise<T>) => Promise<Result<T, E>>;
