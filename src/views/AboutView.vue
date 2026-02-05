<template>
  <AboutComponent />
</template>

<script>
import AboutComponent from '../components/AboutComponent.vue'
export default {
  inject: ['getToken'],
  components: {
    AboutComponent
  }
}
</script>

<style>

</style>