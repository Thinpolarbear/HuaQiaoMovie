import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import MineRouter from './mine'
import CinemaRouter from './cinema'
import BuyRouter from './buy'

Vue.use(VueRouter)

const routes = [
  MovieRouter,
  CinemaRouter,
  MineRouter,
  BuyRouter,
  {
    path : '/*',
    redirect : '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
