<template>
  <div>
      <!-- Home'dan gönderilen goToDetails fonksiyonunun içindeki veriler karşılanıyor -->
      <h1>{{ $route.params.userID }}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fuga placeat! Laboriosam enim aliquam eligendi adipisci voluptas! Maiores, dignissimos nulla.</p>
      <!-- <p>{{ $route.params.id }}</p> -->
      <!-- <p>{{ $router.query.klan }}</p> -->
      <button @click="goBack">Geri Dön</button>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route);
    },
    methods: {
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>