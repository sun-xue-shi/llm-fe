<template>
  <div>
    <a-button @click="debug">test</a-button>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'

async function debug() {
  await request
    .post('/app/chat', {
      query: '你好',
    })
    .then((res) => {
      console.log(res)
    })
}
</script>

<style scoped></style>
