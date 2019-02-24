<template>
    <div>
        <h1 class="page-header">{{title}}</h1>
        <div class="media" v-for="(item, i) in subjects" :key="i">
            <router-link :to="{name: 'moviedetail', params: {id: item.id}}">
                <div class="media-left">
                    <img :src="'https://images.weserv.nl?url='+item.images.small.substr(7)" alt="海报点击链接">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{item.title}}</h4>
                    {{item.genres}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created () {
      this.setData()
    },
    watch: {
      'route' (to, from) {
          this.setData(to.name)
      }
    },
    // store 中的 status 对应组件中的 computed
    computed: {
        // 要用那个模块的什么数据
        ...mapState('movieList', ['title', 'subjects'])
    },
    methods: {
        // 要用那个模块使用什么方法
        ...mapActions('movieList', ['setData'])
    }
}
</script>

<style>

</style>
