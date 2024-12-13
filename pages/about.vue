<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor...</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // this part for get method
    // const { data } = await useFetch('api/ninja?name=fatih')

    // this part for post method
    // const { data } = await useFetch('/api/ninja?name=fatih', {
    //     method: 'post',
    //     body: { age:32 }
    // })

    // this part for online api
    const { data } = await useFetch('api/ninja')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }

</style>