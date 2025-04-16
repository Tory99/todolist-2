import React, { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardsSlice";
import { v4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";
import { FiX } from "react-icons/fi";
import { button, buttons, close, input, listForm, taskForm } from "./DropDownForm.css";

type TDropDownFormProps = {
    boardId: string;
    listId: string;
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
    list? : boolean;
}

const DropDownForm: FC<TDropDownFormProps> = ({
    boardId,
    listId,
    setIsFormOpen,
    list
}) => {   
    const [text, settext] = useState('');
    const formPlaceholder = list? "리스트의 제목을 입력하세요": "일의 제목을 입력하세요.";
    const buttonTitle = list? "리스트 추가하기" : "일 추가하기";
    const dispath = useTypedDispatch();

    const handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        settext(e.target.value);
    }

    const handleButtonClick = () => {
        if(text){
            if(list){
                dispath(
                    addList({
                        boardId,
                        list: {listId: v4(), listName: text, tasks: []}
                    })
                );
                dispath(
                    addLog({
                        logId: v4(),
                        logMessage: `리스트 생성하기: ${text}`,
                        logAuthor: 'User',
                        logTimestamp: String(Date.now())
                    })
                );
            } else {    
                dispath(
                    addTask({
                        boardId,
                        listId,
                        task: {
                            taskId: v4(),
                            taskName: text,
                            taskDescription: "",
                            taskOwner: "User"
                        }
                    })
                );
                dispath(
                    addLog({
                        logId: v4(),
                        logMessage: `일 생성하기: ${text}`,
                        logAuthor: 'User',
                        logTimestamp: String(Date.now())
                    })
                );
            }
        }
    }

    return (
        <div className={list? listForm : taskForm}> 
            <textarea
                className={input}
                value={text}
                onChange={handleTextChange}
                autoFocus
                placeholder={formPlaceholder}
                onBlur={()=> setIsFormOpen(false)}
            />
            <div className={buttons}>
                <button 
                    className={button}
                    onMouseDown={handleButtonClick}>
                    {buttonTitle}
                </button>
                <FiX className={close}/>
            </div>
        </div>
    );
}

export default DropDownForm;