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
                        :class="{activehere:focusList[typeListItem.id]}"
                        v-for="typeListItem in typeList"
                        :key="typeListItem.id"
                    >
                        <span @click="focusHere(typeListItem.id, typeListItem.label)">{{typeListItem.name}}</span>
                        <span :class="{undeline:focusList[typeListItem.id]}"></span>
                    </swiper-slide>
                </swiper>
            </div>
        </header>
        
        <!-- 内容 -->
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created(){
        if(this.$route.name){
            this.focusList = []
            this.typeList.map(item=>{
                if(item.label.toLowerCase() === this.$route.name.toLowerCase()){
                    this.focusList[item.id] = true
                }
            })
        }
    },
    data(){
        return{
            swiperOption: {
                spaceBetween: 20,
                slidesPerView: 6.5,
                freeMode: true,
                freeModeMomentum: false
            },
            typeList: [
                {
                    id: 0,
                    name: '精选',
                    label: 'Select'
                },
                {
                    id: 1,
                    name: '电影',
                    label: 'Movie'
                },
                {
                    id: 2,
                    name: '电视剧',
                    label: 'TV'
                },
                {
                    id: 3,
                    name: '综艺',
                    label: 'Variety'
                },
                {
                    id: 4,
                    name: '动漫',
                    label: 'Comic'
                },
                {
                    id: 5,
                    name: '娱乐',
                    label: 'Variety'
                },
                {
                    id: 6,
                    name: '潮音',
                    label: 'Documentary'
                },
                {
                    id: 7,
                    name: '游戏',
                    label: 'Variety'
                },
                {
                    id: 8,
                    name: '纪录片',
                    label: 'Documentary'
                }
            ],
            focusList: [true]
        }
    },
    methods: {
        focusHere(id, labelName){
            // 不给重复点击相同分类页面，必须自行切换刷新
            if(this.$route.name !== labelName){
                this.$router.push({ name: labelName })
                this.focusList = []
                this.focusList[id] = true
            }
        },
        search(){
            this.$router.push({ name: 'Search' })
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
    }
</style>
