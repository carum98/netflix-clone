<script setup>
const { data } = await useFetch('/api/movies')
</script>

<template>
	<MovieCarousel :movies="data.data" />
</template>
