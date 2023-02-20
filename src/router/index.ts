import {
  createRouter,
  createWebHistory,
  type Router
} from 'vue-router';
import routes from './routes';
import scrollBehavior from './scrollBehavior'
import beforeEach from './beforeEach';


const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});

// beforeEach(router)

export default router;
