import { boardReducer } from "../slices/boardsSlice";
import { loggerReduce } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
    logger : loggerReduce,
    board : boardReducer,
    modal : modalReducer
}

export default reducer;