import { boardReducer } from "../slices/boardsSlice";
import { loggerReduce } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReducer } from "../slices/userSlice";

const reducer = {
    logger : loggerReduce,
    board : boardReducer,
    modal : modalReducer,
    user : userReducer
}

export default reducer;