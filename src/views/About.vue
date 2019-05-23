<template>
    <div>
        <div class="about">
            <p><span>emmmm....</span></p>
            <p>建此博客、记录自己的学习生活。也算是一个做笔记的地方。</p>
            <p>如果你和我一样是初窥前端的初学者，互相学习，共同进步。 </p>
            <p>如果你是一个前端的大牛，也由衷的希望你能留下些许的指教。</p>
            <div class="about-icon">
                <a href="https://github.com/Nele7"  target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-GitHub">
                        </use>
                    </svg>
                </a>
                <a href="https://weibo.com/5272191125/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" target="_blank">
                    <svg class="icon weibo" aria-hidden="true">
                        <use xlink:href="#icon-weibo"></use>
                    </svg>
                </a>
                <a @click="openWeChat">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-weixin"></use>
                    </svg>
                </a>
            </div>
            <div :class="{display:showStatus}" id="image-popup" @click="closeWeChat">
                <img src="../assets/img/img1.png" alt="" class="wechat">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showStatus:false
            }
        },
        created() {

        },
        mounted() {
            this.$store.dispatch('changeHeadLine','关于')
        },
        methods: {
            openWeChat() {
                this.showStatus = true
            },
            closeWeChat(){
                this.showStatus = false
            }
        },
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
#image-popup{
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    z-index: 999;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    transition: all .5s;
    background-color: transparent;
    &.display{
        opacity: 1;
        visibility: visible;
        transition: all .5s;
        background-color: rgba(80,80,80,.5);
        img{
            transform: scale(1);
            transition: all .5s;
        }
    }
    img{
        background-color: hsla(0,0%,82.4%,.3);
        border: .5em solid hsla(0,0%,82.4%,.5);
        width: 30rem;
        transform: scale(0.8);
        transition: all .5s;
    }
}
@media screen and (max-width: 480px){
    #image-popup>img{
        width: 25rem;
    }
}
</style>