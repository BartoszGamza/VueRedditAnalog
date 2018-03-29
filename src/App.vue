<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <h3>r/analog</h3>
      </nav>
    </header>
    <router-view class="view"/>
  </div>
</template>

<style lang="stylus">
body
  font-family: 'Roboto', sans-serif
  font-size 15px
  background-color #f8f8fa
  margin 0
  padding-top 25px
  color #afafaf
  overflow-y scroll

.header
  background-color white
  position fixed
  z-index 999
  height 25
  top 0
  left 0
  right 0
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  .inner
    max-width 800px
    box-sizing border-box
    text-align center
    margin 0px auto
  h3
  line-height 24px
  display inline-block
  vertical-align middle
  font-weight 300
  letter-spacing .075em
.view
  max-width 800px
  margin 0 auto
  position relative
</style>
