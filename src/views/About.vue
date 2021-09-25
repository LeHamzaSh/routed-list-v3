<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddTask/>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue'

export default{
  name: 'About',
  components: {
    AddTask
  }
}
</script>
