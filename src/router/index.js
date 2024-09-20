import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound/NotFound.vue'
import CoursePage from '@/views/CoursePage.vue'
import ChapterPage from '@/views/ChapterPage.vue'

const routes = [
  {
    path: '/',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/chapters',
    name: 'ChapterPage',
    component: ChapterPage,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
// onMounted(() => {
//   myModal.value = new bootstrap.Modal(document.getElementById("exampleModal"));
//   fetchStudents();
// });

// const handleDelete = async (data) => {
//   try {
//     await axios.delete(`${rootApi}/api/v1/users/${data.id}`);
//     list.value = list.value.filter((item) => item.id !== data.id);
//     closeModal();
//   } catch (error) {
//     console.error('Error deleting student:', error);
//   }
// };

// const openModal = (student) => {
//   seletedObject.value = student;
//   myModal.value.show();
// };

// const closeModal = () => {
//   myModal.value.hide();
// };
