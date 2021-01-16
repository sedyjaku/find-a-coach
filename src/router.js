import { createRouter, createWebHistory } from 'vue-router';
import CoachList from '@/pages/coaches/CoachList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachContact from '@/pages/coaches/CoachContact';
import CoachForm from '@/pages/coaches/CoachForm';
import RequestList from '@/pages/requests/RequestList';
import NotFound from '@/pages/error/NotFound';
import {
  COACH_CONTACT_PATH,
  COACH_DETAIL_PATH,
  COACH_LIST_PATH,
  COACH_REGISTER_PATH, NOT_FOUND_PATH,
  ROOT_PATH, USER_MESSAGE_PATH
} from '@/constants/paths';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROOT_PATH,
      redirect: COACH_LIST_PATH
    },
    {
      path: COACH_LIST_PATH,
      component: CoachList
    },
    {
      path: COACH_DETAIL_PATH,
      component: CoachDetail,
      props: true,
      children: [
        {
          path: COACH_CONTACT_PATH,
          component: CoachContact,
          props: true,
        }
      ]
    },
    {
      path: COACH_REGISTER_PATH,
      component: CoachForm
    },
    {
      path: USER_MESSAGE_PATH,
      component: RequestList
    },
    {
      path: NOT_FOUND_PATH,
      component: NotFound
    }
  ]
});

export default router