<template>
    <div>
        <div class="classfiy">
            <div v-for="(item,index) in classfiyList" class="classfiy-item" 
                :class="{'active':classfiyActive==index}" 
                :key="index" @click="gets(index,item.class_type)">{{item.class_type}}</div>
        </div>
        <article-item :article = "articleList" v-if="articleList.length > 0"></article-item>
    </div>
</template>

<script>
    import articleItem from './Layout/ArticleItem.vue'
    export default {
        data() {
            return {
                classfiyList: [],
                classfiyActive:0,
                articleList: [],
                clickClassify:'',//点击的分类
            }
        },
        mounted(){
            this.getClassifyLists()
            this.$store.dispatch('changeHeadLine','标签')
        },
        methods: {
            gets(ind,classify) {
                this.classfiyActive = ind
                this.clickClassify = classify
                this.getClassifyArticleLists()
            },
            // 获取分类列表
            getClassifyLists(){
                this.$api.classList()
                .then(({data:{code,classList}}) => {
                    this.classfiyList = classList
                    console.log(classList)
                }).catch((err) => {});
            },
            // 根据分类获取文章列表
            getClassifyArticleLists(){
                this.$api.getClassifyArticleLists({
                    classify:this.clickClassify
                })
                .then(({data:{code,articleLists}}) => {
                    if(code === 200){
                        this.articleList = articleLists
                    }
                }).catch((err) => {});
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