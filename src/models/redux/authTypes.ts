import { IUser } from "../itypes";

export interface authState {
    isAuthenticated: boolean;
    user: IUser;
}

export const INITIALIZE_USER_INFO = "INITIALIZE_USER_INFO";
export const CLEAR_AUTH_STATE = "CLEAR_AUTH_STATE";


export interface AuthAction {
  type: typeof INITIALIZE_USER_INFO;
  user_info?: IUser;
}
export interface LogoutAction {
  type: typeof CLEAR_AUTH_STATE;
  user_info?: IUser;
}