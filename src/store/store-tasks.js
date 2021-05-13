import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'id1': {
            name: 'Go to Shantou',
            completed: false,
            dueDate: '2020/05/12',
            dueTime: '15:23'
        },
        'id2': {
            name: 'Go to Chiang Mai',
            completed: false,
            dueDate: '2020/05/12',
            dueTime: '15:23'
        },
        'id3': {
            name: 'Buy a coffee',
            completed: false,
            dueDate: '2020/05/12',
            dueTime: '15:23'
        },
    }
}

// Mutations change the State
const mutations = {
    updateTask (state, payload) {
        console.log(`payload (from Mutation): `, payload);
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask (state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask (state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

// Actions can be asynchronous, Actions should call Mutations
const actions = {
    updateTask ({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask ({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask ({ commit }, task) {
        let taskId = uid();
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload);
    }
}


const getters = {
    tasks: (state) => {
        return state.tasks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}