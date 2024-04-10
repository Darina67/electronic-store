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
        <img src="/logo.png" alt="Logo" />
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <router-link to="/shop">
        <li
          class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <b>Каталог</b>
        </li>
      </router-link>
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/favorites">
        <li
          class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/heart.svg" alt="Heart" />
          <b>Закладки</b>
        </li>
      </router-link>
      <router-link to="/authorization">
        <li
          class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <img src="/profile.svg" alt="Profile" />
          <b>Профиль</b>
        </li>
      </router-link>
    </ul>
  </header>
</template>
