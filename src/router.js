import { createRouter, createWebHistory } from 'vue-router';
import CoachList from '@/pages/coaches/CoachList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachContact from '@/pages/coaches/CoachContact';
import CoachForm from '@/pages/coaches/CoachForm';
import RequestList from '@/pages/requests/RequestList';
import NotFound from '@/pages/error/NotFound';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachList
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [
        {
          path: 'contact',
          component: CoachContact
        }
      ]
    },
    {
      path: '/register',
      component: CoachForm
    },
    {
      path: '/requests',
      component: RequestList
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router