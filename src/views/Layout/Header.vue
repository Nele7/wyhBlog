<template>
    <header>
        <div class="bg"></div>
        <nav class="nav-bar">
            <div class="nav-item">
                <router-link to="../home">主页</router-link>
            </div>
            <div class="nav-item">
                <router-link to="../tages">标签</router-link>
            </div>
            <div class="nav-item">
                <router-link to="../about">关于</router-link>
            </div>
        </nav>
        <div class="title">
            <transition name="fade">
                <h1>主页</h1>
            </transition>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
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