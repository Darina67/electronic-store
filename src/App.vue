<script setup>
import { reactive, ref, provide, watch, computed } from "vue";

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
import Footer from "./components/Footer.vue";

const props = defineProps(["items"]);

/*КОРЗИНА (START)*/
const cart = ref([]);

const drawerOpen = ref(false);

const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price, 0),
);
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const closeDrawer = () => {
  drawerOpen.value = false;
};

const openDrawer = () => {
  drawerOpen.value = true;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true },
);

provide("cart", {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
});

/*КОРЗИНА (END)*/
</script>
<template>
  <div>
    <Drawer v-if="drawerOpen" :total-price="totalPrice" :vat-price="vatPrice" />
    <div class="w-4/5 mx-auto rounded-xl shadow-xl mt-14">
      <Header :total-price="totalPrice" @open-drawer="openDrawer" />
      <div class="p-10">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>
<style>
@import "./assets/main.css";
</style>
