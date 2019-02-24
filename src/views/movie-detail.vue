<template>
  <div>
    <h2>{{movie.title}}</h2>

    <img :src="'https://images.weserv.nl?url='+movie.images.small.substr(7)" alt="电影海报">
    <hr>
    简介：
    <p>{{movie.summary}}</p>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    created() {
        this.setMovie()
    },
    methods: {
        ...mapActions('movieDetail', ['setMovie'])
    },
    computed: {
        ...mapState('movieDetail', ['movie'])
    }

}
</script>

<style>

</style>
