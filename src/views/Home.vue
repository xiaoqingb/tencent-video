<template>
    <div id="home">
        <!-- 顶部导航栏 -->
        <header>
            <div id='header-top'>
                <img src="//puui.qpic.cn/vupload/0/1570516378024_vr59hnsql8.png/0" alt="" srcset="">
                <div id="search-box" @click="search">
                    <p>
                        蓬莱间
                    </p>
                    <div class="search-icon">
                        <font-awesome-icon icon="search" />
                    </div>
                </div>
            </div>
            <div id='header-bottom'>
                <swiper id="swiper-container" :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide
                        class="type-item swiper-slide"
                        :class="{'activehere':focusList[index]}"
                        :data-xxx='index'
                        v-for="(typeListItem,index) in typeList"
                        :key="index"
                    >
                        <span @click="focusHere(typeListItem.id, index)">{{typeListItem.name}}</span>
                        <span :class="{undeline:focusList[index]}"></span>
                    </swiper-slide>
                </swiper>
            </div>
        </header>
        
        <!-- 内容 -->
        <main>
            <div id="select">
                <!-- 轮播图 -->
                <div class="swiper" v-if="whetherSwiper">
                    <big-swiper :content="bigFrameContent" ></big-swiper>
                </div>
                <!-- 通过一个vfor多次调用视频组件，简单干净 -->
                <ul>
                    <li v-for="(videoListItem,index) in  videoList " :key="index">
                        <list-title>{{titleList[index]}}</list-title>
                        <small-img
                        :content="videoList[index]"
                        ></small-img>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
import BigSwiper from '@/components/BigSwiper'
import SmallImg from '@/components/SmallImg'
import ListTitle from '@/components/ListTitle'

export default {
    name: 'Home',
    components: {
        BigSwiper,
        SmallImg,
        ListTitle
    },
    created(){
        this.focusHere(0)
    },
    data(){
        return{
            // 轮播图内容
            bigFrameContent: [
                {
                    id: 0,
                    url: 'http://puui.qpic.cn/tv/0/496599893_1080607/0',
                    content: '【将夜2·独播】过年相亲！请照这个标准来'
                },
                {
                    id: 1,
                    url: 'http://puui.qpic.cn/tv/0/494787305_1080607/0',
                    content: '【新世界·首播】孙红雷结识民国五美闯北平'
                },
                {
                    id: 2,
                    url: 'http://puui.qpic.cn/tv/0/496424457_1080607/0',
                    content: '【蓬莱间·更新】这是严肃的诊疗现场！真的'
                },
                {
                    id: 3,
                    url: 'http://puui.qpic.cn/tv/0/490724865_1080607/0',
                    content: '【梦回】宫中传出流言，四爷十三福晋有染？'
                },
                {
                    id: 4,
                    url: 'http://puui.qpic.cn/tv/0/496449885_1080607/0',
                    content: '【庆余年】超前看结局 第二季的伏笔你get了吗'
                }
            ],
            // 视频图片
            videoList: [
                // [
                //     {
                //         id: 0,
                //         url: 'http://puui.qpic.cn/vcover_hz_pic/0/rjae621myqca41h1574825567/0',
                //         title: '庆余年',
                //         content: '张若昀身陷棋局绝处逢生',
                //         labelType: 0,
                //         label: 46
                //     },
                //     {
                //         id: 1,
                //         url: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc00200bqxuhqe1576553844/0',
                //         title: '精英律师',
                //         content: '靳东携律政精英神仙打架',
                //         labelType: 0,
                //         label: 45
                //     }
                // ],
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
                // ],
                // [
                //     {
                //         id: 0,
                //         url: 'http://puui.qpic.cn/tv/0/491814654_498280/0',
                //         title: '斗罗大陆',
                //         content: '艰难对战！小舞受伤',
                //         isBig: true,
                //         labelType: 1,
                //         label: 10

                //     },
                //     {
                //         id: 1,
                //         url: 'http://puui.qpic.cn/tv/0/485894988_498280/0',
                //         title: '墓王之王',
                //         content: '群蛇围攻，少女被逼跳崖',
                //         labelType: 0,
                //         label: 10
                //     },
                //     {
                //         id: 2,
                //         url: 'http://puui.qpic.cn/tv/0/480056045_498280/0',
                //         title: '假面骑士零一',
                //         content: '我的强大超乎寻常',
                //         labelType: 0,
                //         label: 20
                //     }
                // ],
                // [
                //     {
                //         id: 0,
                //         url: 'http://puui.qpic.cn/tv/0/434675330_498280/0',
                //         title: '舒克贝塔',
                //         content: '朋友之间就应该这样做',
                //         labelType: 3,
                //         label: 7.8

                //     },
                //     {
                //         id: 1,
                //         url: 'http://puui.qpic.cn/tv/0/403203969_498280/0',
                //         title: '神奇的朋友_咖宝车神',
                //         content: '咖宝车神炫酷变形！',
                //         labelType: 3,
                //         label: 8.5
                //     }
                   
                // ]
                
            ],
            // 视频标题
            titleList: [
                '猜你会追',
                '重磅♨LPL春季赛：eStar拿下首胜',
                '同步剧场',
                '少儿精选剧场',
                '热门综艺☀《终极高手2》即将开播'
            ],
            swiperOption: {
                spaceBetween: 20,
                slidesPerView: 6.5,
                freeMode: true,
                freeModeMomentum: false
            },
            typeList: [
                {
                    id: 1,
                    name: '精选',
                    label: 'Select'
                },
                {
                    id: 2,
                    name: '电影',
                    label: 'Movie'
                },
                {
                    id: 3,
                    name: '电视剧',
                    label: 'TV'
                },
                {
                    id: 4,
                    name: '综艺',
                    label: 'Variety'
                },
                {
                    id: 5,
                    name: '动漫',
                    label: 'Comic'
                },
                {
                    id: 1,
                    name: '娱乐',
                    label: 'Variety'
                },
                {
                    id: 2,
                    name: '潮音',
                    label: 'Documentary'
                },
                {
                    id: 3,
                    name: '游戏',
                    label: 'Variety'
                },
                {
                    id: 4,
                    name: '纪录片',
                    label: 'Documentary'
                }
            ],
            focusList: [true],
            type: 0,
            whetherSwiper: true
        }
    },
    methods: {
        focusHere(contentId, index){
            this.focusList = []
            this.typeList.map(item=>{
                if(item.label.toLowerCase() === this.$route.name.toLowerCase()){
                    this.focusList[index] = true
                }
            })
            if(!index){
                index = 0
                contentId = 1
            }
            this.focusList[index] = true
            this.getData(contentId)
            // console.log('response')
        },
        search(){
            this.$router.push({ name: 'Search' })
        },
        getData(type){
            this.axios.get(`https://www.shuipingguo.com/getvideo/?type=${type}`)
                .then((response) => {
                    // console.log(response)
                    if(response.data.data[0].type === 5){
                        this.whetherSwiper = false
                        this.videoList = response.data.data
                    }else{
                        this.whetherSwiper = true
                        this.bigFrameContent = response.data.data[0].list
                    }
                    let xxx = response.data.data.slice(1)
                    // console.log(this.videoList)
                    xxx.forEach((element, index) => {
                        this.videoList[index] = element.list
                    })
                    // console.log(this.videoList)
                })
        }
    }
}
</script>

<style scoped lang='less'>
    #home{
        height: 100%;
        width: 100%;
        background: #ffffff;
        box-sizing: border-box;
    }
    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        padding: 10px 10px 0 10px;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        background: #ffffff;
        #header-top{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            img{
                height: 24px;
            }
            #search-box{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px 0 5px;
                width: 150px;
                height: 30px;
                background: #f6f6f7;
                border-radius: 6px;
                p{
                    margin: 0;
                    color: #b3b3b3;
                    font-size: 0.8rem;
                }
                .search-icon{
                    color: #ff7d49;
                }
            }
        }
        #header-bottom{
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            align-items: center;
            margin: 0;
            margin-top: 5px;
            padding: 0;
            overflow: hidden;
            #swiper-container{
                white-space:nowrap;
            .type-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                color: #272727;
                font-size: 17px;
                font-weight: 700;
                    .undeline{
                    background: #ff6022;
                    height: 1.5px;
                    margin-top: 5px;
                    width: 12px;
                }
            }
            .activehere{
                color: #ff6022;
            }
        }
        }
    }
    main{
        position: relative;
        top: 85px;
        #select{
            ul{
                list-style: none;
                margin: 0;
                padding: 0 10px;
                li{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        }
    }
</style>
