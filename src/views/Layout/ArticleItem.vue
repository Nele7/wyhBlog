<template>
    <div>
        <div class="content-list">
            <div class="content-item" v-for="(item,index) in article" :key="index">
                <div class="post-title">
                    <a class="text">{{item.title}}</a>
                    <!-- <router-link to="/article/123">{{item.title}}</router-link> -->
                    <a href="" class="time">{{item.createTime}}</a>
                </div>
                <div class="post-desc">
                    {{item.brief}}
                </div>
                <div class="post-footer">
                    <a href="">{{item.classType}}</a>
                    <a href="" class="post-more">阅读全文</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['article'],
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped lang="scss">
.content-list{
        display: flex;
        flex-direction: column;
        .content-item{
            background: hsla(0,0%,100%,0.6);
            padding: 16px 20px 0;
            border-radius: 3px;
            box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
            margin: 0 0 3rem;
            .post-time{
                margin: 0 0 10px;
                line-height: 14px;
                font-size: 13px;
                font-weight: bold;
                color: #727272;
                overflow: hidden;
            }
            .post-title{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                align-items: center;
                margin: 0 0 16px;
                .text{
                    font-size: 2.5rem;
                    position: relative;
                    &:after{
                        content:'';
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: #3f51b5;
                        transition: all 0.3s ease-in-out;
                        transform: scaleX(0)
                    }
                    &:hover:after{
                        transform: scaleX(1);

                    }
                }
                .time{
                    font-size: 1.6rem;
                    padding: 0.5rem;
                    transition: background 0.5s;
                    &:hover{
                        background: #eaecf7;
                        
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
                padding: 1rem;
                border-top:1px solid #ddd;
                a{
                    display: inline-block;
                    padding: 0 0.6rem;
                    background: #eaecf7;
                    font-size: 1.6rem;
                    line-height: 3rem;
                    margin-right: 0.6rem;
                    color:#3f51b5;
                }
                .post-more{
                    display: inline-block;
                    padding: 0 1rem;
                    text-align: center;
                    &:hover{
                        background: #eaecf7;
                    }
                }
            }
        }
    }  
</style>