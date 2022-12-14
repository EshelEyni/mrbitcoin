import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Charts from '../views/Charts.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/contact',
      component: Contacts
    },
    {
      path: '/contact/:_id',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      component: ContactEdit
    },
    {
      path: '/charts',
      component: Charts
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
