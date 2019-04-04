<template>
    <el-row class="article-wrapper">
        <el-col :span="24" class="article">
            <!-- <el-button type="success" class="btn">新建文章</el-button> -->
        </el-col>
        <el-button type="success" class="btn" icon="el-icon-circle-plus-outline" @click="createArticle">新建文章</el-button>
        <el-col :span="24" class="article-content">
            <el-table
                :data="articleLists"
                style='width:100%' align="center" 
                v-loading="listLoading" element-loading-text="拼命加载中"
            >
                <el-table-column type='index' width="60" ></el-table-column>
                <el-table-column prop="create_time" label="创建时间" sortable width="180"></el-table-column>
                <el-table-column prop="class_type" label="所属分类" width="180"></el-table-column>
                <el-table-column prop="article_title" label="文章标题" ></el-table-column>
                <el-table-column  min-width="180" label="操作">
                    <template slot-scope='scope'>
                        <el-button size="small" @click="read(scope.row.article_id)">查看</el-button>
                        <el-button size="small" type='primary' @click="editArticle(scope.row.article_id)">编辑</el-button>
                        <el-button size="small" type='danger' @click="remove(scope.row.article_id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                layout="prev,pager,next"
                @current-change="handleCurrentChange"
                :total="total"
                :current-page="page"
                :page-size="pageSize"
                style="float:right;padding:20px"
            ></el-pagination>
        </el-col>
    </el-row>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            listLoading:false,
            articleLists: [],
            total:0,            // 总条数
            page:1,             // 当前页数
            pageSize:10          // 当前页数的条数    
        }
    },
    created(){
        this.getArticleLists()
    },
    methods: {
        // 新建文章
        createArticle() {
            this.$router.push('/admin/articleCreate')
        },
        // 编辑
        editArticle(articleId){
            this.$router.push(`/admin/articleEdit/${articleId}`)
        },
        // 查看
        read(articleId){
            this.$router.push(`/article/${articleId}`)
        },
        // 删除
        remove(articleId){
            this.$confirm('确认要删除吗?','提醒',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type:'waring'
            })
            .then(()=>{
                this.$api.deleteOneArticle({
                    articleId
                })
                .then(({data:{code,message}}) => {
                    if(code === 200){
                        this.$notify({
                            title:'成功',
                            message:message,
                            type:'success'
                        })
                        setTimeout(()=>{
                            this.getArticleLists()
                        },this.$con.BACKLOADTIME)
                    }
                })
            })
        },
        // 分页变化
        handleCurrentChange(pages){
            this.page = pages
            this.getArticleLists()
        },
        // 获取文章列表
        getArticleLists(){
            this.listLoading = true
            this.$api.lists({
                page:this.page,
                pageSize:this.pageSize
            }).then(({data:{code,articleLists,total}})=>{
                if(code === 200){
                    setTimeout(()=>{
                        this.listLoading = false
                        this.articleLists = articleLists
                        this.total = total
                    },this.$con.BACKLOADTIME)
                    
                }
            })
        }
    },
};
</script>

<style scoped lang="scss">
.article-wrapper {
    position: relative;
    .article {
        margin-top: 20px;
    }
    .article-content {
        background: #fff;
        box-shadow: 0 4px 70px -18px #707070;
        padding: 10px 10px 0;
    }
    .btn {
        position: absolute;
        right: 10px;
        top: 8px;
    }
}
</style>