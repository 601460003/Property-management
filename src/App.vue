<template>
  <div id="app">
    <router-view/>
    <v-tabber v-show="$route.meta.showFooter" ></v-tabber>
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

