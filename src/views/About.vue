<template>
    <div>
        <div class="about">
            <p><span>emmmm....</span></p>
            <p>建此博客、记录自己的学习生活。也算是一个做笔记的地方。</p>
            <p>如果你和我一样是初窥前端的初学者，互相学习，共同进步。 </p>
            <p>如果你是一个前端的大牛，也由衷的希望你能留下些许的指教。</p>
            <div class="about-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-GitHub">
                    </use>
                </svg>
                <svg class="icon weibo" aria-hidden="true">
                    <use xlink:href="#icon-weibo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weixin"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    // import api from '../assets/js/axios'
    // import {localLogin} from '../assets/js/axios'
    export default {
        data() {
            return {
                
            }
        },
        created() {

        },
        mounted() {
            this.$store.dispatch('changeHeadLine','关于')
        }
    }
</script>

<style scoped lang="scss">
.about{
    padding:2rem;
    span{
        font-weight: bold;
    }
    p{
        line-height: 40px;
    }
}
.about-icon{
    display: flex;
    justify-content: flex-end;
    .icon{
        cursor: pointer;
    }
    .weibo{
        margin: 0 10px;
        
    }
}
</style>