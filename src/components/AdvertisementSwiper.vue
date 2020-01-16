<template>
  <div id="advertisement-swiper">
    <swiper id="swiper-container" :options="swiperOption">
      <swiper-slide class="slide-item" v-for="item in content" :key="item.id">
        <img
        :src="item.url"
        :class="{'rectangle':!item.isSquare, 'square': item.isSquare}"
        alt="">
        <p>{{item.content}}</p>
        <div class="open-app-btn">
            打开
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'AdvertisementSwiper',
    props: {
        content: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    autoplay: 2000,
                    speed: 150
                },
                autoplay: true,
                loop: true
            }
        }
    }
}
</script>

<style lang='less' scoped>

#advertisement-swiper{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(#fff, #eaebec);
    #swiper-container{
        width: 100%;
        box-sizing: border-box;
        padding: 0 1px;
        height: 100%;
        /deep/.swiper-pagination-bullet-active {
            width: 1rem !important;
            background: rgb(255, 96, 34);
            border-radius: 5px;

        }
        .slide-item{
            // width: 100%;
            box-sizing: border-box;
            padding: 5px 10px;
            display: flex;
            align-items: center;
          .rectangle{
            width: 85px;
            height: 48px;
            border-radius: 5px;
          }
          .square{
            width: 48px;
            height: 48px;
            border-radius: 8px;
          }
          p{
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: start;
            flex: 1;
            font-size: 14px;
            padding: 0 5px ;
            box-sizing: border-box;
            margin: 0;
            -webkit-box-orient: vertical;
            height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
          .open-app-btn{
              color: #fff;
              background: rgb(255, 96, 34);
              border-radius: 5px;
              padding:  0 5px;
              height: 30px;
              line-height: 30px;
          }
        }
       
    }
    /deep/.swiper-pagination{
      position: absolute;
      left:35%;
      bottom: -15px;
      width: 30%;
      font-size: 10px/2;
      height: 40px;
      line-height: 40px;
       transform: scale(0.5);
    }

}
</style>
