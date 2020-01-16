<template>
  <div id="video-msg">
        <h3>
            {{video.name}}
        </h3>
        <p id="base-msg">
            <span>{{video.score}}分</span>·
            <span v-if="video.updateTo">更新至{{video.updateTo}}集</span>·
            <span>总共{{video.count}}集</span>·
            <span>{{video.playCount}}次播放</span>
        </p>
        <div id="download-like">
            <span>
                720P
            </span>
            <div>
            <font-awesome-icon class="icon"  icon="heart" />
            <font-awesome-icon class="icon" icon="download" />
            </div>
        </div>
        <h4>
            <span>剧集</span>
            <span v-if="video.updateTo">每天更新，更新至{{video.updateTo}}集</span>
            <span v-else>共{{video.count}}集</span>
        </h4>
        <swiper id="swiper-container" :options="swiperOption">
            <swiper-slide class="slide-item" v-for="(item, index) in video.updateTo?video.updateTo:video.count" :key="index">
                <span>{{index+1}}</span>
            </swiper-slide>
        </swiper>
  </div>
</template>

<script>
export default {
    name: 'VideoMsg',
    props: {
        video: Object
    },
    data(){
        return{
            swiperOption: {
                freeMode: true
            }
        }
    }
}
</script>

<style lang='less' scoped>
#video-msg{
    padding: 0 10px;
}
    #base-msg{
        font-size: 13px;
        color: #848494;
    }
    #download-like{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            border: 1px solid #ccc;
            color: #ccc;
        }
        .icon{
            font-size: 25px;
            margin-left: 15px;
        }
    }
    .swiper-container{
        .slide-item{
            width: 56px !important;
            height: 50px;
            text-align: center;
            line-height: 50px;
            background: rgba(235, 235, 235, 0.767);
            margin-right: 10px;
        }
    }
    h4{
        display: flex;
        justify-content: space-between;
        span:nth-child(2){
            color: #ccc;
            font-size: 12px;
        }
    }
</style>
