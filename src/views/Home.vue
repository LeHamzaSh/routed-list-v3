<template>
  <div class="home">
    <ViewAllTask/>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewAllTask from '@/components/ViewAllTask.vue'

export default {
  name: 'Home',
  components:{
    ViewAllTask
  }
}
</script>
