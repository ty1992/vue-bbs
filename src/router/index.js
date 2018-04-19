import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
import Topic from '@/components/Topic'
import SlideBar from '@/components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      components: {
        main: PostList
      }
    },
    {
      path: '/user/:name',
      name: 'UserInfo',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/topic/:id&auther=:name',
      name: 'PostContent',
      components: {
        main: Topic,
        sildeBar : SlideBar
      }
    }
  ]
})
