<template>
  <div>
    <div style="margin-top: -10px">
      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 18px">请选择医院:</a>
        <el-select v-model="hopValue" placeholder="请选择" size="small" style="width: 155px;">
          <el-option
            v-for="item in hop"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;
        <a style="font-size: 20px">收集时间:</a>
        <el-date-picker
          size="small"
          value-format="timestamp"
          type="datetimerange"
          v-model="time"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 20px">医废分类:</a>
        <el-select v-model="trashValue" placeholder="请选择" size="small" style="width: 155px">
          <el-option
            v-for="item in tableOne.trashType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 20px">状态:</a>
        <el-select v-model="trash" placeholder="请选择" size="small" style="width: 155px">
          <el-option
            v-for="item in tableTow.trashChooes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 20px">科室名称:</a>
        <el-select v-model="sectionValue" placeholder="请选择" size="small" style="width: 155px">
          <el-option
            v-for="item in sectionName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 18px">收集员:</a>
        <el-select v-model="collectorsValue" placeholder="请选择" size="small" style="width: 155px">
          <el-option
            v-for="item in collectors"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 18px">医废袋条码:</a>
        <el-input el-input v-model="trashCode" placeholder="请输入内容" size="small" style="width: 200px">  </el-input>
      </div>

      <div style="float: left;margin-top: 10px">
        &ensp;&ensp;<a style="font-size: 18px">是否涉疫垃圾:</a>
        <el-select v-model="value" placeholder="请选择" size="small" style="width: 155px">
          <el-option
            v-for="item in tableThree.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            style="height: 50px">
          </el-option>
        </el-select>
      </div>

      <div style="float: left;margin-top: 10px">
<!--        &ensp;&ensp;<a style="font-size: 18px">是否违规交接:</a>-->
<!--        <el-select v-model="changeError" placeholder="请选择" size="small" style="width: 155px;">-->
<!--          <el-option-->
<!--            v-for="item in tableFor.changeError"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value"-->
<!--            :disabled="item.disabled"-->
<!--            style="height: 50px">-->
<!--          </el-option>-->
<!--        </el-select>-->
      </div>

      <div style="float: left;margin-top: 5px">
       &ensp;&ensp; <el-button type="primary" icon="el-icon-search" round style="height: 40px" @click="check()">
        <a>查询</a></el-button>
       &ensp;&ensp;<el-button type="success" round style="height: 40px">打印交接单</el-button>
       &ensp;&ensp;<el-button type="success" round style="height: 40px" @click="outExcel()">导出Excel</el-button>
      </div>

    </div>

    <div>
      <el-table
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :data="this.tableData.slice((this.currPage - 1)*this.pageSize, this.currPage * this.pageSize)"
        style="width: 100%;min-height: 652px;"
        :default-sort = "{prop: 'id', order: 'ascending'}"
        @selection-change="handleSelectionChange">
        <el-table-column
          sortable
          prop="id"
          label="序"
          width="75">
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          sortable
          prop="trash_type"
          label="状态"
          width="110">
        </el-table-column>
        <el-table-column
          sortable
          prop="trash_name"
          label="医废分类"
          width="120">
        </el-table-column>
        <el-table-column
          sortable
          prop="kg"
          label="科室重量"
          width="120">
        </el-table-column>
        <el-table-column
          sortable
          prop="heid_name"
          label="科室交接人(科室)"
          width="160">
        </el-table-column>
        <el-table-column
          sortable
          prop="section_name"
          label="交接科室"
          width="160">
        </el-table-column>
        <el-table-column
          sortable
          prop="placeNum"
          label="胎盘数量"
          width="100">
        </el-table-column>
        <el-table-column
          sortable
          prop="date"
          label="收集时间"
          width="220">
        </el-table-column>
        <el-table-column
          sortable
          prop="user_name"
          label="收集人"
          width="100">
        </el-table-column>
        <el-table-column
          sortable
          prop="bag_num"
          label="医废袋条码"
          width="220">
        </el-table-column>
        <el-table-column
          sortable
          prop="box_num"
          label="医废箱条码"
          width="220">
        </el-table-column>
        <el-table-column
          sortable
          prop="floor "
          label="暂存点"
          width="140">
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next, sizes, total"
                     :page-sizes="[ 12, 20]"
                     :page-size="pageSize"
                     :total="tableData.length"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                      >
      </el-pagination>
    </div>
    <div style="float: right;margin-top: 8px">
      <div style="float: right">
        <el-button type="success" icon="el-icon-takeaway-box" round>补关联入库(箱)</el-button>
        <el-button type="success" icon="el-icon-shopping-bag-1" round>补关联入库(袋)</el-button>
        <el-button type="success" icon="el-icon-edit-outline" round>修改医废分类</el-button>
      </div>
      <div style="float: right;margin-left: 15px;margin-right: 15px">
        <el-button type="primary" icon="el-icon-price-tag" round>称重标签</el-button>
        <el-button type="success" icon="el-icon-edit" round>遗失登记</el-button>
        <el-button type="success" icon="el-icon-edit-outline" round>手工登记</el-button>
      </div>
      <div style="float: right">
        <el-button type="primary" icon="el-icon-date" round>科室医疗废物记录表</el-button>
        <el-button type="primary" icon="el-icon-refresh" round>医疗废物记录表</el-button>
        <el-button type="warning" icon="el-icon-delete-solid" round>危险废物转移联单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trashUp',
  data(){
    return{
      hopValue:'',
      hop: [{
        value: '选项1',
        label: '请选择'
      },{
        value: '第一医院',
        label: '第一医院'
      }],
      trashValue:'',
      tableOne:{
        trashType: [{
          value: '请选择',
          label: '请选择'
        },{
          value: '感染性废物',
          label: '感染性废物'
        },{
          value: '损伤性废物',
          label: '损伤性废物'
        },{
          value: '病理性废物',
          label: '病理性废物'
        },{
          value: '化学性废物',
          label: '化学性废物'
        },{
          value: '药物性废物',
          label: '药物性废物'
        },{
          value: '未污染塑料输液瓶',
          label: '未污染塑料输液瓶'
        },{
          value: '未污染塑料输液瓶(袋)',
          label: '未污染塑料输液瓶(袋)'
        },{
          value: '涉疫感染性医疗废物',
          label: '涉疫感染性医疗废物'
        },{
          value: '涉疫损伤性医疗废物',
          label: '涉疫损伤性医疗废物'
        }],
      },
      trash:'',
      tableTow:{
        trashChooes: [{
          value: '请选择',
          label: '请选择'
        },{
          value: '待出库',
          label: '待出库'
        },{
          value: '已出库',
          label: '已出库'
        },{
          value: '已入库',
          label: '已入库'
        },{
          value: '科室确认',
          label: '科室确认'
        },{
          value: '医废丢失',
          label: '医废丢失'
        }],
      },
      sectionValue:'',
      sectionName: [],
      collectorsValue:'',
      collectors: [],
      multipleSelection: [],
      value:'',
      tableThree:{
        options: [{
          value: '全部',
          label: '全部'
        },{
          value: '是',
          label: '是'
        },{
          value: '否',
          label: '否'
        }],
      },
      changeError:'',
      tableFor:{
        changeError:[{
          value: '请选择',
          label: '请选择'
        },{
          value: '是',
          label: '是'
        },{
          value: '否',
          label: '否'
        }]
      },
      trashCode:'',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setee(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      time: [],
      tableData: [],
      pageSize: 12,
      currPage: 1,
      dialogFormVisible : false,
      formLabelWidth:'120px',
    }
  },
  methods:{
    handleCurrentChange: function (cPage) {
      this.currPage = cPage
    },
    handleSizeChange: function (val) {
      this.pageSize = val
    },
    formatter(row, column) {
      return row.address;
    },
    check(){
      // console.log(this.time.toString())
      this.$axios.post("/checkTrash",{
        section_name:this.sectionValue,//
        hop:this.hopValue,
        date:this.time.toString(),//
        trash_type:this.trash,//
        bag_num:this.trashCode,//
        user_name:this.collectorsValue,//
        trashValue:this.trashValue
      }).then(response=>{
        console.log(response.data)
        this.tableData = response.data
      }).catch(error=>{
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.multipleSelection.forEach(item => {
        this.$set(item,'zdtm',"暂无")
        this.$set(item,'yq',"暂无")
      })
    },
    outExcel(){
      console.log(this.multipleSelection.length)
      console.log(this.tableData)
      this.$confirm("此操作将导出excel文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(()=>{
        this.export2Excel();
      }).catch(()=>{})
    },
    export2Excel(){
      var that = this;
      require.ensure([], () => {
        const { export_json_to_excel } = require("./Export2Excel"); //这里必须使用绝对路径，根据自己的命名和路径
        const tHeader = [
          "序",
          "状态",
          "医废分类",
          "科室重量",
          "交接人",
          "交接科室",
          "胎盘数量",
          "收集时间",
          "收集人",
          "医废条码",
          "医废箱条码",
          "暂存点",
          "扎带条码",
          "所属院区"
        ]; // 导出的表头名
        const filterVal = [
          "id",
          "trash_type",
          "trash_name",
          "kg",
          "heid_name",
          "section_name",
          "placeNum",
          "date",
          "user_name",
          "bag_num",
          "box_num",
          "floor",
          "zdtm",
          "yq"
        ]; // 导出的表头字段名
        if (that.multipleSelection.length===0){
          this.tableData.forEach(item => {
            this.$set(item,'请选择','请选择')
            this.$set(item,'yq',"暂无")
          })
          const list = that.tableData;
          // that.excelData为传入的数据
          const data = that.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '医疗废弃物报表'); // 导出的表格名称，根据需要自己命名
          // tHeader为导出Excel表头名称，`xxxxxx`即为导出Excel名称
        }else {
          const list = that.multipleSelection;
          // that.excelData为传入的数据
          const data = that.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '医疗废弃物报表'); // 导出的表格名称，根据需要自己命名
          // tHeader为导出Excel表头名称，`xxxxxx`即为导出Excel名称
        }
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + " 年 " + month + " 月 " + strDate + " 日 ";
      this.time =[new Date(year, month, strDate, 0o0, 0o0), new Date(2000, 10, 11, 10, 10)]
    }
  },
  mounted () {
    this.$axios.post("/collectList",{
    }).then(response=>{
      this.tableData = response.data.table
      this.sectionName = response.data.sectionName
      this.collectors = response.data.trashMan
      console.log(response.data)
    }).catch(error=>{
    })
    this.sectionName.forEach(item => {
      this.$set(item,'null',"请选择")
    })
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();

    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + " 年 " + month + " 月 " + strDate + " 日 ";
    // this.time =[new Date(year, month, strDate, 0o0, 0o0,0o0), new Date(year, month, strDate, 23, 59,59)]
  },
}
</script>

<style scoped>
/*>>> .el-input__inner{*/
/*  height: 35px;*/
/*}*/
/*.el-select-dropdown__item{*/
/*  line-height: 23px;*/
/*}*/
</style>
