<template>
<div>
    <el-row class="article-wrapper">
        <el-form ref="articleEdit" :model="article" :rules="createRules">
            <el-row class="input-wrapper">
                <el-col :span="24" >
                    <el-form-item label="文章标题" label-width="90px" prop="article_title">
                        <el-input placeholder="请在此处输入标题" v-model="article.article_title"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="所属分类" label-width="90px" prop="class_type">
                        <el-select placeholder="请选择" v-model="article.class_type">
                            <el-option v-for="(item,index) in classifyList" :key="index" :value="item.class_type">{{item.class_type}}</el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="文章描述" label-width="90px" prop="article_brief">
                        <el-input placeholder="请在此处输入描述" v-model="article.article_brief"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <!-- 编辑区 -->
                    <el-form-item class="show" prop="article_content">
                        <el-input type="textarea"  :rows="25" placeholder="请在此处编辑文章" v-model="article.article_content"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <!-- 展示区 -->
                    <div style="background:#fff;margin:0 0 0 20px;height:535px;overflow-y:auto;padding:10px" v-html="markedToHtml"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" class="area">
                    <el-form-item class="show">
                        <el-button type="primary" size='small' @click="editArticle" :loading="load">{{btnText}}</el-button>
                        <el-button size='small' @click="cancle" :loading="load">取消</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-row>
</div>
</template>

<script>
    import marked from 'marked'
    import hlj from 'highlight.js'
    import "highlight.js/styles/atom-one-dark.css";

    export default {
        data() {
            return {
                classifyList: [],
                load:false,
                btnText:'立即发布',
                article:{
                    article_id:'',          // 文章id
                    article_title:'',       // 文章标题
                    class_type:'',          // 文章类别
                    article_brief:'',       // 文章简介
                    article_content:'',     // 文章内容
                },
                createRules:{
                    article_title:[
                        {required:true,message:'名称？？?',trigger:'blur'}
                    ],
                    class_type:[
                        {required:true,message:'类别？？?',trigger:'blur'}
                    ],
                    article_brief:[
                        {required:true,message:'简介？？?',trigger:'blur'}
                    ],
                    article_content:[
                        {required:true,message:'内容？？？',trigger:'blur'}
                    ]
                }
            }
        },
        created(){
            this.getOneArticle()
            this.getClassList()
        },
        computed:{
            markedToHtml(){
                marked.setOptions({
                    highlight: function(code) {
                        return hlj.highlightAuto(code).value;
                    }
                });
                return marked(this.article.article_content);
            }
        },
        methods: {
            // 取消操作
            cancle(){
                this.$router.push('/admin/articleList')
            },
            // 根据id 获取某一篇文章内容
            getOneArticle(){
                this.$api.getOneArticle({
                    articleId:parseInt(this.$route.params.articleId)
                }).then(({data:{code,oneArticle}}) => {
                    this.article = oneArticle
                })
            },
            // 获取分类列表
            getClassList(){
                this.$api.classList({})
                .then(({data:{code,classList,total}}) => {
                    if(code === 200){
                        this.classifyList = classList
                    }
                })
            },
            // 编辑操作
            editArticle(){
                this.$refs.articleEdit.validate(valid => {
                    if(valid){
                        this.load = true;
                        this.btnText = "更新中"
                        this.$api.editArticle({
                            article_contentToMark: this.markedToHtml,
                            ...this.article
                        })
                        .then(({data:{code,message}}) => {
                            this.btnText = "立即更新"
                            if(code === 200){
                                this.$notify({
                                    title: '成功',
                                    message: '更新成功',
                                    type: 'success'
                                })
                                setTimeout(() => {
                                    this.$router.push('/admin/articleList')
                                }, this.$con.BACKLOADTIME)
                            }
                        })
                        .catch(err=>{})
                    }
                })
            }
              
        },
    }
</script>

<style scoped lang="scss">
.article-wrapper{
    .input-wrapper{
        margin: 65px 0 20px 0;
        box-shadow: 0 4px 70px -18px #707070;
        background: #fff;
        padding: 20px;
    }
}
.area{
    padding: 10px;
    .show{
        text-align: center
    }
}
.el-form-item{
    margin-bottom: 20px;
}
</style>