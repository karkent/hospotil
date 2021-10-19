<template>
  <el-scrollbar style="height: 100%">
    <div style="width: 1805px;height: auto">
      <div style="width:480px;height: auto;float: right;">
        <div id="kiki" style="width: 470px;height: 300px;background-color: #dff0fb;border-radius:10px"></div>
        <div id="histogram" style="width: 470px;height: 328px;margin-top: 20px;background-color: #dff0fb;border-radius:10px"></div>
        <div id="luci" style="width: 470px;height: 162px;margin: 20px 0 auto ;background-color: #dff0fb;border-radius:10px;">
          <div>
            <b style="font-size: 17px;float: left">人员收集信息</b>
            <div style="width: 100%;height: 90%;float: left;margin-top: 30px;margin-left: -102px">
              &ensp;&ensp;<b>收集时间</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <b>收集重量</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <b>收集人员</b>
            </div>
            <div id="box2">
              <div
                id="con2"
                ref="con2"
                :class="{anims:animates==true}"
                @mouseleave="mLeave2"
                @mouseenter="mEnter2"
              >
                <p
                  v-for="(data, index) in data"
                  :key="index">
                  <span style="margin-left: 15px;color: #828282"> {{data.time}}</span>
                  <span style="float: right;margin-right: 220px;color: #4775d1">{{data.kg}}</span>
                  <span style="float: right;margin-right: 15px;color: #4775d1;margin-top: -10px">{{data.uName}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width:480px;height: auto;float: right">
        <div id="nono" style="width: 450px;height: 300px;background-color: #dff0fb;border-radius:10px"></div>
        <div id="move" style="width: 450px;height: 328px;margin-top: 20px;background-color: #dff0fb;border-radius:10px"></div>
        <div style="width: 450px;height: 162px;margin-top: 20px;background-color: #dff0fb;border-radius:10px">
          <b style="font-size: 17px;float: left">科室收集信息</b>
          <div style="width: 100%;float: left;margin-top: 30px;margin-left: -102px">
            &ensp;&ensp;<b>科室</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <b>重量</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <b>收集时间</b>
          </div>
          <div id="box">
            <div
              id="con1"
              ref="con1"
              :class="{anim:animate==true}"
              @mouseleave="mLeave"
              @mouseenter="mEnter">
              <p v-for="(item, index) in items" :key="index">
                <span style="margin-left: 15px;color: #828282"> {{item.name}}</span>
                <span style="float: right;margin-right: 220px;color: #4775d1">{{item.kg}}</span>
                <span style="float: right;margin-right: 15px;color: #4775d1;margin-top: -10px">{{item.uName}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style="min-width: 820px;height: auto;float: left;">
        <div id="sun" style="width: 820px;height: 650px;background-color: #dff0fb;border-radius:10px"></div>
      </div>
      <div style="width:820px;height: 162px;margin-top: 20px;background-color: #dff0fb;border-radius:10px;float: left">
        <div>
          <div style="width: 150px;height: 150px;background-color: #2c3e50;margin-top: 6px;border-radius: 10px;margin-left: 10px;float: left"></div>
          <div style="width: 150px;height: 150px;background-color: #2c3e50;margin-top: 6px;border-radius: 10px;margin-left: 12px;float: left"></div>
          <div style="width: 150px;height: 150px;background-color: #2c3e50;margin-top: 6px;border-radius: 10px;margin-left: 12px;float: left"></div>
          <div style="width: 150px;height: 150px;background-color: #2c3e50;margin-top: 6px;border-radius: 10px;margin-left: 12px;float: left"></div>
          <div style="width: 150px;height: 150px;background-color: #2c3e50;margin-top: 6px;border-radius: 10px;margin-left: 12px;float: left"></div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>


<script>
import * as echarts from 'echarts'
export default {
  name: 'userMain',
  data() {
    return {
      charts: "",
      opinion: ["传染性", "损伤性","病理性","化学性","药物性"],
      animate: false,
      items: [
        // 消息列表对应的数组
        {name:"眼科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"耳鼻喉",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"内科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"外科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"肿瘤内科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"骨科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"血液科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"老年脑病科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"神经内科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"神经外科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
        {name:"呼吸科",kg:"15.6kg",uName:"2021-5-24 8:29:11"},
      ],
      animates: false,
      data: [
        // 消息列表对应的数组
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
        {time:"2021-5-24 8:29:11",kg:"15.6kg",uName:"赵子星"},
      ]
    }
  },
  mounted () {
    this.timer1 = setInterval(this.scroll, 2000)
    this.timer2 = setInterval(this.scrolls, 2500)
    const myChart1 = echarts.init(document.getElementById('histogram'))
    myChart1.setOption({
      grid:{
        left:'13%',
        right:'13%',
        bottom:'6%',
      },
      title: {
        text: '出入库情况',
        subtext: '2021/1/1-2021/1/7',
        left: 'left'
      },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: true },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['医废收集', 'Precipitation', '医废出库']
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 1400,
            interval: 300,
            axisLabel: {
              formatter: '{value} kg'
            }
          },
          {
            type: 'value',
            min: 0,
            max: 1400,
            interval: 300,
            axisLabel: {
              formatter: '{value} kg'
            }
          }
        ],
        series: [
          {
            name: '医废收集',
            type: 'bar',
            data: [150, 200, 380, 425, 799, 695, 859]
          },

          {
            name: '医废出库',
            type: 'line',
            yAxisIndex: 1,
            data: [150, 200, 380, 425, 799, 695, 859]
          }
        ]
    });

    const sun = echarts.init(document.getElementById('sun'))
    sun.setOption({
        title: {
          text: '医废日报表',
          subtext: '2021/01/01',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ["感染性", "损伤性","病理性","化学性",'药物性']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: []
    });

    const nono = echarts.init(document.getElementById('nono'))
    nono.setOption({
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      title: {
        text: '月医废分析',
        subtext: '2021/01/04',
        left: 'left'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        y:'bottom',
      },
      series: [
        {
          name: '占比',
          type: 'pie',
          center:['60%','50%'],
          radius: ['50%', '75%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '22',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '感染性' },
            { value: 735, name: '损伤性' },
            { value: 580, name: '病理性' },
            { value: 484, name: '化学性' },
            { value: 300, name: '药物性' }
          ]
        }
      ]
    });

    const chartDom = echarts.init(document.getElementById('move'))
    chartDom.setOption({
      title: {
        text: '近15天医废收集趋势'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.9,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#6a7985'
              },
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [10, 20, 30, 40, 30, 21, 43, 56, 67, 49, 22, 45, 34, 56, 71]
        }
      ]
    })

    const kiki = echarts.init(document.getElementById("kiki"))
    kiki.setOption({
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      title: {
        text: '日医废分析',
        subtext: '2021/01/04',
        left: 'left'
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        color: "#000000",
        orient: 'vertical',
        x: 'left',
        y:'bottom',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          center:['60%','50%'],
          radius: '75%',
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0)'
            }
          }
        }
      ]
    })
    this.$axios.post("/getDayTrash",{
    }).then(response=>{
      console.log(response.data.day)
      sun.setOption({
        xAxis:{
          data:response.data.time
        },
        series:response.data.trash
      })
      kiki.setOption({
        series:[{
          data:response.data.day
        }]
      })
    }).catch(error=>{
    })

  },
  watch: {},
  created() {

  },
  methods: {
    scroll () {
      const con1 = this.$refs.con1
      con1.style.marginTop = '-26px'
      this.animate = !this.animate
      //   在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(() => {
        this.items.push(this.items[0])
        this.items.shift()
        con1.style.marginTop = '20px'
        this.animate = !this.animate
        //   这个地方如果不把animate取反会出现消息回滚的现象，此时把ul元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 200)
    },
    mEnter () {
      clearInterval(this.timer1)
    },
    mLeave () {
      this.timer1 = setInterval(this.scroll, 1000)
    },
    scrolls () {
      const con2 = this.$refs.con2
      con2.style.marginTop = '-26px'
      this.animates = !this.animates
      //   在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(() => {
        this.data.push(this.data[0])
        this.data.shift()
        con2.style.marginTop = '0px'
        this.animates = !this.animates
        //   这个地方如果不把animates取反会出现消息回滚的现象，此时把ul元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 200)
    },
    mEnter2 () {
      clearInterval(this.timer2)
    },
    mLeave2 () {
      this.timer2 = setInterval(this.scrolls, 1000)
    }
  }
}
</script>

<style scoped>
/* // 去掉滚动条的默认样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#box {
  width: 450px;
  height: 112px;
  line-height: 10px;
  overflow: hidden;
/*//border: 1px solid red;*/
  transition: all 0.4s;
}
.anim {
  transition: all 0.4s;
}
#con1 li {
  list-style: none;
  height: 20px;
  line-height: 20px;
}
/* // 去掉滚动条的默认样式 */
#box2 {
  width: 450px;
  height: 112px;
  line-height: 10px;
  overflow: hidden;
  /*//border: 1px solid red;*/
  transition: all 0.4s;
}
.anims {
  transition: all 0.4s;
}
#con2 li {
  list-style: none;
  height: 20px;
  line-height: 20px;
}
</style>
