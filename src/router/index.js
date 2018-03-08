import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/account/Login.vue'
import Shop from '../components/shop/Shop.vue'
import GoodsList from '../components/shop/goods/List.vue'
import GoodsDetail from '../components/shop/goods/detail.vue'
import OrderComplete from '../components/shop/order/Complete.vue'
import OrderPay from '../components/shop/order/Pay.vue'
import Ordersite from '../components/shop/order/site.vue'
import Shopcart from '../components/shop/shopcart/Shopcart.vue'

//配置商品路由
let goods =[
{name:'goodsList',path:'goods/list',component:GoodsList},
{name:'goodsDetail',path:'goods/detail',component:GoodsDetail},
];
//配置订单路由
let order=[
  {name:'orderComplete',path:'order/complete',component:OrderComplete},
  {name:'orderPay',path:'order/complete',component:OrderPay},
  {name:'ordersite',path:'order/complete',component:Ordersite},
]
//配置购物车路由
let shopcart=[
  {name:'shopcart',path:'shopcart',component:Shopcart}
]

export default new Router({
  routes: [
   {name:'login',path:'/login',component:Login},
   {name:'shop',path:'/',component:Shop,children:[...goods,...order,...shopcart]},
   
  ]
})
