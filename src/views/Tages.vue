<template>
    <div>
        <div class="classfiy">
            <div v-for="(item,index) in classfiyList" class="classfiy-item" :class="{'active':classfiyActive==index}" :key="index">{{item}}</div>
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
        border:1px solid #eee;
        margin-right: 0.5rem;
        cursor: pointer;
        &.active{
            background: #3f51b5;
            color:#fff;
        }
    }
}
</style>