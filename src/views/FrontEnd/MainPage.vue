<template>
  <div>
    <div class="pContainer">
      <NavBar></NavBar>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import NavBar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'

export default {
  data () {
    return {
      items: [],
      pageUri: [],
      uri: []
    }
  },
  components: {
    NavBar,
    Footer
  },
  methods: {
    btnfn () {
      this.$refs.toggle.option = !this.$refs.toggle.option
      console.log(this.$refs.toggle.option)
    }
  },
  created () {
    const vm = this
    this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
    this.$router.options.routes.forEach(route => {
      if (route.path === '/mainpage') {
        vm.pageUri = route.children
      }
    })
  },
  mounted () {
    const vm = this
    // console.log(this.pageUri)
    vm.pageUri.forEach(path => {
      vm.uri.push({
        path: path.path,
        name: path.name
      })
      if (path.children !== undefined) {
        // console.log(path.children)
        path.children.forEach(child => {
          vm.uri.push({
            path: child.path
          })
        })
      }
    })
    // vm.uri.forEach(printurl => {
    //   console.log('uri:', printurl.path, '頁面名稱:', printurl.name, '是否需要登入:', printurl.login)
    // })
  }
}
</script>
