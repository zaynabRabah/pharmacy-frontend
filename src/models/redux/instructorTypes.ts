import { IInstructor } from "../itypes";

export const INITIALIZE_INSTRUCTORS = "INITIALIZE_INSTRUCTORS";
export const CREATE_INSTRUCTOR = "CREATE_INSTRUCTOR";
export const UPDATE_INSTRUCTOR = "UPDATE_INSTRUCTOR";
export const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR";

export interface initializeInstructorsAction {
    type: typeof INITIALIZE_INSTRUCTORS;
    instructors: Array<IInstructor>;
}

export interface createInstructorAction {
    type: typeof CREATE_INSTRUCTOR | typeof UPDATE_INSTRUCTOR;
    instructor: IInstructor;
}

export interface deleteInstructorAction {
    type: typeof DELETE_INSTRUCTOR;
    _id: string;
}

export type InstructorsAction = initializeInstructorsAction | createInstructorAction | deleteInstructorAction;