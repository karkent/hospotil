<template>
  <div style="margin: 50px auto 0;">
    <el-table
      :data="this.tableData.slice((this.currPage - 1)*this.pageSize, this.currPage * this.pageSize)"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="序"
        width="50">
      </el-table-column>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="type"
        label="医废分类"
        width="150">
      </el-table-column>
      <el-table-column
        prop="kg"
        label="科室重量"
        width="80">
      </el-table-column>
      <el-table-column
        prop="peopleChange"
        label="科室交接人(科室)"
        width="10">
      </el-table-column>
      <el-table-column
        prop="roomChange"
        label="交接科室"
        width="150">
      </el-table-column>
      <el-table-column
        prop="placeNum"
        label="胎盘数量"
        width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        label="收集时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="gatherMan"
        label="收集人"
        width="100">
      </el-table-column>
      <el-table-column
        prop="code"
        label="医废带条码"
        width="300">
      </el-table-column>
      <el-table-column
        prop="boxCode"
        label="医废箱条码"
        width="300">
      </el-table-column>
      <el-table-column
        prop="floor "
        label="暂存点"
        width="150">
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next, sizes, total"
                   :page-sizes="[5, 10, 20]"
                   :page-size="pageSize"
                   :total="tableData.length"
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange">
    </el-pagination>
  </div>
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
      listData3: [{
        'item3': '1-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '2-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '3-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '4-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '5-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '6-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '7-------------------------',
        'date3': '2017-12-16'
      },{
        'item3': '8-------------------------',
        'date3': '2017-12-16'
      }],
      tableData: [],
      pageSize: 5,
      currPage: 1,
      dialogFormVisible : false,
    }
  },
  computed: {
    optionHover2 () {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
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
.seamless-warp3 {
  height: 162px;
  width: 820px;
  overflow: hidden;
  float: left;
}
</style>

