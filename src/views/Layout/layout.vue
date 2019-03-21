<template>
    <div class="wrapper">
        <v-header class="head"></v-header>
        <router-view class="content"></router-view>
        <v-footer class="foot"></v-footer>
    </div>
</template>

<script>
    import vHeader from './Header.vue'
    import vFooter from './Footer.vue'
    export default {
        components:{
            vHeader,
            vFooter,
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    .head,.foot{
      flex:0 0 auto;
    }
    .content{
        flex: 1 0 auto;
    }
}
</style>