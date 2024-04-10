<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
import CardList from '../components/CardList.vue';

const favorites = ref([])

onMounted(async() => {
try{
    const {data} = await axios.get('http://127.0.0.1:8000/api/favorites-relations?_relations=items');

  favorites.value = data.favorites.map(obj => obj.item);
}
catch(err){
    console.log(err);
}
})

</script>
<template>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

    <CardList :items="favorites" is-favorites/>
</template>