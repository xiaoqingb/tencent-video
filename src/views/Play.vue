<template>
  <div id="play">
      <header>
          <div id="header-left">
              <div id="logo">
              </div>
          </div>
          <div id="header-right">
              <div class="search-btn">
                    <font-awesome-icon icon="search" />
              </div>
              <div class="login-btn">
                  登录
              </div>
              <div class="watch-entire-btn">
                  看完整版
              </div>
          </div>
      </header>
      <div id="video-container">
          <video
            src="@/video/哄女友机器.mp4"
            type="video/mp4" controls="controls"
            controlslist="nodownload"
            disablePictureInPicture="true"
            x5-video-player-type="h5"
            ></video>
      </div>
      <advertisement-swiper :content='advertiseContent'></advertisement-swiper>
  </div>
</template>

<script>
import AdvertisementSwiper from '@/components/AdvertisementSwiper.vue'
export default {
    name: 'Play',
    components: {
        AdvertisementSwiper
    },
    data(){
        return{
            advertiseContent: [
                {
                    id: 0,
                    url: '//puui.qpic.cn/vpic/0/y3045e92eey_160_90_3.jpg/0',
                    content: '《庆余年》全员海报特辑：肖战片场一本正经，看到二皇子笑了！'
                },
                {
                    id: 1,
                    url: '//puui.qpic.cn/vpic/0/b3029gvdrsu_160_90_3.jpg/0',
                    content: '庆余年：二皇子为什么经常不穿鞋？看见他母亲我终于知道了'
                },
                {
                    id: 2,
                    url: '//puui.qpic.cn/vpic/0/b3029gvdrsu_160_90_3.jpg/0',
                    content: '《庆余年》范闲“作弊”的样子，帅到掉渣了，女孩们尖叫！'
                },
                {
                    id: 3,
                    url: '//puui.qpic.cn/vpic/0/f30435mfhrg_160_90_3.jpg/0',
                    content: '司理理白色衬衫太A了，她的腰封被别人当发带，这腰也太夸张了吧'
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
    #paly{
        height: 100%;
        width: 100%;
    }
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;
        box-sizing: border-box;
        width: 100%;
        background: #2d2d2e;
        padding: 0 10px;
        #header-left{
            position: relative;
            #logo{
                width: 122px;
                height: 27px;
                background: url(//puui.qpic.cn/vupload/0/1576120792392_9vgklt9cjvk.png/0) no-repeat 0 0;
                background-size: 100%;
            }
        }
        #header-right{
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 13px;
            .search-btn{
                font-size: 15px;
            }
            .login-btn{
                margin:0 10px;
            }
            .watch-entire-btn{
                background: rgb(255, 96, 34);
                border-radius: 5px;
                padding: 3px 10px;
            }
        }
    }
    #video-container{
        width: 100%;
        height: 200px;
        background: #000;
        text-align: center;
        video{
            height: 100%;
        }
    }
</style>
