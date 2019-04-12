<template>
    <div class="wrapper">
        <v-header class="head"></v-header>
        <div class="homecon-wrapper">
            <transition name="faderouter" mode="out-in">
                <router-view class="content"></router-view>
            </transition>
        </div>
        <div class="foot-wrapper">
            <v-footer></v-footer>
        </div>
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
.faderouter-enter-active,.faderouter-leave-active{
    transition: all .5s;
}
.faderouter-enter,.faderouter-leave-to{
    opacity: 0;
}
.wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    .head,.foot{
        flex:0 0 auto;
    }
    .homecon-wrapper{
        background: #eee;
        flex: 1 0 auto;
        margin: 0 auto;
        max-width: 1000px;
        font-size:1.8rem;
        width: 100%;
        padding: 2rem 2rem 0;
        box-sizing: border-box;
        transition: all 0.5s;
    }
}
@media screen and (max-width: 480px){
    .wrapper{
        .homecon-wrapper{
            padding: 0;
        }
    }
}
</style>