<template>
    <div class="container">
        <div class="login-wrapper">
            <el-form
                class="login_form"
                :model="user"
                :rules="loginRules"
                ref="user"
                label-position="left"
                label-width="0px"
                v-loading="loadingflag"
                element-loading-text="页面跳转中"
            >
                <h3 class="title">欢迎登录博客后台管理系统</h3>
                <el-form-item prop="account" class="form_item">
                    <el-input
                        type="text"
                        v-model="user.account"
                        auto-complete="off"
                        placeholder="账号"
                        class="input-number"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="checkPass" class="form_item">
                    <el-input
                        type="password"
                        v-model="user.checkPass"
                        auto-complete="off"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button
                        class="login_button"
                        type="primary"
                        style="width:100%;"
                        @click="handleSubmit"
                    >登录</el-button>
                    <!-- <el-button class="login_button" type="primary" style="width:40%;" @click="toReg">注册</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logining: false,
            user: {
                account: "",
                checkPass: ""
            },
            loginRules: {
                account: [
                    { required: true, message: "账号？？？", trigger: "blur" }
                ],
                checkPass: [
                    { required: true, message: "密码？？？", trigger: "blur" }
                ]
            },
            loadingflag: false
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.user.validate(valid => {
                if (valid) {
                    this.$store.dispatch('userLogin',this.user)
                } else {
                    // 这个else只是防止什么都没填写
                    return false;
                }
            });
        }
        // toReg(){
        //    this.$router.push({path:'/reg'})
        // }
    }
};
</script>
<style lang="scss">
.login-wrapper {
    .login_form {
        .el-input {
            display: inline-block;
            height: 47px;
            input {
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: #eee;
                height: 47px;
                caret-color: #fff;
            }
        }
        .form_item {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          color: #454545;
      }
    }
}
</style>

<style scoped lang="scss">
.container {
    width: 100%;
    min-height: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    .login-wrapper {
        position: relative;
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
        .title {
            text-align: center;
            font-weight: 700;
            color: #eee;
            font-size: 24px;
            margin: 0 auto 40px;
        }
    }
}

.el-form-item {
    text-align: center;
}
</style>