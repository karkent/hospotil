import Vue from 'vue'
import Router from 'vue-router'
import userLogin from '../components/userLogin'
import websocket from '../components/websocket'
import TrashMainV from '../components/TrashMainV'
import userMain from '../components/userMain'
import trashUp from '../components/TrashUp/out/trashUp'
import trashIn from '../components/TrashStorage/trashIn'

Vue.use(Router)

const routes = [
  {path: '/', name: 'userLogin', component: userLogin},
  {path: '/websocket', name: 'websocket', component: websocket},
  {path: '/TrashMainV', name: 'TrashMainV', component: TrashMainV,
    children:[
      {path: '/userMain', name: 'userMain', component: userMain},
      {path: '/trashUp', name: 'trashUp', component: trashUp},
      {path: '/trashIn', name: 'trashIn', component: trashIn},
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: routes,
})
