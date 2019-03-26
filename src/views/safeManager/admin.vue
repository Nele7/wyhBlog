<template>
    <el-row class="panel">
        <el-col :span="24">
            <nav-bar></nav-bar>
        </el-col>
        <el-row class="panel-center">
            <el-col :span="4" style="height:100%">
                <side-bar></side-bar>
            </el-col>
            <el-col :span="20" class="panel-c-c">
                <app-main></app-main>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    import {navBar, sideBar, appMain} from './Layout'
    export default {
        components:{
            navBar, sideBar, appMain
        }
    }
</script>

<style scoped lang='scss'>
.panel{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    width: 100%;
}
.panel-center{
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
}
.panel-c-c{
    position: absolute;
    top: 0px;
    right: 0;
    padding: 30px;
    bottom:0;
    background: #eee;
    overflow-y: scroll;
}
</style>