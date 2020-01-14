<template>
    <div id="select">
        <div class="swiper">
            <big-swiper :content="bigFrameContent"></big-swiper>
        </div>
        <big-img></big-img>
    </div>
</template>

<script>
import BigSwiper from './../../components/BigSwiper'
import BigImg from './../../components/BigImg'
export default {
    name: 'Select',
    components: {
        BigSwiper,
        BigImg
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
            ]
        }
    }
}
</script>

<style lang='less' scoped>
    .swiper{
      
    }
</style>
