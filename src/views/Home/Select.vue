<template>
    <div id="select">
        <div class="swiper">
            <big-swiper :content="bigFrameContent"></big-swiper>
        </div>
        <ul>
            <li v-for="(videoListItem,index) in  videoList " :key="index">
                <list-title>{{titleList[index]}}</list-title>
                <small-img
                :content="videoList[index]"
                :refresh="whetherRefresh[index]"
                ></small-img>
            </li>
        </ul>
    </div>
</template>

<script>
import BigSwiper from '@/components/BigSwiper'
import SmallImg from '@/components/SmallImg'
import ListTitle from '@/components/ListTitle'
export default {
    name: 'Select',
    components: {
        BigSwiper,
        SmallImg,
        ListTitle
    },
    data(){
        return{
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
            videoList: [
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/rjae621myqca41h1574825567/0',
                        title: '庆余年',
                        content: '张若昀身陷棋局绝处逢生'
                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc00200bqxuhqe1576553844/0',
                        title: '精英律师',
                        content: '靳东携律政精英神仙打架'
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/tv/0/495569203_498280/0',
                        title: '新世界·新剧首播',
                        content: '孙红雷结识民国五美闯北平'
                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/tv/0/496546186_498280/0',
                        title: 'Beauty小姐·宋轶剧透',
                        content: '《庆余年2》言冰云黑化？'
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/tv/0/495776747_498280/0',
                        title: '毒战生死线2·新片首播',
                        content: '缉毒警枪林弹雨中血拼毒贩'
                    },
                    {
                        id: 3,
                        url: 'http://puui.qpic.cn/tv/0/496506313_498280/0',
                        title: '吐槽大会4·还珠格格',
                        content: '卡姆模仿容嬷嬷吐槽陈志朋'
                    },
                    {
                        id: 4,
                        url: 'http://puui.qpic.cn/tv/0/496588494_498280/0',
                        title: '蓬莱间✨白宇新剧',
                        content: '原地起跳吻 迟到千年的糖'
                    },
                    {
                        id: 5,
                        url: 'http://puui.qpic.cn/tv/0/490745124_498280/0',
                        title: '边境线之冷焰·更新',
                        content: '张猛许志强生死决战'
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/tv/0/491814654_498280/0',
                        title: '斗罗大陆',
                        content: '艰难对战！小舞受伤',
                        isBig: true

                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/tv/0/485894988_498280/0',
                        title: '墓王之王',
                        content: '群蛇围攻，少女被逼跳崖'
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/tv/0/480056045_498280/0',
                        title: '假面骑士零一',
                        content: '我的强大超乎寻常'
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/tv/0/434675330_498280/0',
                        title: '舒克贝塔',
                        content: '朋友之间就应该这样做'

                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/tv/0/403203969_498280/0',
                        title: '神奇的朋友_咖宝车神',
                        content: '咖宝车神炫酷变形！'
                    }
                   
                ]
                
            ],
            titleList: [
                '猜你会追',
                '重磅♨LPL春季赛：eStar拿下首胜',
                '同步剧场',
                '少儿精选剧场',
                '热门综艺☀《终极高手2》即将开播'
            ],
            whetherRefresh: [
                false, true, false, true
            ]
        }
    }
}
</script>

<style lang='less' scoped>
    #select{
        ul{
            list-style: none;
            margin: 0;
            padding: 0 10px;
        }
    }
</style>
