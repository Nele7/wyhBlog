<template>
    <div class="notfound">
        <div class="wrap">
            <h1>找不到你的路径...</h1>
            <p><a href="javascript:;" @click="$router.go(-1)">返回主页</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.notfound{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 18, 51);
    width: 100%;
    height: 100vh;
    .wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30rem;
        height: 30rem;
    }
}

</style>