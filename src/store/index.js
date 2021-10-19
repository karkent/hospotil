import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  state:{
    userName:"",
  },
  mutations:{
    getUserName(state,userName){
        state.userName = userName
    },
    getToke(state,token){
        state.tkoen = token
    },
  },
  action:{

  },
  getters:{

  },
  modules:{

  }
})

export default store
