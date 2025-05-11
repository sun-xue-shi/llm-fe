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
          <div class="flex flex-row mb-6 gap-2" v-for="message in chatMessages" :key="message.id">
            <a-avatar
              class="flex-shrink-0"
              :size="30"
              :style="{ backgroundColor: '#3370ff' }"
              v-if="message.type === 'human'"
            >
              avatar
            </a-avatar>
            <a-avatar
              :style="{ backgroundColor: '#00d0b6' }"
              class="flex-shrink-0"
              :size="30"
              v-else
            >
              <IconApps />
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="text-gray-700 font-semibold">
                {{ message.type === 'human' ? 'zilong' : 'AI' }}
              </div>
              <div
                v-if="message.type === 'human'"
                class="max-w-max px-4 py-3 border border-blue-800 bg-blue-700 text-white rounded-2xl leading-5"
              >
                {{ message.content }}
              </div>
              <div
                v-else
                class="max-w-max px-4 py-3 border border-gray-200 bg-gray-100 text-gray-900 rounded-2xl leading-5"
              >
                {{ message.content }}
              </div>
            </div>
          </div>

          <div
            v-if="!chatMessages.length"
            class="flex flex-col items-center justify-center gap-2 mt-[200px]"
          >
            <a-avatar :size="70" shape="square" :style="{ backgroundColor: '#00d0b6' }">
              <IconApps />
            </a-avatar>
            <div class="text-gray-900 text-2xl font-semibold">请输入消息开始对话</div>
          </div>

          <!-- loading -->
          <div class="flex flex-row mb-6 gap-2" v-if="loading">
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
              <a-button shape="round" size="large" @click="clearMessage"> 清空 </a-button>
            </a-tooltip>

            <div
              class="h-[50px] flex items-center gap-2 px-4 flex-1 border border-gray-200 rounded-full"
            >
              <a-input
                type="text"
                placeholder="请输入消息"
                class="flex-1 outline-0"
                v-model="query"
                @keydown.enter="sendMessage"
              />
              <a-button type="text" shape="circle">
                <template #icon>
                  <IconPlusCircle size="16" :style="{ color: '#374151' }" />
                </template>
              </a-button>
              <a-button type="text" shape="circle" @click="sendMessage">
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
import { chat } from '@/services/app'
import { Message } from '@arco-design/web-vue'
import { IconLoading, IconApps, IconPlusCircle, IconSend } from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

interface Message {
  id: string
  type: 'ai' | 'human'
  content: string
}

const query = ref('')
const loading = ref(false)
const chatMessages = ref<Array<Message>>([])

const clearMessage = () => {
  chatMessages.value = []
}

const sendMessage = async () => {
  if (!query.value) return Message.error('请输入内容')
  if (loading.value) return Message.warning('请等待上一次回复完成')

  try {
    const humanMessage = query.value
    query.value = ''

    chatMessages.value.push({
      id: uuid(),
      type: 'human',
      content: humanMessage,
    })

    loading.value = true

    const aiMessage = await chat(humanMessage)

    chatMessages.value.push({
      id: uuid(),
      type: 'ai',
      content: aiMessage.data.content,
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
