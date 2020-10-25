import { IAssignment } from "../itypes";

export const INITIALIZE_ASSIGNMENTS = "INITIALIZE_ASSIGNMENTS";
export const CREATE_ASSIGNMENT = "CREATE_ASSIGNMENT";
export const UPDATE_ASSIGNMENT = "UPDATE_ASSIGNMENT";
export const DELETE_ASSIGNMENT = "DELETE_ASSIGNMENT";

export interface initializeAssignmentsAction {
    type: typeof INITIALIZE_ASSIGNMENTS;
    assignments: Array<IAssignment>;
}

export interface createAssignmentAction {
    type: typeof CREATE_ASSIGNMENT | typeof UPDATE_ASSIGNMENT;
    assignment: IAssignment;
}

export interface deleteAssignmentAction {
    type: typeof DELETE_ASSIGNMENT;
    _id: string;
}

export type AssignmentsAction = initializeAssignmentsAction | createAssignmentAction | deleteAssignmentAction;