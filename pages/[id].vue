<script setup>
const route = useRoute()

const data = await useFetch(`/api/movies/${route.params.id}`)
</script>

<template>
	<code>
		{{ data }}
	</code>
</template>