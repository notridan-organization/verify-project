<template>
  <div>
    <div class="w-screen h-screen">
      <div v-if="$layout" class="w-full h-full bg-red-500"></div>
      <LoaderApp v-else />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('config', {
      $layout: 'layout'
    })
  }
}
</script>