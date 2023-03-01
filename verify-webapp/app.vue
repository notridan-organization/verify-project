<template>
  <div>
    <div class="w-screen h-screen animate__animated animate__fadeIn bg-light-4 dark:bg-dark-4 p-4">
      <LoaderApp class="animate__animated animate__fadeIn" v-if="loading" />
      <NuxtLayout v-else :name=$layout class="w-full h-full animate__animated animate__fadeIn" />
    </div>
  </div>
</template>

<script>
import LoaderApp from "@/components/LoaderApp.vue"
import app from "@/src/configs/app"
export default {
  components: { LoaderApp },
  mixins: [app]
}
</script>