<template>
    <div>
        <div class="classfiy">
            <div v-for="(item,index) in classfiyList" class="classfiy-item" :class="{'active':classfiyActive==index}" :key="index" @click="gets(index)">{{item}}</div>
        </div>
        <article-item :article = "articleList"></article-item>
    </div>
</template>

<script>
    import articleItem from './Layout/ArticleItem.vue'
    export default {
        data() {
            return {
                classfiyList: ['前端','js','vue'],
                classfiyActive:0,
                articleList: [
                    {
                        brief:'Promise含义Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。Promise 就是一个容器，通常是一个异步操作，从语法上来说，Promise是...',
                        classType:'前端',
                        createTime:'2019-10-4',
                        title:'es6-Promise'
                    }
                ]
            }
        },
        mounted(){
            this.$store.dispatch('changeHeadLine','标签')
        },
        methods: {
            gets(ind) {
                this.classfiyActive = ind
            }
        },
        components:{
            articleItem
        }
    }
</script>

<style scoped lang="scss">
.classfiy{
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    .classfiy-item{
        padding:0.3rem 2rem;
        border:1px solid hsla(0, 0%, 93%, 0.836);
        margin-right: 0.5rem;
        cursor: pointer;
        transition: 0.5s all;
        &.active{
            background: hsla(0, 0%, 93%, 0.836);
            color:hsla(0, 0%, 6%, 0.69);
        }
        &:hover{
            background: hsla(0, 0%, 93%, 0.836);
            color:hsla(0, 0%, 6%, 0.69);
        }
    }
}
</style>