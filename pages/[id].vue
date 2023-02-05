<script setup>
const route = useRoute()

const data = await $fetch(`/api/movies/${route.params.id}`)
</script>

<template>
	<code>
		{{ data }}
	</code>
</template>