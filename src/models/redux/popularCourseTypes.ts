import { IPopularCourse } from "../itypes";

export const INITIALIZE_POPULARCOURSES = "INITIALIZE_POPULARCOURSES";
export const CREATE_POPULARCOURSE = "CREATE_POPULARCOURSE";
export const UPDATE_POPULARCOURSE = "UPDATE_POPULARCOURSE";
export const DELETE_POPULARCOURSE = "DELETE_POPULARCOURSE";

export interface PopularCoursesAction {
    type: typeof INITIALIZE_POPULARCOURSES;
    popularCourses: Array<IPopularCourse>;
}