// eslint-disable-next-line
import * as loginService from '@/api/login'
// eslint-disable-next-line
import { BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { builder } from '@/mock/util'

// 前端路由表
const constantRouterComponents = {
  // 基础页面 layout 必须引入
  BasicLayout: BasicLayout,
  BlankLayout: BlankLayout,
  RouteView: RouteView,
  PageView: PageView,
  '403': () => import(/* webpackChunkName: "error" */ '@/views/exception/403'),
  '404': () => import(/* webpackChunkName: "error" */ '@/views/exception/404'),
  '500': () => import(/* webpackChunkName: "error" */ '@/views/exception/500'),

  // 你需要动态引入的页面组件
  'Workplace': () => import('@/views/dashboard/Workplace'),
  'Analysis': () => import('@/views/dashboard/Analysis'),

  // list
  'TableList': () => import('@/views/list/TableList'),
  'StandardList': () => import('@/views/list/StandardList'),
  'CardList': () => import('@/views/list/CardList'),
  'SearchLayout': () => import('@/views/list/search/SearchLayout'),
  'SearchArticles': () => import('@/views/list/search/Article'),
  'SearchProjects': () => import('@/views/list/search/Projects'),
  'SearchApplications': () => import('@/views/list/search/Applications'),
  'ProfileBasic': () => import('@/views/profile/basic/Index'),
  'ProfileAdvanced': () => import('@/views/profile/advanced/Advanced'),

  // result
  'ResultSuccess': () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
  'ResultFail': () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),

  // exception
  'Exception403': () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
  'Exception404': () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  'Exception500': () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),

  // account
  'AccountCenter': () => import('@/views/account/center/Index'),
  'AccountSettings': () => import('@/views/account/settings/Index'),
  'BaseSettings': () => import('@/views/account/settings/BaseSetting'),
  'SecuritySettings': () => import('@/views/account/settings/Security'),
  'CustomSettings': () => import('@/views/account/settings/Custom'),
  'BindingSettings': () => import('@/views/account/settings/Binding'),
  'NotificationSettings': () => import('@/views/account/settings/Notification'),

  'TestWork': () => import(/* webpackChunkName: "TestWork" */ '@/views/dashboard/TestWork'),
  'ManuscriptSubmitted': () => import('@/views/AuthorPage/ManuscriptSubmitted/ManuscriptSubmitted'),
  'ManuscriptDrafts': () => import('@/views/AuthorPage/ManuscriptDrafts/Drafts'),
  'ManuscriptReview': () => import('@/views/EditorPage/EditorManuscript/ManuscriptReview'),
  'ManuscriptEnquiry': () => import('@/views/EditorPage/EditorManuscript/ManuscriptEnquiry'),

  'ShowManscript': () => import('@/views/AuthorPage/ShowManscript/ShowManscript'),

  'ShowEditManuscript': () => import('@/views/EditorPage/CorrectingManuscripts/ShowEditManuscript'),

  'CommentManuscript': () => import('@/views/EditorPage/CorrectingManuscripts/CommentManuscript'),

  'SelectManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/SelectManuscript'),

  'ShowEditorInfo': () => import('@/views/AuthorPage/ShowManscript/ShowEditorInfo'),

  'FirstComplete': () => import('@/views/EditorPage/CorrectingManuscripts/FirstComplete'),

  'ShowChiefManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/ShowChiefManuscript'),

  'CommentChiefManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/CommentChiefManuscript'),

  'CompleteManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/CompleteManuscript'),

  'ShowCompleteManuscript': () => import('@/views/Manuscript/ShowCompleteManuscript'),

  'AuthorCompleteManuscript': () => import('@/views/AuthorPage/CompleteManuscript/AuthorCompleteManuscript'),

  'ShowAuthorCompleteManuscript': () => import('@/views/AuthorPage/CompleteManuscript/ShowAuthorCompleteManuscript'),

  'MyReviewManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/MyReviewManuscript'),

  'EditorSentMessage': () => import('@/views/EditorPage/MessageInfo/EditorSentMessage'),
  'EditorShowMessage': () => import('@/views/EditorPage/MessageInfo/EditorShowMessage'),

  // 作者界面的路由组件
  'AuthorHomeInfoPage': () => import('@/views/AuthorPage/HomePage/HomeInfoPage'),
  'ContributePage': () => import('@/views/AuthorPage/SubmissionOnline/ContributePage'),
  'ModifyDraftManuscript': () => import('@/views/AuthorPage/ModifyManuscript/ModifyDraftManuscript'),
  'ReviewFirstManuscript': () => import('@/views/EditorPage/CorrectingManuscripts/ReviewFirstManuscript'),
  'ShowProgress': () => import('@/views/AuthorPage/ManuscriptSubmitted/ShowProgress'),
  'AuthorAccountCenter': () => import('@/views/AuthorPage/account/center/Index'),
  'AuthorAccountSettings': () => import('@/views/AuthorPage/account/settings/Index'),
  'AuthorBaseSettings': () => import('@/views/AuthorPage/account/settings/BaseSetting'),
  'SentMessage': () => import('@/views/AuthorPage/MessageInfo/SentMessage'),
  'ShowMessage': () => import('@/views/AuthorPage/MessageInfo/ShowMessage'),
  'ReadManuscript': () => import('@/views/AuthorPage/MessageInfo/ReadManuscript'),

  // 专家界面
  'ExpertReviewManuscript': () => import('@/views/ExpertPage/ExpertReviewManuscript/ExpertReviewManuscript'),
  'ReviewManuscript': () => import('@/views/ExpertPage/ExpertReviewManuscript/ReviewManuscript'),
  'ShowExpertManuscript': () => import('@/views/ExpertPage/ExpertReviewManuscript/ShowExpertManuscript'),
  'ShowExpertComplete': () => import('@/views/ExpertPage/ShowComplete/ShowExpertComplete'),
  'ExpertAccountCenter': () => import('@/views/ExpertPage/account/center/page/index'),
  'ExpertAccountSettings': () => import('@/views/ExpertPage/account/settings/Index'),
  'ExpertBaseSettings': () => import('@/views/ExpertPage/account/settings/BaseSetting'),
  'ExpertWorkplace': () => import('@/views/ExpertPage/dashboard/ExpertWorkplace'),
  'ExpertSentMessage': () => import('@/views/ExpertPage/MessageInfo/ExpertSentMessage'),
  'ExpertShowMessage': () => import('@/views/ExpertPage/MessageInfo/ExpertShowMessage'),

  'ReviewSecondManuscript': () => import('@/views/EditorPage/SecondReview/ReviewSecondManuscript'),
  'GetEndManuscript': () => import('@/views/EditorPage/GetEndManuscript/GetEndManuscript'),

  'EditorAccountCenter': () => import('@/views/EditorPage/account/center/Index'),
  'EditorAccountSettings': () => import('@/views/EditorPage/account/settings/Index'),
  'EditorBaseSettings': () => import('@/views/EditorPage/account/settings/BaseSetting'),
  'EditorWorkplace': () => import('@/views/EditorPage/dashboard/EditorWorkplace'),

  // 主编界面
  'ChiefEditorWorkplace': () => import('@/views/ChiefEditorPage/dashboard/ChiefEditorWorkplace'),
  'ReviewsChiefManuscript': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/ReviewsChiefManuscript'),
  'ChiefEditorAccountCenter': () => import('@/views/ChiefEditorPage/account/center/page/index'),
  'ChiefEditorAcc ountSettings': () => import('@/views/ChiefEditorPage/account/settings/Index'),
  'ChiefEditorBaseSettings': () => import('@/views/ChiefEditorPage/account/settings/BaseSetting'),
  'ManuscriptLayout': () => import('@/views/ChiefEditorPage/ChiefEditorManuscript/ManuscriptLayout'),
  'ChiefEditorSentMessage': () => import('@/views/ChiefEditorPage/MessageInfo/ChiefEditorSentMessage'),
  'ChiefEditorShowMessage': () => import('@/views/ChiefEditorPage/MessageInfo/ChiefEditorShowMessage')
}

// 前端未找到页面路由（固定不用改）
const notFoundRouter = {
  path: '*', redirect: '/404', hidden: true
}

// 根级菜单
const rootRouter = {
  key: '',
  name: 'index',
  path: '',
  component: 'BasicLayout',
  redirect: '/dashboard',
  meta: {
    title: '首页'
  },
  children: []
}

/**
 * 动态生成菜单
 * @param token
 * @returns {Promise<Router>}
 */
export const generatorDynamicRouter = (token) => {
  return new Promise((resolve, reject) => {
    loginService.getCurrentUserNav(token).then(res => {
      console.log('res', res)
      res = builder(res)
      const { result } = res
      const menuNav = []
      const childrenNav = []
      //      后端数据, 根级树数组,  根级 PID
      listToTree(result, childrenNav, 0)
      rootRouter.children = childrenNav
      menuNav.push(rootRouter)
      console.log('menuNav', menuNav)
      const routers = generator(menuNav)
      routers.push(notFoundRouter)
      console.log('routers', routers)
      resolve(routers)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 *
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const { title, show, hideChildren, hiddenHeaderContent, target, icon } = item.meta || {}
    const currentRouter = {
      // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
      path: item.path || `${parent && parent.path || ''}/${item.key}`,
      // 路由名称，建议唯一
      name: item.name || item.key || '',
      // 该路由对应页面的 组件 :方案1
      component: constantRouterComponents[item.component || item.key],
      // 该路由对应页面的 组件 :方案2 (动态加载)
      // component: constantRouterComponents[item.component || item.key] || () => import(`@/views/${item.component}`),

      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: { title: title, icon: icon || undefined, hiddenHeaderContent: hiddenHeaderContent, target: target, permission: item.name }
    }
    // 是否设置了隐藏菜单
    if (show === false) {
      currentRouter.hidden = true
    }
    // 是否设置了隐藏子菜单
    if (hideChildren) {
      currentRouter.hideChildrenInMenu = true
    }
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    if (!currentRouter.path.startsWith('http')) {
      currentRouter.path = currentRouter.path.replace('//', '/')
    }
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generator(item.children, currentRouter)
    }
    return currentRouter
  })
}

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list, tree, parentId) => {
  list.forEach(item => {
    // 判断是否为父级菜单
    if (item.parentId === parentId) {
      const child = {
        ...item,
        key: item.key || item.name,
        children: []
      }
      // 迭代 list， 找到当前菜单相符合的所有子菜单
      listToTree(list, child.children, item.id)
      // 删掉不存在 children 值的属性
      if (child.children.length <= 0) {
        delete child.children
      }
      // 加入到树中
      tree.push(child)
    }
  })
}
