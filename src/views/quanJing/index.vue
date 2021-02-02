<template>
  <div>
    <QuanJing :list='topList'></QuanJing>
    <div
      class="my"
      v-if="selfList.length>0"
    >
      <QuanJing
        :list='selfList'
        v-if="selfList.length>0"
      ></QuanJing>
    </div>
  </div>
</template>

<script>
import { request } from 'youdi_utils'
import { dataStr } from './dict'

import QuanJing from './QuanJing'
export default {
  components: {
    QuanJing
  },
  data () {
    return {
      topList: JSON.parse(dataStr).map(it => it.Url),
      selfList: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const res = await request({ url: '/yx/www/json/quanjing.json' })
      if (res.status == 200 && res.data.length > 0) {
        this.selfList = res.data
      }
    },
  }
}
</script>

<style scoped>
.my {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
}
</style>
