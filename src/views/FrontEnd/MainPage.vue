<template>
  <div>
    <div class="pContainer">
      <NavBar />
      <Button @click="btnfn">Toggle</Button>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Button } from 'shadcn-vue'
import NavBar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'

const items = ref([])
const pageUri = ref([])
const uri = ref([])

const router = useRouter()

function btnfn () {
  console.log('button clicked')
}

onMounted(() => {
  axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
  router.getRoutes().forEach(route => {
    items.value.push({
      name: route.name,
      path: route.path,
    })
    if (route.path === '/mainpage') {
      pageUri.value = route.children || []
    }
  })
  pageUri.value.forEach(path => {
    uri.value.push({
      path: path.path,
      name: path.name,
    })
    if (path.children !== undefined) {
      path.children.forEach(child => {
        uri.value.push({
          path: child.path,
        })
      })
    }
  })
})
</script>
