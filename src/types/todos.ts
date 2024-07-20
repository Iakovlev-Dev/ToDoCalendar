export type TListTodo = {
    id: string;
    text: string;
}

export type TTodo = {
    id: string;
    listToDo: TListTodo[]
}

export type TToDos = TTodo[]
