import { IProfileAssignment } from "../itypes";

export const INITIALIZE_PROFILEASSIGNMENTS = "INITIALIZE_PROFILEASSIGNMENTS";
export const CREATE_PROFILEASSIGNMENT = "CREATE_PROFILEASSIGNMENT";
export const UPDATE_PROFILEASSIGNMENT = "UPDATE_PROFILEASSIGNMENT";
export const DELETE_PROFILEASSIGNMENT = "DELETE_PROFILEASSIGNMENT";

export interface initializeProfileAssignmentsAction {
    type: typeof INITIALIZE_PROFILEASSIGNMENTS;
    profileAssignments: Array<IProfileAssignment>;
}

export interface createProfileAssignmentAction {
    type: typeof CREATE_PROFILEASSIGNMENT | typeof UPDATE_PROFILEASSIGNMENT;
    profileAssignment: IProfileAssignment;
}

export interface deleteProfileAssignmentAction {
    type: typeof DELETE_PROFILEASSIGNMENT;
    _id: string;
}

export type ProfileAssignmentsAction = initializeProfileAssignmentsAction | createProfileAssignmentAction | deleteProfileAssignmentAction;