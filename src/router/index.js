import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../components/LogIn'
import userLogin from '../components/userLogin'
import websocket from '../components/websocket'
import userMain from '../components/userMain'
import trashUp from '../components/TrashUp/out/trashUp'

Vue.use(Router)

const routes = [
  {path: '/', name: 'userLogin', component: userLogin},
  {path: '/websocket', name: 'websocket', component: websocket},
  {path: '/LogIn', name: 'LogIn', component: LogIn,
    children:[
      {path: '/userMain', name: 'userMain', component: userMain},
      {path: '/trashUp', name: 'trashUp', component: trashUp},
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: routes,
})
