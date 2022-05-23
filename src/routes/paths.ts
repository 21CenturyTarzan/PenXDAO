// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_APP = '/app';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_APP = {
  root: ROOTS_APP,
  permissionDenied: path(ROOTS_APP, '/permission-denied'),
  general: {
    fund: path(ROOTS_APP, '/fund'),
    penx: path(ROOTS_APP, '/penx'),
    // ecommerce: path(ROOTS_APP, '/ecommerce'),
    // analytics: path(ROOTS_APP, '/analytics'),
    // banking: path(ROOTS_APP, '/banking'),
  },
  worker: {
    root: path(ROOTS_APP, '/worker'),
    new: path(ROOTS_APP, '/worker/new'),
    edit: (name: string) => path(ROOTS_APP, `/worker/${name}/edit`),
    demoEdit: path(ROOTS_APP, `/worker/reece-chung/edit`),
    list: path(ROOTS_APP, '/worker/list'),
    cards: path(ROOTS_APP, '/worker/cards'),
    profile: path(ROOTS_APP, '/worker/profile'),
  },
  user: {
    root: path(ROOTS_APP, '/user'),
    new: path(ROOTS_APP, '/user/new'),
    list: path(ROOTS_APP, '/user/list'),
    cards: path(ROOTS_APP, '/user/cards'),
    profile: path(ROOTS_APP, '/user/profile'),
    account: path(ROOTS_APP, '/user/account'),
    edit: (name: string) => path(ROOTS_APP, `/user/${name}/edit`),
    demoEdit: path(ROOTS_APP, `/user/reece-chung/edit`),
  },
  schedule: {
    root: path(ROOTS_APP, '/schedule'),
    list: path(ROOTS_APP, '/schedule/list'),
    new: path(ROOTS_APP, '/schedule/new'),
    view: (id: string) => path(ROOTS_APP, `/schedule/${id}`),
    edit: (id: string) => path(ROOTS_APP, `/schedule/${id}/edit`),
    demoEdit: path(ROOTS_APP, '/schedule/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_APP, '/schedule/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  // chat: {
  //   root: path(ROOTS_APP, '/chat'),
  //   new: path(ROOTS_APP, '/chat/new'),
  //   view: (name: string) => path(ROOTS_APP, `/chat/${name}`),
  // },
  // calendar: path(ROOTS_APP, '/calendar'),
  // kanban: path(ROOTS_APP, '/kanban'),
  // eCommerce: {
  //   root: path(ROOTS_APP, '/e-commerce'),
  //   shop: path(ROOTS_APP, '/e-commerce/shop'),
  //   list: path(ROOTS_APP, '/e-commerce/list'),
  //   checkout: path(ROOTS_APP, '/e-commerce/checkout'),
  //   new: path(ROOTS_APP, '/e-commerce/product/new'),
  //   view: (name: string) => path(ROOTS_APP, `/e-commerce/product/${name}`),
  //   edit: (name: string) => path(ROOTS_APP, `/e-commerce/product/${name}/edit`),
  //   demoEdit: path(ROOTS_APP, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
  //   demoView: path(ROOTS_APP, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  // },
  // blog: {
  //   root: path(ROOTS_APP, '/blog'),
  //   posts: path(ROOTS_APP, '/blog/posts'),
  //   new: path(ROOTS_APP, '/blog/new'),
  //   view: (title: string) => path(ROOTS_APP, `/blog/post/${title}`),
  //   demoView: path(ROOTS_APP, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  // },
};

export const PATH_DOCS = 'https://docs.penxdao.com';
