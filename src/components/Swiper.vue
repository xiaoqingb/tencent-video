<template>
  <div class="wrapper">
    <swiper id="swiper-container" :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide-item" v-for="item in content" :key="item.id">
        <img :src="item.url" alt="">
        <p>{{item.content}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        content: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                autoplay: true,
                loop: true
            }
        }
    }
}
</script>

<style lang='less' scoped>

.wrapper{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    background: linear-gradient(#fff, #eaebec);
    #swiper-container{
        width: 100%;
        height: 100%;
        .swiper-pagination-bullet-active {
          width: .8rem !important;
        }
        .slide-item{
          display: flex;
          flex-direction: column;
          img{
            width: 100%;
            height: 190px;
          }
          p{
            height: 40px;
            line-height: 40px;
            width: 80%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin: 0;
          }
        }
       
    }
    /deep/.swiper-pagination{
      position: absolute;
      left:85%;
      bottom: 0;
      width: 20%;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }

}
</style>
