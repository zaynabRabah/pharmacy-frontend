import { IPopularInstructor } from "../itypes";

export const INITIALIZE_POPULARINSTRUCTORS = "INITIALIZE_POPULARINSTRUCTORS";
export const CREATE_POPULARINSTRUCTOR = "CREATE_POPULARINSTRUCTOR";
export const UPDATE_POPULARINSTRUCTOR = "UPDATE_POPULARINSTRUCTOR";
export const DELETE_POPULARINSTRUCTOR = "DELETE_POPULARINSTRUCTOR";

export interface PopularInstructorsAction {
    type: typeof INITIALIZE_POPULARINSTRUCTORS;
    popularInstructors: Array<IPopularInstructor>;
}