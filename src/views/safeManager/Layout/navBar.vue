<template>
    <el-row class="navBar-wrapper">
        <el-col :span="23" :push="1" class="panel-top">
            <el-col :span="19" style='font-size:26px'>
                <span style="cursor:pointer">Freeze&nbsp;<i style="color:#20a0ff">Blogs</i></span>
            </el-col>
            <el-col :span='5' class='rightbar'>
                <el-button type="text" @click="con">注销</el-button>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        methods: {
            con() {
                this.$confirm("确认退出吗?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(() => {
                    this.$store.dispatch('userLogout')
                })
                .catch(() => {});
            },
        },
    }
</script>

<style scoped lang="scss">
.navBar-wrapper{
    background: #324057;

}
.panel-top{
    height: 60px;
    line-height: 60px;
    color:#999;
}
.rightbar{
    text-align: center;
}
</style>