<script setup>
const data = await useFetch('/api/movies')
</script>

<template>
	<code>
		{{ data }}
	</code>
</template>