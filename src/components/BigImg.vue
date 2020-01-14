<template>
  <div id="big-img">
      <ul class="video-list">
          <li class="video" v-for="(item,index) in 5" :key="index">
                <img src="http://puui.qpic.cn/tv/0/487920242_498280/0" alt="">
                <p class="video-title">
                    挑灯斩蛇录·聊斋新ssssssssssssss番
                </p>
                <p class="video-decoration">
                    大侠斩巨蛇！斗猛虎！
                </p>
          </li>
      </ul>
      <div class='refresh'>
            <font-awesome-icon class="icon" icon="sync-alt" />
            <span>换一换</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BigImg'
}
</script>

<style lang='less' scoped>
    #big-img{
        width: 100%;
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
