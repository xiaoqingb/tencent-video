<template>
  <div id="search">
      <header>
          <img src="../assets/search.png" alt="">
          <div id="search-box-outer">
              <div id="search-box-inner">
                  <input type="text">
                  <p>x</p>
              </div>
          </div>
          <div id="return" @click="returnHome">
              <span>返回</span>
          </div>
      </header>
      <main>
          <div id="swiper-container">
            <swiper :options="swiperOption">
                <swiper-slide
                    class="type-item swiper-slide"
                    :class="{activehere:[typeListItem.id === 0]}"
                    v-for="typeListItem in typeList"
                    :key="typeListItem.id"
                    >
                    <span @>{{typeListItem.name}}</span>
                </swiper-slide>
            </swiper>
          </div>
          <ul>
              <li v-for="item in hotSearchList" :key="item.id">
                  <div class="item-left">
                      <div class="ranking"
                      :class="{'ranking-1':item.id === 1, 'ranking-2':item.id === 2, 'ranking-3':item.id === 3}"
                      >{{item.id}}</div>
                      <div class="name">{{item.name}}</div>
                  </div>
                  <div id="buff">
                      <div class="buff-0" v-if="item.buff ===0">
                          -
                      </div>
                      <div class="buff-1" v-else-if="item.buff ===1">
                          <font-awesome-icon icon="arrow-up" />
                      </div>
                      <div class="buff-2" v-else>
                          <font-awesome-icon icon="arrow-down" />
                      </div>
                  </div>
              </li>
          </ul>
      </main>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            swiperOption: {
                spaceBetween: 10,
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
                    label: 'Entertainment'
                },
                {
                    id: 6,
                    name: '潮音',
                    label: 'Music'
                },
                {
                    id: 7,
                    name: '游戏',
                    label: 'Game'
                },
                {
                    id: 8,
                    name: '纪录片',
                    label: 'Documentary'
                }
            ],
            hotSearchList: [
                {
                    id: 1,
                    name: '王牌对王牌 第五季',
                    buff: 1
                }, {
                    id: 2,
                    name: '三生三世枕上书',
                    buff: 2
                }, {
                    id: 3,
                    name: '下一站是幸福',
                    buff: 1
                }, {
                    id: 4,
                    name: '斗罗大陆',
                    buff: 0
                }, {
                    id: 5,
                    name: '庆余年',
                    buff: 2
                }, {
                    id: 6,
                    name: '陈情令',
                    buff: 1
                }, {
                    id: 7,
                    name: '囧妈',
                    buff: 0
                }, {
                    id: 8,
                    name: '爱情公寓',
                    buff: 0
                }, {
                    id: 9,
                    name: '吐槽大会 第四季',
                    buff: 2
                }, {
                    id: 10,
                    name: '小猪佩奇 第一季',
                    buff: 1
                }, {
                    id: 11,
                    name: '锦衣之下',
                    buff: 0
                }, {
                    id: 12,
                    name: '宠爱',
                    buff: 2
                }, {
                    id: 13,
                    name: '新世界',
                    buff: 1
                }
            ]
        }
    },
    methods: {
        returnHome(){
            this.$router.push({ name: 'Select' })
        }
    }
}
</script>

<style lang='less' scpoed>
#search{
    padding: 3px;
}
header{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 40px;
    }
    #search-box-outer{
        flex: 1;
        margin: 5px 10px;
        box-sizing: border-box;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: -webkit-gradient(linear,left top,right top,color-stop(0,#5dcf0c),color-stop(30%,#2dbe8f),color-stop(100%,#03b0ff));
        border-radius: 30px;
        #search-box-inner{
            width: 99%;
            height: 30px;
            background: #fff;
            border-radius: 33px;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                width: 88%;
                height: 25px;
                border: none;
                font-size: 22px;
                color: rgb(145, 141, 141);
                outline: none;
            }
            p{
                margin: 0;
                text-align: center;
                line-height: 23px;
                font-weight: 300;
                font-size: 20px;
                width: 25px;
                height: 25px;
                background: rgb(167, 167, 167);
                color: #fff;
                border-radius: 25px;
            }
        }
    }
    #return{
        font-size: 20px;
        color: rgb(100, 100, 100);
    }
}
main{
    #swiper{
        width: 100%;
        white-space:nowrap;
        .type-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            color: #272727;
            font-size: 17px;
            font-weight: 700;
            width: 50px;
                .undeline{
                background: #ff6022;
                height: 1.5px;
                margin-top: 5px;
                width: 12px;
            }
            span{
                width: 50px !important;
            }
        }
        .activehere{
            color: #ff6022;
        }
    }
    ul{
        list-style: none;
        padding: 0 10px;
        box-sizing: border-box;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 0;
            border-bottom: 1px solid rgb(224, 224, 224);
            .item-left{
                display: flex;
                .ranking{
                    background: #ccc;
                    padding: 4px;
                    font-size: 14px;
                    width: 20px;
                    line-height: 15px;
                    height: 20px;
                    text-align: center;
                    box-sizing: border-box;
                    margin-right: 15px;
                }
                .ranking-1{
                    background: rgb(207, 25, 25);
                    color: #fff;
                }
                .ranking-2{
                    background: rgb(247, 113, 72);
                    color: #fff;
                }
                .ranking-3{
                    background: rgb(255, 204, 65);
                    color: #fff;

                }
            }
            .buff-1,.buff-2{
                font-size: 15px;
            }
            .buff-0{
                font-size: 25px;
                height: 20px;
                line-height: 20px;
                color: #ccc;
            }
            .buff-1{
                color: rgb(231, 87, 87);
            }
            .buff-2{
                color: rgb(106, 238, 112);
            }
        }
    }
}

</style>
