<template>
  <div class="preview_img">
    <template v-if="imgList.length==0">
      <div style="text-align:center" class="textGrey">暂时没有图片</div>
    </template>
    <template v-else v-for="(item,index) in imgList">
      <div class="img_list" :key="index">
        <img :src="item" alt="dafdf" class @click="(e) => imgClick(index)" />
      </div>
    </template>
  </div>
</template>
<script>
import Vue from "vue";
import { ImagePreview } from "vant";
Vue.use(ImagePreview);

export default {
  name: "preview_img",
  props: {
    imgList: {
      default: function() {
        return [];
      },
      type: Array,
      required: true
    }
  },
  methods: {
    imgClick(index) {
      ImagePreview({
        images: this.imgList,
        startPosition: index,
        onClose() {
          // do something
        },
        closeable: true
      });
    }
  },
  mounted() {}
};
</script>
<style  scoped lang="less">
.preview_img {
  text-align: left;
  padding: 0 10px;
  .noImg {
    text-align: center;
    font-size: 14px;
    color: grey;
    margin: 15px 0;
  }
  .img_list {
    display: inline-block;
    margin-right: 10px;
    border-radius: 8px;
    width: 80px;
    height: 80px;
    img {
      border-radius: 8px;
      width: 80px;
      height: 80px;
    }
  }
}
</style>