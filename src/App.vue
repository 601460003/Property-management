<template>
  <div id="app">

        <router-view></router-view>
    <transition name="fade">
    <v-tabber v-show="$route.meta.showFooter" ></v-tabber>
    </transition>
  </div>
</template>

<script>
  import tabbers from '@/components/tabbers'
export default {
  components:{
    'v-tabber': tabbers,
  },
}
</script>
<style scoped>

</style>

