import { Option } from "../..";
export declare const sq: (x: number) => Option<number>;
export declare const nope: (_: number) => Option<number>;
export interface Vehicle {
    driver: Option<{
        contact: Option<{
            name: Option<string>;
        }>;
    }>;
}
export declare const getDriverName: (vehicle: Vehicle) => Option<string>;
