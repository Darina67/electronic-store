<script setup>
const emit = defineEmits(["openDrawer"]);
defineProps({
  totalPrice: Number,
});
</script>
<template>
  <header class="flex justify-between px-8 py-8 border-b">
    <router-link to="/">
      <div>
        <img src="/public/img/logo.png" alt="Logo" />
      </div>
    </router-link>
    <ul class="flex items-center gap-10">
      <router-link to="">
        <li
          class="flex items-center gap-3 text-xl text-black hover:text-black cursor-pointer"
        >
          <b>О нас</b>
        </li>
      </router-link>
      <router-link to="/shop">
        <li
          class="flex items-center gap-3 text-xl text-black hover:text-black cursor-pointer"
        >
          <b>Курсы</b>
        </li>
      </router-link>
      <router-link to="">
        <li
          class="flex items-center gap-3 text-xl text-black hover:text-black cursor-pointer"
        >
          <b>Мероприятия</b>
        </li>
      </router-link>
      <router-link to="">
        <li
          class="flex items-center gap-3 text-xl text-black hover:text-black cursor-pointer"
        >
          <b>Новости</b>
        </li>
      </router-link>
      <router-link to="">
        <li
          class="flex items-center gap-3 text-xl text-black hover:text-black cursor-pointer"
        >
          <b>Контакты</b>
        </li>
      </router-link>
    </ul>
    <router-link to="/authorization" class="flex items-center">
      <button
        class="rounded-md flex items-center bg-blue-400 text-white border border-transparent py-2 px-4 text-center text-xl transition-all hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Личный кабинет

        <img src="/public/img/profile.svg" alt="twitter" class="h-5 w-5 ml-2" />
      </button>
    </router-link>
  </header>
</template>
