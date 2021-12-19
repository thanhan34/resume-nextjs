import { atom } from "recoil"

export const isOpenState = atom({
    key: 'isOpenState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});