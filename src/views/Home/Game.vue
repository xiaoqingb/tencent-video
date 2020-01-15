<template>
    <div id="game">
        <!-- 轮播图 -->
        <div class="swiper">
            <big-swiper :content="bigFrameContent"></big-swiper>
        </div>
        <!-- 通过一个vfor多次调用视频组件，简单干净 -->
        <ul>
            <li v-for="(videoListItem,index) in  videoList " :key="index">
                <!-- 分类标题 -->
                <list-title>{{titleList[index]}}</list-title>
                <!-- 内容 -->
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
    name: 'Game',
    components: {
        BigSwiper,
        SmallImg,
        ListTitle
    },
    data(){
        return{
            // 轮播图内容
            bigFrameContent: [
                {
                    id: 0,
                    url: 'http://puui.qpic.cn/tv/0/495751817_1080607/0',
                    content: '【毒战生死线2】缉毒警枪林弹雨中血拼毒贩'
                },
                {
                    id: 1,
                    url: 'http://puui.qpic.cn/tv/0/491919038_1080607/0',
                    content: '【受益人·会员免费】大鹏设局“英雄救美”'
                },
                {
                    id: 2,
                    url: 'http://puui.qpic.cn/tv/0/487815824_1080607/0',
                    content: '【挑灯斩蛇录】有妖气！上古巨蛇重现人间'
                },
                {
                    id: 3,
                    url: 'http://puui.qpic.cn/tv/0/389928029_1080607/0',
                    content: '【鬼吹灯之怒晴湘西】盗大墓！破僵尸！战巨兽！'
                },
                {
                    id: 4,
                    url: 'http://puui.qpic.cn/tv/0/481929242_1080607/0',
                    content: '【大约在冬季】酸了！霍建华马思纯虐爱'
                }
            ],
            // 视频图片
            videoList: [
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/tv/0/496375489_498280/0',
                        title: '挑灯斩蛇录·聊斋新番',
                        content: '人妖合体！巨蛇疯狂吃人',
                        labelType: 3,
                        label: 7.9
                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/tv/0/491817941_498280/0',
                        title: '受益人·会员免费',
                        content: '大鹏“杀妻骗保”猛追柳岩',
                        labelType: 3,
                        label: 7.8
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/tv/0/494214669_498280/0',
                        title: '好医生',
                        content: '良医救人分秒必争',
                        labelType: 3,
                        label: 8.4
                    },
                    {
                        id: 3,
                        url: 'http://puui.qpic.cn/tv/0/494214669_498280/0',
                        title: '毒战生死线2·新片首播',
                        content: 'MC九局变缉毒警围剿毒贩',
                        labelType: 3,
                        label: 7.6
                    },
                    {
                        id: 4,
                        url: 'http://puui.qpic.cn/tv/0/496313699_498280/0',
                        title: '大约在冬季',
                        content: '霍建华撩妹神句学起来',
                        labelType: 3,
                        label: 7.8
                    },
                    {
                        id: 5,
                        url: 'http://puui.qpic.cn/tv/0/470816962_498280/0',
                        title: '我和我的祖国',
                        content: '假小子张子枫霸气打遍全班',
                        labelType: 3,
                        label: 7.7
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/eptnjnuul2vb0hx1575861891/0',
                        title: '搭错车',
                        content: '酒干倘卖无',
                        labelType: 3,
                        label: 8.8
                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/29trop8s2ipr3es1557732793/0',
                        title: '末代皇帝溥仪的传奇人生',
                        content: '末代皇帝溥仪的传奇人生',
                        labelType: 3,
                        label: 9.4
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/c4b3sc3sz8wsruz1548831891/0',
                        title: '英雄本色2',
                        content: '周润发、张国荣再战江湖',
                        labelType: 3,
                        label: 8.9
                    },
                    {
                        id: 3,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/3k0pikhlunqinuv1570507433/0',
                        title: '哈利波特3阿兹卡班的囚徒',
                        content: '“摄魂怪”初登场',
                        labelType: 3,
                        label: 9.0
                    },
                    {
                        id: 4,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/noq1qof29bwdeil1557746775/0',
                        title: '秋天的童话',
                        content: '香港经典爱情片',
                        labelType: 3,
                        label: 8.9
                    },
                    {
                        id: 5,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/x7dra43dggxthim1557801418/0',
                        title: '虎!虎!虎!',
                        content: '真实还原日均偷袭珍珠港',
                        labelType: 3,
                        label: 8.8
                    },
                    {
                        id: 6,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/cndp6wr7p8j5r6jt1444742588.jpg/0',
                        title: '纵横四海',
                        content: '周润发张国荣组神偷CP',
                        labelType: 3,
                        label: 9.2
                    },
                    {
                        id: 7,
                        url: 'http://puui.qpic.cn/vcover_hz_pic/0/zwqybzsk6m1ahnxt1451464236.jpg/0',
                        title: '背靠背，脸对脸',
                        content: '深切问诊官场炎凉',
                        labelType: 3,
                        label: 9.4
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/tv/0/496328288_1080607/0',
                        title: '法医秦明之血色婚礼',
                        content: '婚礼现场新娘遭神秘血祭',
                        isBig: true,
                        labelType: 3,
                        label: 7.7

                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/tv/0/495825670_498280/0',
                        title: '鬼吹灯之怒晴湘西',
                        content: '大墓竟藏暴虐金甲蜈蚣！',
                        labelType: 3,
                        label: 6.9
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/tv/0/496334023_498280/0',
                        title: '触不可及·美版',
                        content: '跨越种族跨越贫富的真友谊',
                        labelType: 3,
                        label: 8.8
                    }
                ],
                [
                    {
                        id: 0,
                        url: 'http://puui.qpic.cn/vcover_vt_pic/0/fccs0pg7l7cr44d1548644262/220',
                        title: '马语者',
                        content: '人与马的感情交流',
                        labelType: 3,
                        label: 8.5,
                        isLong: true

                    },
                    {
                        id: 1,
                        url: 'http://puui.qpic.cn/vcover_vt_pic/0/b6tvuhykvjzhbtq1552300970/220',
                        title: '独家新闻',
                        content: '斯嘉丽化身记者查凶案',
                        labelType: 3,
                        label: 8.2,
                        isLong: true
                    },
                    {
                        id: 2,
                        url: 'http://puui.qpic.cn/vcover_vt_pic/0/0k89cbc5x5j5q4o1572321059/220',
                        title: '超体',
                        content: '女王斯嘉丽大战崔岷植',
                        labelType: 3,
                        label: 8.4,
                        isLong: true
                    }
                   
                ]
                
            ],
            // 视频标题
            titleList: [
                '重磅热播',
                '精挑好货，不可错过',
                '首播影院❤️超燃大片刷不停',
                '这些必看高分电影，你错过了几部？',
                '92届奥斯卡提名揭晓，是时候回顾历届佳作了！'
            ],
            // 是否添加刷新按钮
            whetherRefresh: [
                true, true, false, true, true
            ]
        }
    }
}
</script>

<style lang='less' scoped>
    #game{
        ul{
            list-style: none;
            margin: 0;
            padding: 0 10px;
        }
    }
</style>
