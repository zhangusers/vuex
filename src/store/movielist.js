// 作用: 专门管理 movieList.vue 的 数据模块

import jsonp from 'jsonp'

export default {
    // 开启命名空间: 让外部可以访问到
    namespaced: true,
    state: {
        title: '',
        subjects: {}
    },
    // mutations 作用: 修改 state 的数据 只能写同步代码 对应组件中的计算属性
    mutations: {
        // state是 mutations 自带的 state 形参 payload 形参
        setData(state, payload) {
            state.title = payload.title
            state.subjects = payload.subjects
            // console.log(state.subjects)
        }
    },
    // actions: 异步方法 对应组件中的计算属性
    actions: {
        setData(content) {
            // console.log(content)
            const Path = content.rootState.route.name
            jsonp(`http://api.douban.com/v2/movie/${Path}`, (err, data) => {
                // console.log(data)
                // 在 异步有结果的位置 把结果通过 commit 给 mutations
                content.commit('setData', data)
            })
        }
    }
}