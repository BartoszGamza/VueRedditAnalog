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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {parse, distanceInWords} from 'date-fns'
export default {
  name: 'New',
  data () {
    return {
      posts: []
    }
  },
  // mounted () {
  //   this.loadAxios()
  // },
  computed: {
    weeklyFilter () {
      return this.posts.filter(function (posts) {
        return posts.data.preview
      })
    }
  },
  created () {
    this.loadAxios()
    addEventListener('scroll', () => {
      this.scrolly()
    })
  },
  methods: {
    scrolly () {
      var bottom = parseInt(document.body.scrollHeight - window.scrollY - window.innerHeight)
      if (bottom === 0) {
        this.loadMore()
      }
    },
    loadMore () {
      const last = this.posts[this.posts.length - 1].data.name
      const url = `https://www.reddit.com/r/analog/new/.json?after=${last}`
      axios.get(url)
        .then(response => {
          this.posts = this.posts.concat(response.data.data.children)
        })
    },
    loadAxios () {
      axios.get('https://www.reddit.com/r/analog/new/.json')
        .then(response => {
          this.posts = response.data.data.children
        })
    },
    getTime (date) {
      return distanceInWords(parse(date * 1000), new Date())
    },
    linkify (link) {
      return `https://www.reddit.com${link}`
    }
  }
}
</script>
