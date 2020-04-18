import Vue from 'vue'
import ImagePreview from './imagePreview/index.vue'

const commenComponent = {
    install: function () {
        Vue.component('ImagePreview', ImagePreview)
    }
}

export default commenComponent