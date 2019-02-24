import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import movieList from './movielist'
import movieDetail from './moviedetail'
const store = new Vuex.Store({
    // 把 state/mutations/actions拆分成好多个 js 模块
    modules: {
        movieList,
        movieDetail
    }
})

export default store