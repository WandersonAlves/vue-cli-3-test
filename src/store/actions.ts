import { IState, ITodo } from "@/interfaces";
import { Commit } from "vuex";

export const actions = {
    fetchTodos({commit, state}: { commit: Commit, state: IState}) {
        setTimeout(() => {
            const todo: ITodo = {
                body: 'teste',
                createDate: 'today',
                finishDate: '22/05/2018',
                name: 'Teste',
                priority: 'high'
            }
            commit('ADD_TODO', todo);
        }, 200);
    }
}