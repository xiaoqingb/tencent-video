<template>
  <div id="flower-pice">
    <swiper id="swiper-container" :options="swiperOption">
      <swiper-slide class="slide-item" v-for="item in content" :key="item.id">
        <div class="img-container">
            <img
            :src="item.url"
            class='rectangle'>
            <span class="time">{{item.time}}</span>
        </div>
        <p>{{item.content}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'FlowerPice',
    props: {
        content: Array
    },
    data() {
        return {
            swiperOption: {
                freeMode: true,
                slidesPerView: 2,
                freeModeMomentum: false
            }
        }
    }
}
</script>

<style lang='less' scoped>

#flower-pice{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(#fff, #eaebec);
    #swiper-container{
        width: 100%;
        box-sizing: border-box;
        padding: 0 1px;
        height: 100%;
        .slide-item{
            width: 140px !important;
            box-sizing: border-box;
            padding: 5px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
          .rectangle{
            width: 85px;
            height: 48px;
            border-radius: 5px;
          }
          .img-container{
              position: relative;
              img{
                  width: 100%;
                  height: 75px;
              }
             .time{
                position: absolute;
                bottom: 2px;
                right: 4px;
                font-size: 14px;
                color: #fff;
            }
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
        }
       
    }
}
</style>
