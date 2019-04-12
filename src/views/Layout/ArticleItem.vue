<template>
    <div>
        <div class="content-list" v-loading="vloding" element-loading-text="加载中">
            <div class="content-item" v-for="(item,index) in article" :key="index">
                <div class="post-title">
                    <router-link class="text" :to="`/article/${item.class_type}/${item.article_id}`">{{item.article_title}}</router-link>
                    <a class="time">{{item.create_time}}</a>
                </div>
                <div class="post-desc">
                    {{item.article_brief}}
                </div>
                <div class="post-footer">
                    <div class="post-footer-total">
                        <a href="" >{{item.class_type}}</a>
                        <router-link :to="`/article/${item.class_type}/${item.article_id}`" class="post-more">阅读全文. . .</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['article','vloding'],
        data() {
            return {
                
            }
        },
        computed:{
            
        },
        methods:{
            
        },
        created(){
        }
    }
</script>

<style scoped lang="scss">
.content-list{
        display: flex;
        flex-direction: column;
        .content-item{
            background: hsla(0,0%,100%,0.6);
            padding: 16px 20px 0;
            transition: background 0.5s;
            margin: 0 0 3rem;
            .post-title{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                align-items: center;
                margin: 0 0 16px;
                .text{
                    flex: 1;
                    font-size: 2.5rem;
                    position: relative;
                    transition: all 0.5s;
                    color:rgb(66, 66, 66);
                    cursor: pointer;
                    &:hover{
                        transform: translateX(18px);
                        text-decoration:underline;
                    }
                }
                .time{
                    width: 160px;
                    font-size: 1.6rem;
                    padding: 0.5rem;
                    transition: all 0.5s;
                    text-align: right;
                    color: rgb(124, 124, 124);
                    &:hover{
                        background: #c8cfcf7c;
                    }
                }
            }
            .post-desc{
                // height: 6rem;
                font-size: 1.6rem;
                text-align: left;
                text-indent: 2em;
                color: #000;
                letter-spacing: .1rem;
                margin: 2rem 0;
                overflow: hidden;
            }
            .post-footer{
                display: flex;
                justify-content: flex-end;
                padding: 1rem 0;
                border-top:1px solid #ddd;
                .post-footer-total{
                    display: flex;
                    justify-content: flex-end;
                    a{
                        display: inline-block;
                        padding: 0 0.8rem;
                        background: #eee;
                        font-size: 1.6rem;
                        line-height: 3rem;
                        margin-left: 0.6rem;
                        text-align: center;
                        color:#6f7c88;
                        transition: all 0.5s;
                        &:hover{
                            background: #b6b6b67c;
                        }
                    }
                }
            }
        }
    }
@media screen and (max-width: 480px){
    .content-list{
        .content-item{
            .post-title{
                .time{
                    font-size: 1.3rem;
                }
            }
            .post-footer{
                .post-footer-total{
                    a{
                        font-size: 1.3rem
                    }
                }
            }
        }
    }
}
</style>