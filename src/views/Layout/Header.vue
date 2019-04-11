<template>
    <header>
        <div class="bg"></div>
        <nav>
            <div class="nav-bar">
                <div class="nav-item">
                    <router-link to="../home">主页</router-link>
                </div>
                <div class="nav-item">
                    <router-link to="../tages">标签</router-link>
                </div>
                <div class="nav-item">
                    <router-link to="../about">关于</router-link>
                </div>
            </div>
        </nav>
        <div class="title">
            <transition name="fade">
                <h1 v-if="show_title">{{mainTitle}}</h1>
            </transition>
        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                mainTitle: '',
                show_title: true
            }
        },
        computed: mapState(['headline']),
        mounted(){
            
        },
        watch:{
            headline(val){
                this.show_title = false
                setTimeout(()=>{
                    this.show_title = true
                    this.mainTitle = val
                },200)
            }
        }
    }
</script>

<style scoped lang="scss">
.fade-enter-active,.fade-leave-active{
    transition: all .6s;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
    transform: translateY(-80px)
}
nav{
    padding: 2rem;
    padding-bottom: 0;
    max-width: 1200px;
    margin: 0 auto;
}
header{
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 100%;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        height: 30rem;
        width: 100%;
        background: url(../../assets/img/img3.jpg) no-repeat center /cover;
        z-index: -1;
    }
    .nav-bar{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        padding: 0 5rem;
        .nav-item{
            font-size: 1.6rem;
            a{
                display: inline-block;
                padding: 1.2rem 1.8rem;
                color:#fff;
                transition: opacity 0.3s;
                &:hover{
                    opacity:0.7;
                }
            }
        }
    }
    .title{
        margin: auto;
        h1{
            color:#fff;
            font-weight: 400;
            font-size: 4rem;
        }
    }
}
@media screen and (max-width: 768px){
    header{
        height: 24rem;
        .bg{
            height: 24rem;
        }
        .title{
            h1{
                font-size: 3rem;
            }
        }
    }
}
@media screen and (max-width: 480px){
    header{
        height: 25rem;
        .bg{
            height: 25rem;
        }
        .nav-bar{
            justify-content: center;
            padding: 0;
            .nav-item{
                a{
                    font-size: 1.6rem;
                }
            }
        }
    }
}
</style>