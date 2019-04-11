<template>
    
        <article class="article_wrap article">
            <header>
                <div class="home_title">{{article.article_title}}</div>
                <div>
                    <p class="home_creatAt">{{article.create_time}}</p>
                </div>
            </header>
            <section class="home_main article" v-html="article.article_contentToMark">
            </section>
        </article>
   
</template>

<script>
    export default {
        data() {
            return {
                article:{}
            }
        },
        created(){
            this.getOneArticleDetail()
            console.log(this.$route.params.id)
        },
        methods: {
            getOneArticleDetail() {
                this.$api.getOneArticleDetail({
                    articleId:this.$route.params.id
                })
                .then(({data:{article,code}}) => {
                    if(code === 200){
                        this.article = article
                        console.log(this.article)
                    }
                }).catch((err) => {})
            }
        },
    }
</script>

<style scoped lang="scss">

</style>