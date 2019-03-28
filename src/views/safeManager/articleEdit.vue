<template>
<div>
    <el-row class="article-wrapper">
        <el-form ref="articleCreate" :model="classify" :rules="createRules">
            <el-row class="input-wrapper">
                <el-col :span="24" >
                    <el-form-item label="文章标题" label-width="90px" prop="title">
                        <el-input placeholder="请在此处输入标题" v-model="classify.title"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="所属分类" label-width="90px" prop="classType">
                        <el-select placeholder="请选择">
                            <el-option v-for="(item,index) in classifyList" :key="index" v-model="classify.classType">{{item}}</el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="文章描述" label-width="90px" prop="brief">
                        <el-input placeholder="请在此处输入描述" v-model="classify.brief"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <!-- 编辑区 -->
                    <el-form-item class="show" prop="content">
                        <el-input type="textarea"  :rows="25" placeholder="请在此处编辑文章" v-model="classify.content"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <!-- 展示区 -->
                    <div style="background:#fff;margin:0 0 0 20px;height:535px;overflow-y:auto;"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" class="area">
                    <el-form-item class="show">
                        <el-button type="primary" size='small' @click="createArticle" :loading="load">{{btnText}}</el-button>
                        <el-button size='small' @click="cancle" :loading="load">取消</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-row>
</div>
</template>

<script>
    export default {
        data() {
            return {
                classifyList: ['JS','Vue','React'],
                load:false,
                btnText:'立即发布',
                classify:{
                    title:'',       // 文章标题
                    classType:'',   // 文章类别
                    brief:'',       //文章简介
                    content:'',     //文章内容
                },
                createRules:{
                    title:[
                        {required:true,message:'名称？？?',trigger:'blur'}
                    ],
                    classType:[
                        {required:true,message:'类别？？?',trigger:'blur'}
                    ],
                    brief:[
                        {required:true,message:'简介？？?',trigger:'blur'}
                    ],
                    content:[
                        {required:true,message:'内容？？？',trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            //发布或者编辑
            createArticle() {
            },
            // 取消操作
            cancle(){

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