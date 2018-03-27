<template>
  <div class="container">
    <div v-for="post in weeklyFilter" :key="post.id">
      <div class="card">
        <div class="post-heading">
          <a :href="linkify(post.data.permalink)" target="_blank">{{post.data.title}}</a>
        </div>
        <div class="post-img">
          <img :src="post.data.preview.images[0].source.url">
        </div> 
        <div class="score">
           △ {{post.data.score}} ☞ {{post.data.author}} ✉︎ {{post.data.num_comments}}
        </div>
        <div class="time">
           {{getTime(post.data.created_utc)}} ago
        </div>
      </div>
      <button @click="loadMore()">Load more</button>
    </div>
  </div>
</template>

<script>
import {parse, distanceInWords} from 'date-fns' 
export default {
  name: 'PostsView',
  data () {
    return {
      posts: []
    }
  },
  computed: {
    weeklyFilter() {
      return this.posts.filter(function(posts) {
        return !posts.data.stickied 
      })
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    loadMore() {
      const url = 'https://www.reddit.com/r/analog.json'
      fetch(url)
        .then(response => response.json())
        .then(result => {
          this.posts = this.posts.concat(result.data.children)
        })
    },
    load() {
      const url = 'https://www.reddit.com/r/analog.json'
      fetch(url)
        .then(response => response.json())
        .then(result => {
          this.posts = result.data.children
        })
    },
    getTime(date) {
      return distanceInWords(parse(date * 1000), new Date())
    },
    linkify(link) {
      return `https://www.reddit.com${link}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding-top 25px
  padding-bottom 25px
.card
  box-sizing border-box
  // border solid black 1px
  margin-left  auto
  margin-right auto
  margin-top 25px
  margin-bottom 25px 
  width 500px
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  padding-top 3px
  background-color white
  a
    text-decoration none
    color #afafaf
    &:hover
      color	#8c8c8c

  .post-heading
    margin 5px

  .score
    margin 5px
    display inline-block

  .time
    margin 8px 5px 5px 5px 
    display inline-block
    float right

img
  width 100%

</style>
