<template>
    <div class="wrapper">
        <v-header class="head"></v-header>
        <div class="homecon-wrapper">
            <router-view class="content"></router-view>
        </div>
        <div class="homecon-wrapper">
            <v-footer class="foot"></v-footer>
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
    transition: all .3s;
}
.faderouter-enter,.faderouter-leave-to{
    opacity: 0;
    // transform: translateY(-10px)
}
.wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    .head,.foot{
        flex:0 0 auto;
    }
    .foot{
        border-top:1px solid #ddd;
    }
    .homecon-wrapper{
        background: #eee;
        .content{
            flex: 1 0 auto;
            font-size:1.8rem;
            margin: 0 auto;
            width: 100%;
            padding: 2rem;
            padding-bottom: 0;
            max-width: 1000px;
        }
    }
    
}
@media screen and (max-width: 480px){
    .wrapper{
        .content{
            padding: 0;
        }
    }
}
</style>