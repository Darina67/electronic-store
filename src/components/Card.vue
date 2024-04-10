<script setup>

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
});

</script>
<template>
  <div
    class="relative bg-white border border-slate-100 rounded-2xl p-10 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="plus"
      class="absolute top-3 left-2"
      @click="onClickFavorite"
    />
    <img class="w-52 h-52 object-contain" :src="imageUrl" alt="Item" />
    <div class="description">
      <div class="title mt-5">
        {{ title }}
      </div>
    </div>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена</span>
        <b>{{ price }} ₽.</b>
      </div>
      <img
      v-if="onClickFavorite"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="plus"
      />
    </div>
  </div>
</template>
