import { AuthAction,LogoutAction} from "./authTypes";
import { InstructorsAction } from "./instructorTypes";
import { PopularInstructorsAction } from "./popularInstructorTypes";
import { PopularCoursesAction } from "./popularCourseTypes";
import { OrdersAction } from "./orderType";
import { AssignmentsAction } from "./assigmentTypes";
import { ProfileAssignmentsAction } from "./profileAssignmentTypes";

export type AppActions = AuthAction | LogoutAction | InstructorsAction | PopularInstructorsAction | PopularCoursesAction |OrdersAction | AssignmentsAction | ProfileAssignmentsAction;