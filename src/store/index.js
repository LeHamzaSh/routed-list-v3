import { createStore } from 'vuex'

export default createStore({
  state: {
    task: '',
    editedItem: null,
    statusAvailable: ['To-do', 'In-progress', 'Completed'],
    tasks: [], // An Array where all the tasks would store  
  },
  mutations: {
    submitTasks(state){
      if(state.task.length === 0){
        return alert('It cannot be empty')
      }
      else{
        if(state.editedItem === null){
          console.log(state.task)
          state.tasks.push({
            name: state.task,
            status: 'To-do'
          })
        }

        else{
          state.tasks[state.editedItem].name = state.task;
          state.editedItem = null
        }

        // Reset the Enter Task after entering data
        state.task = ''
      }
    },

    deleteItem(state, index){
      // Remove the item from the array
      state.tasks.splice(index, 1)
    },

    editedItem(state,index){
      // state.task = state.tasks[index].name
      // console.log(index)
      // state.editedItem = index
      // console.log(state.editedItem)
    },

    statusChange(state, index){
      // Loop over the statuses on each click
      let indexTwo = state.statusAvailable.indexOf(state.tasks[index].status)
      if(++indexTwo > 2) indexTwo = 0
      state.tasks[index].status = state.statusAvailable[indexTwo]
      console.log(indexTwo)
      console.log(state.tasks.status)
    }

  },
  actions: {

  },
  modules: {
  }
})
