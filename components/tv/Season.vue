<script setup lang="ts">
import { IEpisode } from '~~/models/episode.d';
import { ISeason } from '~~/models/season.d';

const props = defineProps<{
	idTv: number;
	seasons: ISeason[];
}>()

const episodes = ref<IEpisode[]>([]);

$fetch(`/api/tv/${props.idTv}/season/${props.seasons[0].number}`).then((response) => {
	if (!response) return;

	episodes.value = response.episodes as unknown as IEpisode[];
});
</script>

<template>
	<section>
		<h2>Episodes</h2>

		<div class="list-episode">
			<TvEpisode v-for="episode in episodes" :key="episode.id" :episode="episode" />
		</div>
	</section>
</template>

<style scoped>
.list-episode>article:not(:last-child) {
	border-bottom: 0.5px solid #404040;
}

.list-episode>article:first-of-type {
	background-color: #333333;
}
</style>