<template>
    <div class="content-wrapper">
        <articleItem :article="articleList"></articleItem>
        <!-- 分页 -->
        <div class="pagination">

        </div>
    </div>
</template>

<script>
    import articleItem from './Layout/ArticleItem.vue'
    export default {
        data() {
            return {
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
            this.$store.dispatch('changeHeadLine','主页')
        },
        methods: {
            
        },
        components:{
            articleItem
        }
    }
</script>

<style scoped lang="scss">
.content-wrapper{
    display: flex;
    flex-direction:column;
    
}

</style>