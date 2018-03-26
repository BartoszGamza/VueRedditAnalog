<template>
  <div class="container">
    <div v-for="post in weeklyFilter" :key="post.id">
      <div class="card">
        <div class="post-heading">
          {{post.data.title}}
        </div>
        <div class="post-img">
          <img v-if="post.data.is_reddit_media_domain" :src="post.data.url">
          <!-- <b-img-lazy :src="post.data.url" center fluid-grow width="500" height="500" blank-color="#bbb" alt="img" class="my-5" /> -->
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

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
        // && posts.data.is_reddit_media_domain
      })
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      const url = 'https://www.reddit.com/r/analog/.json'
      fetch(url)
        .then(response => response.json())
        .then(result => {
          this.posts = result.data.children
        })
    }
  }
}
</script>

<style lang="stylus">
.container
  padding-top 50px
.card
  margin 0 auto
  width 500px
  height 
  padding 15px
img
  max-width 500px
  max-height 800px
  

</style>
