<template>
    <div class="content-wrapper">
        <div class="home-wrapper" v-loading ="listLoading" element-loading-text="加载中">
            <articleItem :article="articleList"></articleItem>
            <!-- 分页 -->
            <div class="pagination">
                <el-pagination
                    layout="prev,pager,next"
                    @current-change="handleCurrentChange"
                    :total="total"
                    :current-page="page"
                    :page-size="pageSize"
                    style="padding:20px"
                ></el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    import articleItem from './Layout/ArticleItem.vue'
    export default {
        data() {
            return {
                articleList: [],
                listLoading: true,
                page:1,
                pageSize:6,
                total:0
            }
        },
        mounted(){
            this.$store.dispatch('changeHeadLine','主页')
            this.getArticleLists()
        },
        methods: {
            handleCurrentChange(pages){
                this.page = pages
                this.getArticleLists()
            },
            // 获取文章列表
            getArticleLists(){
                this.$api.lists({
                    page:this.page,
                    pageSize:this.pageSize
                }).then(({data:{code,articleLists,total}})=>{
                    if(code === 200){
                        this.listLoading = true
                        
                        setTimeout(()=>{
                            this.articleList = articleLists
                            this.listLoading = false
                            this.total = total
                        },1000)
                        
                    }
                })
            }
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
.pagination{
    text-align: center;
}
</style>