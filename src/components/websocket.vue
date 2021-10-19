<template>
  <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp">
    <div class="item">
      <a v-for="item in listData">
        <span class="title" v-text="item.title"></span>
        <span class="date" v-text="item.date"></span>
      </a>
    </div>
  </vue-seamless-scroll>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'j-carousel',
  components: {
    vueSeamlessScroll
  },
  data () {
    return {
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '2017-12-16'
      }]
    }
  },
  computed: {
    optionHover () {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 0, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000,// 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  mounted () {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 方法集合
  methods: {
  },

}
</script>
<style lang='less' scoped>
.seamless-warp {
  height: 225px;
  overflow: hidden;
}
.item{
  width: auto;
}
</style>
