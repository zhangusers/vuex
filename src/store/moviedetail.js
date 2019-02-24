// 专门管理详情 moviedetail.vue 的数据
import jsonp from 'jsonp'
export default {
    // 开启命名空间
    namespaced: true,
    state: {
        movie: {}
    },
    mutations: {
        setMovie(state, payload) {
            state.movie = payload
        }
    },
    actions: {
        setMovie(context,payload) {
            // console.log(context)
            const ID = context.rootState.route.params.id
            jsonp(`https://api.douban.com/v2/movie/subject/${ID}`, (err, data) =>{
                context.commit('setMovie', data)
            })
        }
    }
}