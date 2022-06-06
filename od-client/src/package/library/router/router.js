// import { createRouter, createWebHashHistory } from 'vue-router'

// // import Home from '../../../routes/Home/componets/Home.vue';
// // import About from '../../../routes/About/About.vue';

// const token = '@@auth0spajs@@::kfg7ZFxXd5WcFPrcyBobplWXhevuX29G::default::openid profile email';
// const isAuthenticated = localStorage.getItem(token);

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     {
//       path: '/', name: 'index', component: Home,
//       children: [
//         {
//           path: '/home', component: Home,
//           beforeEnter: (to, from, next) => {
//             if (to.name !== 'Login' && !isAuthenticated) next({ name: 'index' });
//           }
//         }
//       ]
//     },
//     {
//       path: '/about', component: About,
//     },
//   ]
// })
// export default router


