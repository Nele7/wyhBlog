<template>
    <div>
        about
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            this.$store.dispatch('changeHeadLine','关于')
        }
    }
</script>

<style scoped lang="scss">

</style>