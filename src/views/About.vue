<template>
    <div>
        about
    </div>
</template>

<script>
    import api from '../assets/js/axios'
    // import {localLogin} from '../assets/js/axios'
    export default {
        data() {
            return {
                
            }
        },
        created() {
            api.localLogin({
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