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
                <el-table-column prop="createTime" label="创建时间" sortable width="180"></el-table-column>
                <el-table-column prop="classType" label="分类名称" width="180"></el-table-column>
                <el-table-column  min-width="180" label="操作">
                    <template slot-scope='scope'>
                        <el-button size="small" type='primary' @click="editClass(scope.row)">编辑</el-button>
                      <el-button size="small" type='danger' @click="remove(scope.row.classId)">删除</el-button>
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
        <!-- 编辑 -->
        <el-dialog :title="formTitle" :visible.sync="formVisible">
            <el-form label-width="120px" ref="classifyInf" :model="classifyInf" :rules="formRule">
                <el-form-item label="分类名称" prop="classType">
                  <el-input auto-complete='off' v-model="classifyInf.classType"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
              <el-button @click="formVisible = false">取 消</el-button>
              <el-button type="primary" @click="editSubmit" :loading="editLoading" >{{btnText}}</el-button>
            </div>
          </el-dialog>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                classLists:[
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
                ],
                classifyInf:{
                    classType:''
                },
                formRule:{
                    classType:[
                        {required:true,message:'名称？？',trigger: 'blur'}
                    ]
                },
                listLoading: false,
                formVisible: false, //编辑层显示状态
                formTitle: '',       //编辑标题
                btnText: '提交'
            }
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
                    // 删除操作
                    this.$notify({
                    title:'成功',
                    message:"删除成功",
                    type:'success'
                    })
                })
            },
            // 添加分类弹出层状态
            addClass(){
                this.formVisible = true;
                this.formTitle = '添加'
            },
            // 
            editSubmit(){
                // 用来判断表单是否输入完善，valid为布尔类型
                this.$refs.classifyInf.validate(valid => {
                    console.log(valid)
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