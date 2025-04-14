import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../store/index.tsx";


export const useTypedSelector: TypedUseSelectorHook<RootState>  = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();