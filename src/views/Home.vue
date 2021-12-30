<template>
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia praesentium at natus odio rem, saepe ipsa omnis sint magni molestias.</p>
        <input type="text" @keydown.enter="goToDetails">
    </div>
</template>

<script>
export default {
    methods:{
        goToDetails(e){
            this.$router.push(`/details/${e.target.value}`)
        }
    }
}
</script>

<style>

</style>