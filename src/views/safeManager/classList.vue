<template>
    <el-row class="classfiy-wrapper">
        <el-col :span="24" class="classfiy">
            <!-- <el-button type="success" class="btn">新建文章</el-button> -->
        </el-col>
        <el-button type="success" class="btn" icon="el-icon-circle-plus-outline" @click="addClass">新建分类</el-button>
        <el-col :span="24" class="classfiy-content">
            <el-table
                :data="classLists"
                style='width:100%' align="center" 
                v-loading="listLoading" element-loading-text="拼命加载中"
            >
                <el-table-column type='index' width="60" ></el-table-column>
                <el-table-column prop="create_time" label="创建时间" sortable width="180"></el-table-column>
                <el-table-column prop="class_type" label="分类名称" width="180"></el-table-column>
                <el-table-column  min-width="180" label="操作">
                    <template slot-scope='scope'>
                        <el-button size="small" type='primary' @click="editClass(scope.row)">编辑</el-button>
                      <el-button size="small" type='danger' @click="remove(scope.row.class_id)">删除</el-button>
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
        <!-- 编辑 -->
        <el-dialog :title="formTitle" :visible.sync="formVisible">
            <el-form label-width="120px" ref="classifyInf" :model="classifyInf" :rules="formRule">
                <el-form-item label="分类名称" prop="class_type">
                    <el-input auto-complete='off' v-model="classifyInf.class_type"></el-input>
                </el-form-item>
                <el-form-item style="text-align:center">
                    <el-button @click="formVisible = false">取 消</el-button>
                    <!-- :loading="editLoading"  -->
                    <el-button type="primary" @click="editSubmit" :loading="editLoading">{{btnText}}</el-button>
                </el-form-item>
            </el-form>
            
          </el-dialog>
    </el-row>
</template>

<script>
import { setTimeout } from 'timers';
    export default {
        data() {
            return {
                classLists:[],
                classifyInf:{
                    class_id:0,
                    class_type:''
                },
                formRule:{
                    class_type:[{required:true,message:'名称？？',trigger: 'blur'}]
                },
                listLoading: false,
                formVisible: false, //编辑层显示状态
                formTitle: '',       //编辑标题
                btnText: '提交',
                editLoading:false,
                total:0,
                page:1,
                pageSize:6
            }
        },
        created(){
            this.getClassList()
        },
        methods: {
            // 编辑弹出层状态
            editClass() {
                this.formVisible = true;
                this.formTitle = '编辑'
            },
            // 删除
            remove(classId) {
                this.$confirm('确认要删除吗?','提醒',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'waring'
                })
                .then(()=>{
                    this.$api.deleteClass({
                        classId
                    })
                    .then(({data:{code,message}})=>{
                        if(code === 200){
                            // 删除操作
                            this.$notify({
                                title:'成功',
                                message:"删除成功",
                                type:'success'
                            })
                            // 更新列表
                            setTimeout(()=>{
                                this.getClassList()
                            },this.$con.BACKLOADTIME)
                        }
                    })
                    
                })
            },
            // 添加分类弹出层状态
            addClass(){
                this.formVisible = true;
                this.formTitle = '添加'
                this.classifyInf.class_type = ''
            },
            // 编辑操作
            editClass(row){
                this.formVisible = true;
                this.formTitle = '编辑'
                this.classifyInf.class_type = row.class_type
                this.classifyInf.class_id = row.class_id
            },
            // 分页
            handleCurrentChange(pages){
                this.page = pages
                this.getClassList()
            },
            // 新建分类 编辑分类 提交按钮
            editSubmit(){
                // 用来判断表单是否输入完善，valid为布尔类型
                this.$refs.classifyInf.validate(valid => {
                    if(valid){
                        this.btnText = "提交中"
                        this.editLoading = true
                        if(this.formTitle === '添加'){
                            // 为添加
                            this.$api.createClass({
                                classType:this.classifyInf.class_type
                            })
                            .then(({data:{code,message}})=>{
                                if(code === 200){
                                    this.$notify({
                                        title:'成功',
                                        message:message,
                                        type:'success'
                                    })
                                    this.formVisible = false
                                    this.editLoading = false
                                    // 更新列表
                                    this.getClassList()
                                }
                            })
                        }else{
                            // 为编辑
                            this.$api.editClass({
                                ...this.classifyInf
                            })
                            .then(({data:{code,message}})=>{
                                if(code === 200){
                                    this.$notify({
                                        title:'成功',
                                        message:message,
                                        type:'success'
                                    })
                                    this.formVisible = false
                                    this.editLoading = false
                                    // 更新列表
                                    this.getClassList()
                                }
                            })
                        }
                        
                    }
                })
            },
            // 获取分类列表
            getClassList(){
                this.listLoading = true
                this.$api.classList({
                    page:this.page,
                    pageSize:this.pageSize
                })
                .then(({data:{code,classList,total}}) => {
                    if(code === 200){
                        setTimeout(()=>{
                            this.listLoading = false
                            this.classLists = classList
                            this.total = total
                        },this.$con.BACKLOADTIME)
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
.classfiy-wrapper{
    position: relative;
    .classfiy{
        margin-top: 20px;
    }
    .classfiy-content{
        background: #fff;
        box-shadow: 0 4px 70px -18px #707070;
        padding: 10px 10px 0;
    }
    .btn{
        position: absolute;
        right: 10px;
        top:8px;
    }
}
</style>