<script setup>
const data = await $fetch('/api/movies')
</script>

<template>
	<code>
		{{ data }}
	</code>
</template>