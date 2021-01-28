<template>
  <div
    class="container"
    ref="container"
    @touchstart='touchStart'
    @touchmove="gtouchmove"
    @touchend="gtouchend"
  >
    <img
      :src="currentUrl"
      alt=""
    >
  </div>
</template>

<script>
import { dataStr } from './dict'
export default {
  name: "QuanJing",
  data () {
    return {
      list: JSON.parse(dataStr).map(it => it.Url),
      currentUrl: '',
      deg: 15,
      currentIndex: 0,
      startPos: '',
      movePos: "",
      endPos: ''
    }
  },
  async mounted () {
    this.$container = this.$refs.container
    const res = await this.loadImg()
    this.deg = 360 / this.list.length
    if (res) {
      this.currentUrl = this.list[0]
      this.currentIndex = 0
    }
  },
  methods: {
    getPos (e) {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const temp = e.changedTouches[0]
        return {
          x: temp.clientX,
          y: temp.clientY
        }
      }
      return false
    },
    touchStart (e) {
      this.startPos = this.getPos(e).x
    },
    gtouchmove (e) {
      this.movePos = this.getPos(e).x
      if (this.movePos - this.startPos >= 0) {
        if (this.movePos - this.startPos >= this.deg) {
          this.startPos = this.movePos
          this.currentIndex++
          if ((this.currentIndex + 1) == this.list.length) {
            this.currentIndex = 0;
            this.currentUrl = this.list[this.currentIndex]
          }
          this.currentUrl = this.list[this.currentIndex]
        }
      } else {
        if (this.movePos - this.startPos < -this.deg) {
          this.startPos = this.movePos
          if (this.currentIndex == 0) {
            this.currentIndex = this.list.length - 1
          } else {
            this.currentIndex--
          }
          this.currentUrl = this.list[this.currentIndex]
        }
      }

    },
    gtouchend () {
      // const res = this.getPos(e)
      // console.log('移动结束');
    },
    async loadImg () {
      // console.log(this.list.length);
      return new Promise((rel) => {
        let promiseAll = [], imgs = [], total = this.list.length;
        for (let i = 0; i < total; i++) {
          promiseAll[i] = new Promise((resolve,) => {
            imgs[i] = new Image();
            imgs[i].src = this.list[i];
            imgs[i].onload = function () {
              resolve(imgs[i]);
            };
          })
        }
        Promise.all(promiseAll).then(img => {
          console.log(img);
          // 全部图片加载完成
          rel(true)
        }).catch(err => {
          console.log(err);
          rel(false)
        })
      })

    }
  }
}
</script>

<style >
.container {
  background: yellowgreen;
}
.container img {
  width: 300px;
}
</style>
