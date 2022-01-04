<template>
  <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta!</p>
      <button @click="goToHome">Ana Sayfa</button>
  </div>
</template>

<script>
export default {
    methods: {
      //router'da tanımlamalar nasıl yapılmışsa herhangi biriyle yönlendirme yapılabiliyor.
      goToHome(){
        this.$router.push({
          name:"HomePage"
        })
      }
    }
}
</script>

<style>

</style>