<template>
    <div>
        <h1>Product Details for {{ id }}</h1>
        <p>Lorem ipsum dolor..</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    
    definePageMeta({
        layout: 'products'
    })
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