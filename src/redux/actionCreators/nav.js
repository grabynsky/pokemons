import { HIDE_NAV, SHOW_NAV } from "../actionTypes";

export function showNav(){
    return {
        type: SHOW_NAV
    }
}
export function hideNav() {
    return {
        type: HIDE_NAV
    }
}