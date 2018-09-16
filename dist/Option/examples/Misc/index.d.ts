import { Option } from "../..";
export declare const getName: (first: Option<string>, last: Option<string>) => Option<string>;
export interface FullName {
    firstName: string;
    lastName: string;
}
export declare const getFullName: (first: Option<string>, last: Option<string>) => Option<FullName>;
