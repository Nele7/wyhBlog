<template>
    
        <article class="article_wrap article content">
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
        mounted(){
            this.getOneArticleDetail()
            this.$store.dispatch('changeHeadLine',this.$route.params.classify)
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
.article_wrap{
    padding: 3rem;
    .home_title{
        font-size: 3rem;
        font-weight: 400;
        color: #404040;
        padding: 1rem 0;
    }
    .home_creatAt{
        font-family: Comic Sans MS,curslve,sans-serif;
        padding: .6rem 0;
        font-size: 1.8rem;
        color: #7f8c8d;
        margin: 0;
    }
}
@media screen and (max-width: 768px){
    .article_wrap{
        .home_title{
            font-size: 2.2rem;
        }
        .home_creatAt{
            font-size: 1.6rem;
        }
    }
}
@media screen and (max-width: 480px){
    .article_wrap{
        width: 100%;
        padding: 1rem 2rem;
    }
}
</style>