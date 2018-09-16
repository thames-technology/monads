import { Option } from "../..";
export interface Car {
    driver?: {
        contact?: {
            name?: string;
        };
    };
}
export declare const getDriverName: (car: Car) => Option<string>;
