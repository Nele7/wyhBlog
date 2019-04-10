<template>
    <div>
        <div class="classfiy">
            <div v-for="(item,index) in classfiyList" class="classfiy-item" 
                :class="{'active':classfiyActive==index}" 
                :key="index" @click="gets(index)">{{item.class_type}}</div>
        </div>
        <article-item :article = "articleList"></article-item>
    </div>
</template>

<script>
    import articleItem from './Layout/ArticleItem.vue'
    export default {
        data() {
            return {
                classfiyList: [],
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
            this.getClassifyLists()
            this.$store.dispatch('changeHeadLine','标签')
        },
        methods: {
            gets(ind) {
                this.classfiyActive = ind
            },
            // 获取分类列表
            getClassifyLists(){
                this.$api.classList()
                .then(({data:{code,classList}}) => {
                    this.classfiyList = classList
                    console.log(classList)
                }).catch((err) => {
                    
                });
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
    flex-wrap: wrap;
    padding: 1.5rem;
    background: #ffffff99;
    margin-bottom: 15px;
    .classfiy-item{
        padding:0 1.5rem;
        border:1px solid #edededd5;
        background: #eee;
        height: 3rem;
        line-height: 3rem;
        color: #6f7c88;
        margin: 0 0.8rem 1rem;
        cursor: pointer;
        transition: 0.5s all;
        &.active{
            background: #9797977c;
            color: #000;
        }
        &:hover{
            background: #9797977c;
            color: #000;
        }
    }
}
</style>