<template>
    <div class="appmain">
        <el-row class="content">
            <el-col :span="24" class="breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
						{{ item.name }}
					</el-breadcrumb-item>
				</el-breadcrumb>
            </el-col>
            <!-- 加上mode属性解决路由跳转的问题 -->
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
/*fade*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.breadcrumb{
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 70px -18px #707070;
}
</style>