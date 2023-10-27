import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../components/NotFound.vue'
import AdminView from '../views/AdminView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path:'/admin/login',
    name: 'login',
    component: AdminLoginView
  },
  {
    path: '/blog/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'notFound',
    component: NotFound
  }
  
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('token')
  if (to.name == 'admin' && !isAuthenticated) next({ name: 'home' })

  else next()
})


export default router
