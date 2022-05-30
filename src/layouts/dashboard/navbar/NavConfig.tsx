// routes
import { PATH_APP } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Pen-X Fund', path: PATH_APP.general.fund, icon: ICONS.analytics },
      { title: '$PENX',  icon: ICONS.ecommerce, path: PATH_APP.permissionDenied, },
      // { title: 'analytics', path: PATH_APP.general.analytics, icon: ICONS.analytics },
      // { title: 'booking', path: PATH_APP.general.booking, icon: ICONS.booking },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'pension management',
    items: [
      {
        title: 'Contributions',
        path: PATH_APP.schedule.root,
        icon: ICONS.banking,
        info: <Label color="error">+32</Label>,
      },

      { title: 'workers', path: PATH_APP.worker.root, icon: ICONS.user},
      // { title: 'banking', path: PATH_APP.general.banking, icon: ICONS.banking },
      // { title: 'chat', path: PATH_APP.chat.root, icon: ICONS.chat },
      // { title: 'calendar', path: PATH_APP.calendar, icon: ICONS.calendar },
      // { title: 'kanban', path: PATH_APP.kanban, icon: ICONS.kanban },
    ],
  },

  // ACCOUNT
  // ----------------------------------------------------------------------
  {
    subheader: 'account',
    items: [
      
      { title: 'account', path: PATH_APP.user.account, icon: ICONS.kanban },
      { title: 'help', path: 'https://docs.penxdao.com', icon: ICONS.chat },
    ]
    },

  //     // E-COMMERCE
  //     {
  //       title: 'ecommerce',
  //       path: PATH_APP.eCommerce.root,
  //       icon: ICONS.cart,
  //       children: [
  //         { title: 'shop', path: PATH_APP.eCommerce.shop },
  //         { title: 'product', path: PATH_APP.eCommerce.demoView },
  //         { title: 'list', path: PATH_APP.eCommerce.list },
  //         { title: 'create', path: PATH_APP.eCommerce.new },
  //         { title: 'edit', path: PATH_APP.eCommerce.demoEdit },
  //         { title: 'checkout', path: PATH_APP.eCommerce.checkout },
  //       ],
  //     },

  //     // INVOICE
  //     {
  //       title: 'invoice',
  //       path: PATH_APP.invoice.root,
  //       icon: ICONS.invoice,
  //       children: [
  //         { title: 'list', path: PATH_APP.invoice.list },
  //         { title: 'details', path: PATH_APP.invoice.demoView },
  //         { title: 'create', path: PATH_APP.invoice.new },
  //         { title: 'edit', path: PATH_APP.invoice.demoEdit },
  //       ],
  //     },

  //     // BLOG
  //     {
  //       title: 'blog',
  //       path: PATH_APP.blog.root,
  //       icon: ICONS.blog,
  //       children: [
  //         { title: 'posts', path: PATH_APP.blog.posts },
  //         { title: 'post', path: PATH_APP.blog.demoView },
  //         { title: 'create', path: PATH_APP.blog.new },
  //       ],
  //     },
  //   ],
  // },


  // DEMO MENU STATES
  // {
  //   subheader: 'Other cases',
  //   items: [
  //     {
  //       // default roles : All roles can see this entry.
  //       // roles: ['user'] Only users can see this item.
  //       // roles: ['admin'] Only admin can see this item.
  //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
  //       // Reference from 'src/guards/RoleBasedGuard'.
  //       title: 'item_by_roles',
  //       path: PATH_APP.permissionDenied,
  //       icon: ICONS.menuItem,
  //       roles: ['admin'],
  //       caption: 'only_admin_can_see_this_item',
  //     },
  //     {
  //       title: 'menu_level_1',
  //       path: '#1',
  //       icon: ICONS.menuItem,
  //       children: [
  //         { title: 'menu_level_2', path: '#2', disabled: true },
  //         {
  //           title: 'menu_level_2',
  //           path: '#3',
  //           children: [
  //             { title: 'menu_level_3', path: '#4' },
  //             { title: 'menu_level_3', path: '#5' },
  //           ],
  //         },
  //       ],
  //     },
  //     { title: 'item_disabled', path: '#disabled', icon: ICONS.menuItem, disabled: true },
  //     {
  //       title: 'item_label',
  //       path: '#label',
  //       icon: ICONS.menuItem,
  //       info: (
  //         <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //           NEW
  //         </Label>
  //       ),
  //     },
  //     { title: 'item_caption', path: '#caption', icon: ICONS.menuItem, caption: 'description' },
  //   ],
  // },
];

export default navConfig;
