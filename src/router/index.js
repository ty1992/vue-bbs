import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      components: {
        default: PostList
      }
    },
    {
      path: '/user/:name',
      name: 'UserInfo',
      components: {
        default: UserInfo
      }
    },
    {
      path: '/topic/:id?auther=:name',
      name: 'post-content',
      components: {
        default: Topic
      }
    }
  ]
})
