<template>
  <div class="container">
    <div v-for="post in weeklyFilter" :key="post.id">
      <div class="card">
        <div class="post-heading">
          <a>{{post.data.title}}</a>
        </div>
        <div class="post-img">
          <img v-if="post.data.is_reddit_media_domain" :src="post.data.url">
          <!-- <b-img-lazy :src="post.data.url" center fluid-grow width="500" height="500" blank-color="#bbb" alt="img" class="my-5" /> -->
        </div> 
        <div class="score">
          ⬆️ {{post.data.score}} by {{post.data.author}}
        </div>
        <div class="time">
            <h3></h3>
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
    },
    getTime(val) {
      return 
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
  border solid black 1px
  margin-left  auto
  margin-right auto 
  margin-top 25px
  margin bottom 25px 
  width 500px
  
  background-color white
  
  .post-heading
    margin 5px
  .score
    margin 5px
  
img 
  width 100%
  
  

</style>
