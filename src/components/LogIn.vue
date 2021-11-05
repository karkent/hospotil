<template>
  <el-container>
    <el-aside style="height: 959px;width: auto">
      <el-scrollbar style="height: 959px;overflow-x: hidden;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse"
                 style="height: 959px"
                 hide-timeout=600>
          <div style="width:100%;height:55px;background-color:#80ccee;">
            <div>
              <el-button round   @click="show()" id="show" v-if="isShow" style="float: right;border:none;margin-top: 7px;background-color: #80ccee">
                <i class="el-icon-arrow-left"></i>
              </el-button>
              <el-button round   @click="hide()" id="hide" v-if="isHide" style="float: right;border:none;margin-top: 7px;background-color: #80ccee">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
            <div style="position: absolute">
              <img src="../assets/dxhp.png" style="width: 50px" v-if="isShow">
            </div>
          </div>
            <el-submenu index="1" style="margin-top: 0px">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span slot="title">主页</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-c-scale-to-original"></i>
                  <router-link to="/userMain">主页</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span slot="title">医废收集</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <i class="el-icon-c-scale-to-original"></i>
                  <router-link to="/trashUp"><a @click="addTab(editableTabsValue,'医废收集列表')">医废收集列表</a></router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-download"></i>
                <span slot="title">医废入库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <i class="el-icon-caret-right"></i>
                  <router-link to="">医废入库列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-upload2"></i>
                <span slot="title">医废出库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <i class="el-icon-caret-left"></i>
                  <router-link to="">医废出库列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-warning "></i>
                <span slot="title">医废预警</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">
                  <i class="el-icon-warning-outline"></i>
                  <router-link to="">预警记录</router-link></el-menu-item>
                <el-menu-item index="5-2">
                  <i class="el-icon-warning-outline"></i>
                  <router-link to="">科室未出医废查询</router-link></el-menu-item>
                <el-menu-item index="5-3">
                  <i class="el-icon-error"></i>
                  <router-link to="">重量异常</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-aim "></i>
                <span slot="title">条码追溯</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">
                  <i class="el-icon-receiving"></i>
                  <router-link to="">条码追溯列表</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-loading "></i>
                <span slot="title">基础设定</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">
                  <i class="el-icon-office-building"></i>
                  <router-link to="">医院维护</router-link>
                </el-menu-item>
                <el-menu-item index="7-2">
                  <i class="el-icon-user"></i>
                  <router-link to="">角色维护</router-link>
                </el-menu-item>
                <el-menu-item index="7-3">
                  <i class="el-icon-s-check"></i>
                  <router-link to="">科室维护</router-link>
                </el-menu-item>
                <el-menu-item index="7-4">
                  <i class="el-icon-s-flag"></i>
                  <router-link to="">人员管理</router-link>
                </el-menu-item>
                <el-menu-item index="7-5">
                  <i class="el-icon-printer"></i>
                  <router-link to="">科室分类码打印</router-link>
                </el-menu-item>
                <el-menu-item index="7-6">
                  <i class="el-icon-takeaway-box"></i>
                  <router-link to="">暂存点管理</router-link>
                </el-menu-item>
                <el-menu-item index="7-7">
                  <i class="el-icon-menu"></i>
                  <router-link to="">组织机构管理</router-link>
                </el-menu-item>
                <el-menu-item index="7-8">
                  <i class="el-icon-brush"></i>
                  <router-link to="">自定义码打印</router-link>
                </el-menu-item>
                <el-menu-item index="7-9">
                  <i class="el-icon-s-tools"></i>
                  <router-link to="">系统设置</router-link>
                </el-menu-item>
                <el-menu-item index="7-10">
                  <i class="el-icon-s-order"></i>
                  <router-link to="">操作日志</router-link>
                </el-menu-item>
                <el-menu-item index="7-11">
                  <i class="el-icon-mobile-phone"></i>
                  <router-link to="">App异常日志</router-link>
                </el-menu-item>
                <el-menu-item index="7-12">
                  <i class="el-icon-box"></i>
                  <router-link to="">扎带管理</router-link>
                </el-menu-item>
                <el-menu-item index="7-13">
                  <i class="el-icon-truck"></i>
                  <router-link to="">周转箱管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-data-line"></i>
                <span slot="title">统计管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="8-1">
                  <i class="el-icon-collection-tag"></i>
                  <router-link to="">病区医疗废弃物信息</router-link>
                </el-menu-item>
                <el-menu-item index="8-2">
                  <i class="el-icon-files"></i>
                  <router-link to="">科室医疗废弃物信息</router-link>
                </el-menu-item>
                <el-menu-item index="8-3">
                  <i class="el-icon-share"></i>
                  <router-link to="">病区医疗废弃物报警</router-link>
                </el-menu-item>
                <el-menu-item index="8-4">
                  <i class="el-icon-s-data"></i>
                  <router-link to="">医院每日产生医废汇总</router-link>
                </el-menu-item>
                <el-menu-item index="8-5">
                  <i class="el-icon-data-board"></i>
                  <router-link to="">医废流转信息</router-link>
                </el-menu-item>
                <el-menu-item index="8-6">
                  <i class="el-icon-s-promotion"></i>
                  <router-link to="">医废日报表</router-link>
                </el-menu-item>
                <el-menu-item index="8-7">
                  <i class="el-icon-data-analysis"></i>
                  <router-link to="">医废月报表</router-link>
                </el-menu-item>
                <el-menu-item index="8-8">
                  <i class="el-icon-pie-chart"></i>
                  <router-link to="">医废年报表</router-link>
                </el-menu-item>
                <el-menu-item index="8-9">
                  <i class="el-icon-place"></i>
                  <router-link to="">溯源管理</router-link>
                </el-menu-item>
                <el-menu-item index="8-10">
                  <i class="el-icon-map-location"></i>
                  <router-link to="">室内定位</router-link>
                </el-menu-item>
                <el-menu-item index="8-11">
                  <i class="el-icon-odometer"></i>
                  <router-link to="">胎盘统计</router-link>
                </el-menu-item>
                <el-menu-item index="8-12">
                  <i class="el-icon-edit"></i>
                  <router-link to="">异常情况上报</router-link>
                </el-menu-item>
                <el-menu-item index="8-13">
                  <i class="el-icon-edit-outline"></i>
                  <router-link to="">工作量统计</router-link>
                </el-menu-item>
                <el-menu-item index="8-14">
                  <i class="el-icon-s-finance"></i>
                  <router-link to="">科室成本核算</router-link>
                </el-menu-item>
                <el-menu-item index="8-14">
                  <i class="el-icon-s-claim"></i>
                  <router-link to="">自定义报表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-folder"></i>
                <span slot="title">档案管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="9-1">
                  <i class="el-icon-folder-opened"></i>
                  <router-link to="">档案资料管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="10">
              <template slot="title">
                <i class="el-icon-paperclip"></i>
                <span slot="title">设备管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="10-1">
                  <i class="el-icon-money"></i>
                  <router-link to="">设备管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header style="height: 55px;width: 100%">
        <div>
          <div><img src="../assets/02.png" style="width: 260px"></div>
<!--          <div style=""><b style="font-size: 35px">医疗废物后台管理系统</b></div>-->
          <div style="float: right;margin-top: -40px">
          <div>
            <el-col>
              <el-dropdown>
                  <span class="el-dropdown-link"> <i class="el-icon-user" style="font-size: 25px;color: white"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">欢迎！{{this.user.userName}}</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">退出登入</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>
        </div>
          <div style="float: right;margin-top: -40px;margin-right: 50px">
            <el-col>
              <el-dropdown>
                  <span class="el-dropdown-link"> <i class="el-icon-message" style="font-size: 25px;color: white"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">未读消息</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>
          <div style="float: right;margin-top: -40px;margin-right: 100px">
            <el-col>
              <el-dropdown>
                  <span class="el-dropdown-link"> <i class="el-icon-time" style="font-size: 25px;color: white"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">待办事项</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>
          <div style="float: right;margin-top: -40px;margin-right: 150px">
            <el-col>
              <el-dropdown>
                  <span class="el-dropdown-link"><i class="el-icon-service" style="color: white;font-size: 25px"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">待办事项</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>
        </div>
      </el-header>
      <el-main>
        <div style="width: 100%;height: 845px;">
          <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
            <el-tab-pane
              key="1"
              label="主页"
              name="1"
              :closable=false >
            </el-tab-pane>
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              :closable=true >
            </el-tab-pane>
          </el-tabs>

             <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      //websocket
      websocket: null, // WebSocket对象
      //
      isCollapse: true,
      isShow:false,
      isHide:true,
      // ====
      type:false,
      editableTabsValue: '1',
      editableTabs: [],
      tabsName:[],
      tabIndex: 1,
      user:{
        userName:'',
        userAcc:'',
        userPwd:'',
        userID:'',
        token:''
      }
    };
  },
  updated () {
    // alert("!!!!!!!!!!!!!!!!!")
    // alert(this.user.userID)
    // var socketMsg = { loginType:"退出", msg: this.user.userName, fromUser: this.user.userID };
    // this.websocket.send(JSON.stringify(socketMsg));
  },
  mounted () {
    window.addEventListener("beforeunload", function(e) {
      console.log("I want to cancel");
      e.preventDefault();
      e.returnValue = "hello";
    });
    this.user.userName = this.$route.params.userName
    this.user.token = this.$route.params.userToken
    this.user.userAcc = this.$route.params.userAcc
    // this.user.userID = this.$route.params.userId
    // this.loginForm.username = localStorage.getItem("lastname")

    //webSocket
    console.log("建立连接")
    if ("WebSocket" in window) {
      this.websocket = new WebSocket(
        "ws://localhost:9901/websocket"
      );
    } else {
      console.log("不支持建立连接")
    }
    this.websocket.onerror = function () {
      console.log("未检测到服务器")
    };
    //连接成功建立的回调方法
    this.websocket.onopen = function (event) {
    };
    //接收到消息的回调方法
    var that = this;
    this.websocket.onmessage = function (event) {
      console.log(event.data+"---")
      var msg = event.data.slice(0, 2)
      if (msg === "id") {
        var myid = event.data.substr(2)
        that.user.userID = myid
        console.log(that.user.userID)

        var socketMsg = { loginType:"登入", msg: that.user.userAcc, fromUser: that.user.userID };
        that.websocket.send(JSON.stringify(socketMsg));
      } else if (msg === "失败") {
        console.log("关闭连接")
      } else if (msg === "成功") {
        that.$message({
          showClose: true,
          message: '登入成功！欢迎' + that.user.userName,
          type: 'success'
        });
      } else if (msg === '退出') {
        if (that.user.userID === event.data.substr(2)) {
          that.websocket.close();
          that.$message({
            type: 'info',
            message: '您在另外一台设备登入了此账号，请更改密码或重新登入',
          });
          that.$router.push({
            name: 'userLogin',
            params: {}
          })
        }
      }
    }
    // //连接关闭的回调方法
    // this.websocket.onclose = function() {
    //   this.$message({
    //     type: 'info',
    //     message: '连接失效请刷新界面',
    //   });
    // };
    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function() {
      this.websocket.close();
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    hide(){
      console.log("231231")
      this.isShow = true;
      this.isHide = false;
      this.isCollapse = false;

    },
    show(){
      this.isHide = true
      this.isShow = false
      this.isCollapse = true
    },
    addTab(editableTabsValue,data) {
      let tabs = this.tabsName;
      if (tabs.length<=0){
       this.addTabs(editableTabsValue,data)
      }
      tabs.forEach((tab) => {
        if (tab.name !== data) {
          this.addTabs(editableTabsValue,data)
          console.log("R@$RWDSSW")
        }
      });
    },
    addTabs(editableTabsValue,data){
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: data,
        name: newTabName,
        content: 'New Tab content'
      });
      this.tabsName.push({
        name:data
      })
      this.editableTabsValue = newTabName;
      console.log(editableTabsValue)
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
  },
}
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: 959px;
  min-height: 959px;
  max-height: 959px;

}
.el-header {
  background-color: #80ccee;
  color: #333;
}
.el-aside{
  background-color: white;
  height: 959px;
}

.el-main {
  color: #333;
  background: white;
  padding: 0px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
/*.el-tabs__nav .el-tabs__item:nth-child(1) span{*/
/*  display: none;*/
/*}*/
</style>
