<template>
  <div class="min-screen">
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4">
      顶部导航
    </header>

    <div class="flex flex-row h-[calc(100vh-74px)]">
      <div class="w-2/3 h-full bg-gray-50">
        <header class="h-16 border-b border-gray-200 text-xl text-gray-700 px-7">编排</header>
        <div class="flex flex-row h-[calc(100%-64px)]">
          <div class="flex-1 border-r border-gray-200 p-6">人设与回复逻辑</div>
          <div class="flex-1 p-6">应用能力</div>
        </div>
      </div>
      <div class="flex flex-col w-1/3 h-full bg-white">
        <header
          class="flex flex-shrink-0 items-center h-16 bg-white shadow-sm border-b border-gray-200 text-xl text-gray-700 px-4"
        >
          调试预览
        </header>
        <div class="h-full overflow-x-hidden overflow-y-scroll min-h-0 px-6 py-7 scrollbar-w-none">
          <!-- 人类消息 -->
          <div class="flex flex-row mb-6 gap-2">
            <a-avatar class="flex-shrink-0" :size="30" :style="{ backgroundColor: '#3370ff' }">
              avatar
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="text-gray-700 font-semibold">test</div>
              <div
                class="max-w-max px-4 py-3 border border-blue-800 bg-blue-700 text-white rounded-2xl leading-5"
              >
                你好
              </div>
            </div>
          </div>
          <!-- 机器人消息 -->
          <div class="flex flex-row mb-6 gap-2">
            <a-avatar :style="{ backgroundColor: '#00d0b6' }" class="flex-shrink-0" :size="30">
              <IconApps />
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="text-gray-700 font-semibold">ai</div>
              <div
                class="max-w-max px-4 py-3 border border-gray-200 bg-gray-100 text-gray-900 rounded-2xl leading-5"
              >
                你好
              </div>
            </div>
          </div>

          <!-- loading -->
          <div class="flex flex-row mb-6 gap-2">
            <a-avatar :style="{ backgroundColor: '#00d0b6' }" class="flex-shrink-0" :size="30">
              <IconApps />
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="text-gray-700 font-semibold">ai</div>
              <div
                class="max-w-max px-4 py-3 border border-gray-200 bg-gray-100 text-gray-900 rounded-2xl leading-5"
              >
                <icon-loading />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-shrink-0 w-full">
          <div class="flex px-6 gap-4 items-center">
            <a-tooltip content="清空聊天记录">
              <a-button shape="round" size="large">
                <!-- <template #icon>
                <IconEmpty size="16" :style="{ color: '#374151' }" />
              </template> -->
                清空
              </a-button>
            </a-tooltip>

            <div
              class="h-[50px] flex items-center gap-2 px-4 flex-1 border border-gray-200 rounded-full"
            >
              <input type="text" placeholder="请输入消息" class="flex-1 outline-0" />
              <a-button type="text" shape="circle">
                <template #icon>
                  <IconPauseCircle size="16" :style="{ color: '#374151' }" />
                </template>
              </a-button>
              <a-button type="text" shape="circle">
                <template #icon>
                  <IconSend size="16" :style="{ color: '#1d4ed8' }" />
                </template>
              </a-button>
            </div>
          </div>
          <div class="text-center text-gray-500 py-4 text-xs">内容由ai生成,请注意辨别。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import {
  IconLoading,
  IconApps,
  IconEmpty,
  IconPauseCircle,
  IconSend,
} from '@arco-design/web-vue/es/icon'
</script>

<style scoped></style>
