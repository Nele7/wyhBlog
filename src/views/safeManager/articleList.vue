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
                <el-table-column prop="createTime" label="创建时间" sortable width="180"></el-table-column>
                <el-table-column prop="classType" label="所属分类" width="180"></el-table-column>
                <el-table-column prop="title" label="文章标题"></el-table-column>
                <el-table-column  min-width="180" label="操作">
                    <template slot-scope='scope'>
                        <el-button size="small" @click="read(scope.row.articleId)">查看</el-button>
                        <el-button size="small" type='primary' @click="editArticle(scope.row.articleId)">编辑</el-button>
                        <el-button size="small" type='danger' @click="remove(scope.row.articleId)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                layout="prev,pager,next"
                @current-change="handle"
                :total="total"
                :page-size="limit"
                style="float:right"
            ></el-pagination>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            listLoading:false,
            articleLists: [
                {
                    createTime:'2019-10-23 14:23:11',
                    classType:'方法',
                    title:'阿什坎迪'
                },
                {
                    createTime:'2019-09-22 14:23:11',
                    classType:'阿达',
                    title:'哈哈'
                },
                {
                    createTime:'2019-12-23 14:23:11',
                    classType:'好得多',
                    title:'百分比'
                },
            ]
        }
    },
    methods: {
        // 新建文章
        createArticle() {
            this.$router.push('/admin/articleCreate')
        },
        // 编辑
        editArticle(articleId){
            this.$router.push('/admin/articleEdit')
        },
        // 查看
        read(articleId){
            this.$router.push(`/article/${articleId}`)
        },
        // 删除
        remove(){
            this.$confirm('确认要删除吗?','提醒',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type:'waring'
            })
            .then(()=>{
                // 删除操作
                this.$notify({
                  title:'成功',
                  message:"删除成功",
                  type:'success'
                })
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