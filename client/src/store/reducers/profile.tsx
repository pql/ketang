import { AnyAction } from "redux";
import { LOGIN_TYPES, ProfileState } from '@/typings/state';
const initialState: ProfileState = {
    loginState: LOGIN_TYPES.UN_VALIDATE,
    user: null,
    error: null
}
export default function(state: ProfileState = initialState, action: AnyAction): ProfileState {
    return state;
}