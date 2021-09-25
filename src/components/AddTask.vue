<template>
    <div class="about">
        <div class="container">
            <h2 class="text-center mt-5">Hamza's Todo List</h2>

            <!-- Input -->
            <div class="d-flex">
                <input v-model="$store.state.task" type="text" placeholder="Enter Task" class="form-control">
                <button @click="$store.commit('submitTasks')" class="btn btn-danger rounded-3">Submit</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.d-flex{
  align-items: center;
  height: 50px;
  justify-content: center;
}

.form-control{
    border-color: black;
    border-width: 5px;
}

.btn-danger{
    border-color: coral;
    margin-left: 10px;
    border-width: 5px;
}
</style>