<template>
    <div>
       <!-- 头部公共内容 -->
       <app-header></app-header>
       <!-- /头部公共内容 -->
       <!-- 主要内容 -->
        <router-view></router-view>
       <!-- /主要内容 -->
       <!-- 公共尾部 -->
       <app-footer></app-footer>
       <!-- /公共尾部 -->
    </div>
</template>

<script>
import appHeader from '../subcom/Header.vue'
import appFooter from '../subcom/Footer.vue'
export default {
  components: {
      appHeader:appHeader,
      appFooter:appFooter,
  }
};
</script>

<style scoped>

</style>