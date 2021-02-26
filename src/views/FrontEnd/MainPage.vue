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
  components: {
    NavBar,
    Footer
  },
  methods: {
    btnfn () {
      this.$refs.toggle.option = !this.$refs.toggle.option
      console.log(this.$refs.toggle.option)
    }
  }
}
</script>
