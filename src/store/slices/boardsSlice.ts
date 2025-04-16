import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}

type TDeleteListAction = {
    boardId: string;
    listId: string;
}

type TAddListAction = {
    boardId: string;
    list: IList;
}

type TAddTaskAction = {
    boardId: string;
    listId: string;
    task: ITask;
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
    reducers: {
        addBoard: (state, {payload} : PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        },

        addList: (state, {payload} : PayloadAction<TAddListAction>) => {
            state.boardArray.map(board => 
                board.boardId === payload.boardId ?
                {...board, lists: board.lists.push(payload.list)}
                :
                board
            )
        },

        addTask: (state, {payload} : PayloadAction<TAddTaskAction>) => {
            state.boardArray.map(board => 
                board.boardId === payload.boardId ?
                {...board, lists: board.lists.map(list => 
                    list.listId === payload.listId ?
                    { 
                        ...list,
                        task: list.tasks.push(payload.task)
                    }
                    :
                    list
                )}
                :
                board
            )
        },

        deleteList: (state, {payload} : PayloadAction<TDeleteListAction>) =>{
            state.boardArray = state.boardArray.map(
                board => board.boardId === payload.boardId 
                ? 
                {
                    ...board,
                    lists: board.lists.filter(
                        list => list.listId !== payload.listId
                    )
                }
                :
                board
            )
        },

        setModalActive: (state, {payload}: PayloadAction<boolean>) => {
            state.modalActive = payload;
        }
    }
})

export const {addBoard, deleteList, setModalActive, addList, addTask} = boardSlice.actions
export const boardReducer = boardSlice.reducer;