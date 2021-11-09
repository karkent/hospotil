<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="div_tow">
      <div style="text-align: center"><h2>后台管理系统</h2></div>
      <div class="div_three">
        <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" >
          <el-form-item prop="username" label="账号:">
            <el-input v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名" size="medium" @keyup.enter.native="submitForm('loginForm')"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码" size="medium">
              <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code" label="验证码:"><br>
            <el-row :span="24">
              <el-col :span="12">
                <el-input v-model="loginForm.code" auto-complete="off" placeholder="请输入验证码" size="" @keyup.enter.native="submitForm('loginForm')"></el-input>
              </el-col>
              <el-col :span="12">
                <div class="login-code" @click="refreshCode">
                  <!--验证码组件-->
                  <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" class="login-submit">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" class="login-submit" @click="dialogFormVisible = true">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog title="账号注册" :visible.sync="dialogFormVisible">
      <el-form  status-icon :rules="loginRules" ref="loginForm" :model="loginForm">
        <el-form-item prop="username" label="账号:">
          <el-input v-model="loginForm.username2" auto-complete="off" placeholder="请输入用户名" size="medium" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码:">
          <el-input :type="passwordType" v-model="loginForm.password2" auto-complete="off" placeholder="请输入密码" size="medium">
            <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="name" label="姓名:">
          <el-input v-model="loginForm.name" auto-complete="off" placeholder="请输入姓名" size="medium" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="callOff()">取 消</el-button>
          <el-button type="primary" @click="user_register()">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import SIdentify from './sidentify'

export default {
  name: 'userLogin',
  components: { SIdentify },
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.identifyCode !== value) {
        this.loginForm.code = ''
        this.refreshCode()
        callback(new Error('请输入正确的验证码'))
      } else {
        this.codeCheck = true
        callback()
      }
    }
    return {
      websocket: null,
      dialogFormVisible :false,
      codeCheck:false,
      imgSrc:require('../assets/back.jpg'),
      isDebugLogin: false,
      userData:'',
      loginForm: {
        username: '',
        password: '',
        code: '',
        username2: '',
        password2 : '',
        name:'',
        userId:'',
        fromId:'',
        checkType:false
      },
      user:{
        userNme:"",
        userToken:"",
      },
      identifyCodes: '123456789ZQWERTYUIKLOPASDFGHJZXCVBNM',
      identifyCode: '',
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' },
          { min: 1, max: 200, message: '长度在1-200字符之间', trigger: 'blur' },
          // { validator: isLoginName, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 100, message: '长度在1-100字符之间', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { validator: validateCode, trigger: 'blur' }
        ],
        username2: [
          { required: true, trigger: 'blur', message: '请输入用户名' },
          { min: 1, max: 200, message: '长度在1-200字符之间', trigger: 'blur' },
          // { validator: isLoginName, trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 100, message: '长度在1-100字符之间', trigger: 'blur' }
        ],
        name: [
          { required: true, trigger: 'blur', message: '请输入姓名' },
          { min: 1, max: 4, message: '长度在1-4字符之间', trigger: 'blur' },
          // { validator: isLoginName, trigger: 'blur' }
        ],
      },
      passwordType: 'password'
    }
  },
  watch: {
    isDebugLogin(v) {
      if (v) {
        this.loginForm.password = '123'
        this.refreshCode()
      }
    },
    identifyCode(v) {
      this.isDebugLogin && (this.loginForm.code = v)
    }
  },
  mounted () {
    // this.loginForm.username = localStorage.getItem("lastname")
    console.log("建立连接")
    if ("WebSocket" in window){
      this.websocket = new WebSocket(
        "ws://localhost:9901/websocket"
      );
    }else {
      console.log("不支持建立socket连接")
    }
    //连接发生错误的回调方法
    this.websocket.onerror = function() {
      console.log("未检测到服务器")
    };
    //连接成功建立的回调方法
    this.websocket.onopen = function(event) {
    };
    //接收到消息的回调方法
    var that = this;
    this.websocket.onmessage = function(event) {
      var msg = event.data.slice(0,2)

      if (msg === "id"){

        var myid = event.data.substr(2)
        that.loginForm.userId = myid
        console.log(that.loginForm.userId)

      }
      else if (msg ==="失败"){

        console.log("关闭连接")
      }
      else if (msg ==="警告"){

        var elseId = event.data.substr(2)
        console.log("你已重复登入"+elseId)
        that.$confirm('你已经登入了该账号！请联系管理员修改密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

        }).then(() => {

          that.$message({
            type: 'success',
            message: '正在强制登入',
            showClose: true
          });
          var socketMsg = { loginType:"强制登入", msg: that.loginForm.username, fromUser: that.loginForm.userId, toUser:elseId };
          that.websocket.send(JSON.stringify(socketMsg));

        }).catch(() => {

          that.$message({
            type: 'info',
            message: '已取消',
            showClose: true
          });

        });
      }else if (msg ==="成功"){

        if(that.loginForm.checkType === true){

          var socketMsg = {
            loginType:"退出", msg: that.loginForm.username, fromUser: that.loginForm.userId };
          that.websocket.send(JSON.stringify(socketMsg));
          that.$router.push({
            name: 'userMain',
            params: {userName: that.user.userName,userAcc:that.loginForm.username, userId: that.loginForm.userId, userToken: that.user.userToken}
          })
        }else {
          that.$message({
            showClose: true,
            message: '登入失败！请联系管理员',
            type: 'warning'
          });
        }
      }else if (msg ==='退出') {
        if (that.loginForm.userId === event.data.substr(2)) {
          that.websocket.close();
          that.$router.push({
            name: 'TrashMainV',
            params:{}
          })
        }
      }
      // console.log(that.loginForm.userId+"******************")
    };
    //连接关闭的回调方法
    this.websocket.onclose = function() {
      that.$message({
        type: 'info',
        message: '连接失效请刷新界面',
      });

    };
    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function() {
      this.websocket.close();
    };
  },
  methods: {
    leaveConfirm (e) {
      var socketMsg = { loginType:"退出", msg: this.fromUser.username, fromUser: this.fromUser.userId,  };
      this.websocket.send(JSON.stringify(socketMsg));
      window.localStorage.setItem("lastname", this.loginForm.username);
      e = e || window.event
      if (e) {
        e.returnValue = '关闭提示'
      }
      return '关闭提示'
    },
    updateRecord (e) {
      e = e || window.event
      if (e) {
        e.returnValue = '关闭提示'
      }
      return '关闭提示'
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ]
      }
    },
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    submitForm() {
      var socket = {message:this.loginForm.username}
      if (this.codeCheck === true&&this.loginForm.username!==''&&this.loginForm.password!==''){
        var LMsg = {passWord:this.loginForm.password,userName:this.loginForm.username}
        this.$axios.post("UserLogin",{
          passWord:this.loginForm.password,
          userName:this.loginForm.username
        }).then(response=>{
          if (response.data!=='失败'){
            console.log(response.data)
            var obj = JSON.parse(JSON.stringify(response.data))
            for (var i=0;i<obj.length;i++){
              this.user.userToken = obj[i].token
              this.user.userName = obj[i].user_name
            };
            this.loginForm.checkType = true;
            var socketMsg = { loginType:"登入", msg: this.loginForm.username, fromUser: this.loginForm.userId };
            this.websocket.send(JSON.stringify(socketMsg));
          }else {
            this.$message({
              showClose: true,
              message: '警告，未查到用户信息',
              type: 'warning'
            });
        }
        }).catch(error => {
          console.log(error)
        })
      }else if (this.codeCheck!=true) {
        this.$message({
          showClose: true,
          message: '验证码错误！请重新输入。',
          type: 'error'
        })
      }else if (this.loginForm.password===''){
        this.$message({
          showClose: true,
          message: '错误！请输入密码。',
          type: 'error'
        })
      }else if (this.loginForm.username===''){
        this.$message({
          showClose: true,
          message: '错误！请输入账号。',
          type: 'error'
        })
      }
    },
    callOff(){
      this.loginForm.username2=''
      this.loginForm.password2=''
      this.loginForm.name=''
      this.dialogFormVisible = false
    },
    user_register(){
    //   if (this.loginForm.username2!==''&&this.loginForm.password2!==''&&this.loginForm.name!==''){
    //     this.$axios.get("register",{
    //       params:{
    //         userName:this.loginForm.userName,
    //         password:this.loginForm.password
    //       }
    //     }).then(response=>{
    //       if (response.data==='成功'){
    //
    //       }else {
    //         this.$message({
    //           showClose: true,
    //           message: '警告，未查到用户信息',
    //           type: 'warning'
    //         });
    //       }
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   }
    }
  },
  created() {
    this.refreshCode()
    window.addEventListener('beforeunload', this.leaveConfirm)
    window.addEventListener('unload', this.updateRecord)
  },
  destroyed () {
    window.removeEventListener('beforeunload', this.leaveConfirm)
    window.removeEventListener('unload', this.updateRecord)
  }
}
</script>

<style>
.login-form .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.login-form .el-form-item__label {
  line-height: 40px;
}
.login-submit.el-button {
  padding: 12px 20px;
}
</style>
<style lang="scss" scoped>
.login-form {
  padding: 10px 0;

  .el-form-item + .el-form-item {
    margin-top: 15px;
  }

  .login-code {
    cursor: pointer;

    .login-code-img {
      width: 100px;
      height: 38px;
      background-color: #eee;
      border: 1px solid #f0f0f0;
      color: #333;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
      text-indent: 2px;
      text-align: center;
    }
  }

  .login-submit {
    width: 100%;
    border: 0;
  }
}
.background {
  width: 100%;
  max-width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  max-height: 100%;
  z-index: -1;
  position: absolute;
}

.div_tow{
  max-width:600px;
  position: absolute;
  height: 550px;
  background: white;
  left:0; right:0; top:0; bottom:0;
  margin:auto;
  background: rgba(255,255,255,0.7);
  border-radius:40px;
}
.div_three{
  max-width: 400px;
  left:0; right:0; top:0; bottom:0;
  margin:auto;
}
</style>
