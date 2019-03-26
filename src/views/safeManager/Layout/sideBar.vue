<template>
    <div class="sideBar-wrapper">
        <el-menu
            default-active="/admin/articleList"
            class="el-menu-vertical-demo"
            background-color="#324057"
            text-color="#fff"
            active-text-color="rgb(32, 160, 255)"
            router
            style="height:100%">
            <el-menu-item index="/admin/articleList">
                <i class="el-icon-document"></i>
                <span slot="title">文章管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/classList">
                <i class="el-icon-menu"></i>
                <span slot="title">分类管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.sideBar-wrapper{
    height: 100%;
}
</style>