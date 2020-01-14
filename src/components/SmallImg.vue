<template>
  <div id="small-img">
      <div v-if="content[0].isBig"  class="big-img">
            <img :src="content[0].url" alt="">
            <p class="video-title">
                    {{content[0].title}}
            </p>
            <p class="video-decoration">
                {{content[0].content}}
            </p>
      </div>
      <ul class="video-list">
          <li class="video" v-for="item in smallVideoList" :key="item.id">
                <img :src="item.url" alt="">
                <p class="video-title">
                    {{item.title}}
                </p>
                <p class="video-decoration">
                    {{item.content}}
                </p>
          </li>
      </ul>
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
        refresh: Array
    },
    data(){
        return{
            smallVideoList: this.content[0].isBig ? this.content.slice(1, this.content.length) : this.content
        }
    },
    created(){
        console.log(this.content)
    }
}
</script>

<style lang='less' scoped>
    #small-img{
        width: 100%;
        .big-img{
            width: 100%;
            margin-top: 5px;
            img{
                width: 100%;
                height: 190px;
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
            margin: 10px 0 0 0;
            .video{
                list-style: none;
                width: 47%;
                box-sizing: border-box;
                margin-bottom: 5px;
                img{
                    height: 95px;
                    width: 100%;
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
