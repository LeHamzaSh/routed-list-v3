<template>
    <div class="home">
        <div class="container">
            <h2 class="text-center mt-5">Hamza's Todo List</h2>

            <!-- Table for the Tasks -->
            <table class="table table-bordered mt-5">
                <!-- Table Head -->
                <thead>
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">#</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>

                <!-- Table Body -->
                <tbody>
                    <tr v-for="(task, index) in $store.state.tasks" :key="index">
                    <td><span :class="{'completedItem': task.status === 'Completed'}">{{ task.name }}</span></td>
                    <!-- Display the name of the task -->
                    <!-- The Statuses are clickable to change -->
                    <!-- <td><span>{{ task.name }}</span></td> -->
                    <td style="width: 140px"><span @click="$store.commit('statusChange', index)" class="pointer" :class="{
                    'text-danger'  :task.status === 'To-do',
                    'text-warning' : task.status === 'In-progress',
                    'text-success'  : task.status === 'Completed'}">
                    {{ task.status }}
                    </span></td>

                    <td>
                        <div class="text-center" @click="$store.commit('editedItem', index)">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>

                    <td>
                        <div class="text-center" @click="$store.commit('deleteItem', index)">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AddTask',
}
</script>

<style scoped>
.pointer{
    cursor: pointer;
}

.completedItem{
    text-decoration: line-through;
}

tr{
    border-color: black;

}

th{
    font-weight: bold;
    font-style: italic;
}

thead{
    border-color: black;
    border-width: 5px;
}

tbody{
    border-color: black;
    border-width: 5px;
}

td{
    border-color: black;
    border-width: 5px;

}
</style>
