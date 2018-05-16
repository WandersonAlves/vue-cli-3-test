export interface IState {
    todos: ITodo[];
}

export interface ITodo {
    name: string;
    finishDate: string;
    createDate: string;
    priority: string;
    body: string;
}
