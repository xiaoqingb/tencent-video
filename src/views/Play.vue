<template>
  <div id="play">
        <header>
            <div id="header-left" @click="gobackHome">
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
        <main>
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
            <video-msg :video="videoMsg"></video-msg>
            <!-- 推荐 -->
            <div id="recomment">
                <list-title>为你推荐</list-title>
                <!-- 内容 -->
                <small-img
                :content="videoList[0]"
                :refresh="true"
                ></small-img>
            </div>
            <flower-pice :content='flowerPice'></flower-pice>
        </main>
  </div>
</template>

<script>
import AdvertisementSwiper from '@/components/AdvertisementSwiper'
import VideoMsg from './Play/VideoMsg'
import FlowerPice from './Play/FlowerPice'

import SmallImg from '@/components/SmallImg'
import ListTitle from '@/components/ListTitle'
export default {
    name: 'Play',
    components: {
        AdvertisementSwiper,
        VideoMsg,
        SmallImg,
        ListTitle,
        FlowerPice
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
                    content: '司理理白色衬衫太A了，她的腰封被别人当发带，这腰也太夸张了吧ssss'
                },
                {
                    id: 4,
                    url: '//i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg',
                    content: '看全集视频高清完整版',
                    isSquare: true
                }
            ],
            videoMsg: {
                name: '通灵妃',
                score: 7.8,
                updateTo: 36,
                count: 50,
                playCount: '1.5亿'
            },
            videoList: [
                // [
                //     {
                //         id: 0,
                //         url: 'http://puui.qpic.cn/tv/0/495569203_498280/0',
                //         title: '新世界·新剧首播',
                //         content: '孙红雷结识民国五美闯北平',
                //         labelType: 1,
                //         label: 36
                //     },
                //     {
                //         id: 1,
                //         url: 'http://puui.qpic.cn/tv/0/496546186_498280/0',
                //         title: 'Beauty小姐·宋轶剧透',
                //         content: '《庆余年2》言冰云黑化？',
                //         labelType: 1,
                //         label: 4
                //     },
                //     {
                //         id: 2,
                //         url: 'http://puui.qpic.cn/tv/0/495776747_498280/0',
                //         title: '毒战生死线2·新片首播',
                //         content: '缉毒警枪林弹雨中血拼毒贩',
                //         labelType: 2,
                //         label: '2020-01-14'
                //     },
                //     {
                //         id: 3,
                //         url: 'http://puui.qpic.cn/tv/0/496506313_498280/0',
                //         title: '吐槽大会4·还珠格格',
                //         content: '卡姆模仿容嬷嬷吐槽陈志朋',
                //         labelType: 2,
                //         label: '2020-01-04'
                //     },
                //     {
                //         id: 4,
                //         url: 'http://puui.qpic.cn/tv/0/496588494_498280/0',
                //         title: '蓬莱间✨白宇新剧',
                //         content: '原地起跳吻 迟到千年的糖'
                //     },
                //     {
                //         id: 5,
                //         url: 'http://puui.qpic.cn/tv/0/490745124_498280/0',
                //         title: '边境线之冷焰·更新',
                //         content: '张猛许志强生死决战'
                //     }
                // ]
            ],
            flowerPice: [
                {
                    id: 0,
                    time: '02:40',
                    content: '【现代版庆余年】回到现代带感商战，为南庆集团打call',
                    url: '//puui.qpic.cn/vpic/0/s30523vftij_160_90_3.jpg/0?max_age=7776000'
                },
                {
                    id: 1,
                    time: '09:43',
                    content: '《庆余年》收官：故事未尽，感恩相伴；期盼余年，与君重逢',
                    url: '//puui.qpic.cn/vpic/0/i0033gz8p9t_160_90_3.jpg/0?max_age=7776000'
                },
                {
                    id: 2,
                    time: '03:42',
                    content: '《庆余年》收官番外之倒看全剧：竟别样精彩，笑秃！',
                    url: '//puui.qpic.cn/vpic/0/n3048igrpe6_160_90_3.jpg/0?max_age=7776000'
                },
                {
                    id: 3,
                    time: '02:47',
                    content: '《庆余年》收官，用肖战《问情》回顾小言公子虐恋',
                    url: '//puui.qpic.cn/vpic/0/v3050zpwq5h_160_90_3.jpg/0?max_age=7776000'
                },
                {
                    id: 4,
                    time: '03:42',
                    content: '《庆余年》收官番外之倒看全剧：竟别样精彩，笑秃！',
                    url: '//puui.qpic.cn/vpic/0/n3048igrpe6_160_90_3.jpg/0?max_age=7776000'
                },
                {
                    id: 5,
                    time: '02:47',
                    content: '《庆余年》收官，用肖战《问情》回顾小言公子虐恋',
                    url: '//puui.qpic.cn/vpic/0/v3050zpwq5h_160_90_3.jpg/0?max_age=7776000'
                }
            ]
        }
    },
    methods: {
        gobackHome(){
            this.$router.push({ name: 'Select' })
        },
        getData(){
            this.axios.get('https://www.shuipingguo.com/getvideo/?type=1')
                .then((response) => {
                    this.videoList[0] = response.data.data[2].list
                    console.log(this.videoList)
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
    created(){
        this.getData()
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
    #recomment{
        padding: 0 10px;
    }
</style>
