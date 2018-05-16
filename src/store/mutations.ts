import { IState, ITodo } from "@/interfaces";
import { ADD_TODO } from "@/store/mutation-types";

export const mutations = {
    [ADD_TODO](state: IState, todo: ITodo) {
        state.todos.push(todo);
    }
};
