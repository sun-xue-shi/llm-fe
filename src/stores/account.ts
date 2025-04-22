import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Account {
  name: string
  email: string
  password: string
  avatar: string
}

export const useAccountStore = defineStore('account', () => {
  const account = ref({
    name: '',
    email: '',
    password: '',
    avatar: '',
  })

  function updateAccount(newAccount: Account) {
    Object.assign(account.value, newAccount)
  }

  function clearAccount() {
    account.value = {
      name: '',
      email: '',
      password: '',
      avatar: '',
    }
  }

  return { account, updateAccount, clearAccount }
})
