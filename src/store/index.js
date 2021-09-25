import { createStore } from 'vuex'

export default createStore({
  state: {
    task: '',
    editedItem: null,
    statusAvailable: ['To-do', 'In-progress', 'Completed'],
    tasks: [] // An Array where all the tasks would store
  },
  mutations: {
    submitTasks(state){
      if(state.task.length === 0){
        return alert('It cannot be empty')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
