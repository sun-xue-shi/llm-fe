<template>
  <div class="min-screen">
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4">
      顶部导航
    </header>

    <div class="flex flex-row h-[calc(100vh-74px)]">
      <div class="w-2/3 h-full bg-gray-50">
        <header class="h-16 border-b border-gray-200 text-xl text-gray-700 px-7">编排</header>
        <div class="flex flex-row h-full">
          <div class="flex-1 border-r border-gray-200 p-6">人设与回复逻辑</div>
          <div class="flex-1 p-6">应用能力</div>
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full bg-white">
        <header
          class="flex items-center h-16 bg-white shadow-sm border-b border-gray-200 text-xl text-gray-700 px-4"
        >
          调试预览
        </header>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
</script>

<style scoped></style>
