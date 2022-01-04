<template>
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia praesentium at natus odio rem, saepe ipsa omnis sint magni molestias.</p>
        <!-- enter'a basıldığında goToDetails fonksiyonunu çalıştır -->
        <input type="text" @keydown.enter="goToDetails">
    </div>
</template>

<script>
export default {
    methods:{
        goToDetails(e){
            // alert(e.target.value);
            // this.$router.push(`/details/${e.target.value}`);
            //name, parametre ve query gönderebiliriz.
            this.$router.push({
                name : "DetailPage",
                params : {
                    userID: e.target.value
                },
                query : {
                    type:"DetailAuth",
                    user:"oguzhanmemis"

                }
            })
        }
    }
}
</script>

<style>

</style>