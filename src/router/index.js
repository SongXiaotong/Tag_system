import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import Book from '@/components/marking/Book'
import MarkDetail from '@/components/marking/MarkDetail'
import Mark from '@/components/marking/Mark'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'book',
          name: 'book',
          component: Book
        },
        {
          path: 'book/detail',
          name: 'markdetail',
          component: MarkDetail
        },
        {
          path: 'book/mark',
          name: 'markfromchap',
          component: Mark
        }
      ]
    }
  ]
})
