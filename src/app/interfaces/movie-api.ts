import { Result } from "./result";

export interface MovieAPI {
    searchType: string;
    expression: string;
    results: Result[];
    errorMessage: string;
}