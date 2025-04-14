import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}



const initialState : TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId : 'board-0',
            boardName : 'board 0',
            lists: [
                {
                    listId : 'list-0',
                    listName : 'list 1',
                    tasks: [
                        {
                            taskId : 'task-0',
                            taskName : 'task 1',
                            taskDescription : 'task 1 description',
                            taskOwner : 'Jw'
                        },
                        {
                            taskId : 'task-1',
                            taskName : 'task 2',
                            taskDescription : 'task 2 description',
                            taskOwner : 'Jw'
                        }
                    ]
                },
                {
                    listId : 'list-1',
                    listName : 'list 2',
                    tasks: [
                        {
                            taskId : 'task-3',
                            taskName : 'task 3',
                            taskDescription : 'task 3 description',
                            taskOwner : 'Jw'
                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice = createSlice({   
    name : "board",
    initialState,
    reducers: {}
})

export const boardReducer = boardSlice.reducer;