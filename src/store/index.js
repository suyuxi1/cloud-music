import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    roleId: localStorage.getItem('roleId'),
    admin: JSON.parse(localStorage.getItem('admin')),
    menuList: JSON.parse(localStorage.getItem('menuList'))
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
    setRoleId(state, data) {
      state.roleId = data
    },
    setAdmin(state, data) {
      state.admin = data
    },
    setMenuList(state, data) {
      state.menuList = data
    },
    refreshAdmin(state, data) {
      state.admin = data
    },
    refreshMenuList(state, data) {
      state.menuList = data
    }
  },
  actions: {}
})
export default store

// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     token: localStorage.getItem('token'),
//     user: JSON.parse(localStorage.getItem('user')),
//     menuList: [
//       { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard', subMenus: [] },
//       {
//         title: '音乐管理',
//         icon: 'mdi-music',
//         url: '',
//         subMenus: [
//           {
//             title: '歌单管理',
//             icon: 'mdi-domain',
//             url: '/music-list',
//             permissions: []
//           },
//           {
//             title: '歌曲管理',
//             icon: 'mdi-text',
//             url: '/music',
//             permissions: ['music:add', 'music:edit', 'music:delete']
//           }
//         ]
//       },
//       { title: 'About', icon: 'mdi-help-box', url: '/about', subMenus: [] }
//     ],
//     menuList1: [
//       { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard', subMenus: [] },
//       {
//         title: '音乐管理',
//         icon: 'mdi-music',
//         url: '',
//         subMenus: [
//           {
//             title: '歌单管理',
//             icon: 'mdi-domain',
//             url: '/music-list',
//             permissions: []
//           },
//           {
//             title: '歌曲管理',
//             icon: 'mdi-text',
//             url: '/music',
//             permissions: ['music:add', 'music:edit']
//           }
//         ]
//       },
//       {
//         title: '权限管理',
//         icon: 'mdi-music',
//         url: '',
//         subMenus: [
//           {
//             title: '角色管理',
//             icon: 'mdi-domain',
//             url: '/role',
//             permissions: ['role:add', 'role:delete']
//           },
//           {
//             title: '菜单管理',
//             icon: 'mdi-text',
//             url: '/menu',
//             permissions: ['menu:add', 'menu:edit', 'menu:delete']
//           }
//         ]
//       },
//       { title: 'About', icon: 'mdi-help-box', url: '/about', subMenus: [] }
//     ]
//   },
//   mutations: {
//     setToken(state, data) {
//       state.token = data
//     },
//     setUser(state, data) {
//       state.user = data
//     },
//     setMenuList(state, menuList) {
//       state.menuList = menuList
//     }
//   },
//   actions: {}
// })
// export default store
