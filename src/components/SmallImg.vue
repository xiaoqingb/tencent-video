<template>
  <div id="small-img">
      <ul class="video-list">
          <!-- 通过判断isBig来决定大小图 -->
          <li
          :class="{ 'video':!item.isBig && !item.isLong,
                    'largeimg':item.isBig,
                    'longimg':item.isLong}"
          v-for="item in smallVideoList"
          :key="item.id"
          @click="play()">
                <!-- 图片里包着一个标签 -->
                <div class="img-container">
                    <img :src="item.url" alt="" >
                    <span class="label" v-if="item.labelType === 0">全{{item.label}}集</span>
                    <span class="label" v-if="item.labelType === 1">更新至{{item.label}}集</span>
                    <span class="label" v-if="item.labelType === 2">{{item.label}}</span>
                    <span class="label" v-if="item.labelType === 3">{{item.label}}</span>
                </div>
                <!-- 视频名称 -->
                <p class="video-title">
                    {{item.title}}
                </p>
                <!-- 视频描述 -->
                <p class="video-decoration">
                    {{item.content}}
                </p>

          </li>
      </ul>
      <!-- 通过refresh判断是否需要添加刷新按钮 -->
      <div class='refresh' v-if="refresh">
            <font-awesome-icon class="icon" icon="sync-alt" />
            <span>换一换</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SmallImg',
    props: {
        content: Array,
        refresh: Boolean
    },
    data(){
        return{
            smallVideoList: this.content
        }
    },
    created(){
        // console.log(this.content)
    },
    methods: {
        play(){
            this.$router.push({ name: 'Play' })
        }
    }
}
</script>

<style lang='less' scoped>
    #small-img{
        width: 100%;
        .big-img{
            width: 100%;
            margin-top: 5px;
             .img-container{
                    position: relative;
                    img{
                        width: 100%;
                        height: 190px;
                    }
                    .label{
                        position: absolute;
                        bottom: 4px;
                        right: 2px;
                        padding: 2px 3px;
                        background-color:rgba(162,162,182,.5);
                        color:#fff;
                        font-size: 10px;
                        border-radius: 2px;

                    }
                }
            
            p{
                margin: 0;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .video-title{
                margin-top: 6px;
                color: #000028;
                font-size: 14px;
                line-height: 20px;
            }
            .video-decoration{
                margin-top: 4px;
                color: #a2a2b6;
                font-size: 12px;
                line-height: 18px;
            }

        }
        .video-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0;
            width: 100%;
            margin: 10px 0 0 0;
            ul{
                list-style: none;
                box-sizing: border-box;
                margin-bottom: 5px;
            }
            .video{
                list-style: none;
                width: 47%;
                box-sizing: border-box;
                margin-bottom: 5px;
                .img-container{
                    position: relative;
                    img{
                        height: 95px;
                        width: 100%;
                    }
                    .label{
                        position: absolute;
                        bottom: 4px;
                        right: 2px;
                        padding: 2px 3px;
                        background-color:rgba(162,162,182,.5);
                        color:#fff;
                        font-size: 10px;
                        border-radius: 2px;

                    }
                }
                p{
                    margin: 0;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .video-title{
                    margin-top: 6px;
                    color: #000028;
                    font-size: 14px;
                    line-height: 20px;
                }
                .video-decoration{
                    margin-top: 4px;
                    color: #a2a2b6;
                    font-size: 12px;
                    line-height: 18px;
                }
                
            }
            .largeimg{
                width: 100%;
                .img-container{
                    position: relative;
                    img{
                        height: 190px;
                        width: 100%;
                    }
                    .label{
                        position: absolute;
                        bottom: 4px;
                        right: 2px;
                        padding: 2px 3px;
                        background-color:rgba(162,162,182,.5);
                        color:#fff;
                        font-size: 10px;
                        border-radius: 2px;
                    }
                }
                p{
                    margin: 0;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .video-title{
                    margin-top: 6px;
                    color: #000028;
                    font-size: 14px;
                    line-height: 20px;
                }
                .video-decoration{
                    margin-top: 4px;
                    color: #a2a2b6;
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            .longimg{
                width: 32%;
                .img-container{
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .label{
                        position: absolute;
                        bottom: 4px;
                        right: 2px;
                        padding: 2px 3px;
                        background-color:rgba(162,162,182,.5);
                        color:#fff;
                        font-size: 10px;
                        border-radius: 2px;
                    }
                }
                p{
                    margin: 0;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .video-title{
                    margin-top: 6px;
                    color: #000028;
                    font-size: 14px;
                    line-height: 20px;
                }
                .video-decoration{
                    margin-top: 4px;
                    color: #a2a2b6;
                    font-size: 12px;
                    line-height: 18px;
                }
            }
        }
        .refresh{
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 0 10px 0;
            text-align: center;
            border-top: 1px solid rgba(204, 204, 204, 0.377);
            .icon{
                color: #ff6a30;
            }
            span{
                margin-left: 5px;
                color:#a2a2b6;
                font-size: 12px;
                vertical-align: middle;
            }
        }
    }
</style>
