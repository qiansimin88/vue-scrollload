<template>
  <div id="app">
      <div class="container">
        <div class="header">
            我是固定在顶部的头部
        </div>
        <div class="scroll-box" v-el:scrollwrap>
           <div slot = "list">
              <div class="item-list" v-for = "o in 100">
                {{ o }}
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    scroll () {
      // console.log(this.$els.scrollwrap.scrollTop + this.$els.scrollwrap.offsetHeight)
    }
  },
  components: {
  },
  ready () {
    // console.log(this.$els.scrollwrap.scrollHeight)
    this.$els.scrollwrap.addEventListener('scroll', this.scroll, false)
  }
}
</script>
<style lang="less" scoped>
#app {
  background: #ccc; height: 100%;
}
.container {
  height: 100%; display: flex; flex-direction: column;
  .header {
    font-size: .32rem;
  }
  .scroll-box {
    flex: 1;
    -webkit-overflow-scrolling: touch;
    overflow: scroll; font-size: .3rem; 
    scrollbar-base-color: transparent;
  }
}
.item-list {
  height: 1rem; background: #999;line-height: 1rem;
}
</style>
