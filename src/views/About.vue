<template>
    <div>
        about
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
        created() {
            axios.post('http://localhost:3009/api/admin/login',{
                name:'wangyuhan',
                password:123
            }).then((res)=>{
                console.log(res)
            })
        },
        mounted() {
            this.$store.dispatch('changeHeadLine','关于')
        }
    }
</script>

<style scoped lang="scss">

</style>