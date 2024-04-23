import { Reason } from "./reason.type";

export type ApiResponse = {
    message: string;
    reasons?: Reason[];
}