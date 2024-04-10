<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartItemList from "./CartItemList.vue";
import InfoBlock from "./InfoBlock.vue";
import {  ref,computed, inject } from "vue";
import axios from "axios";

 const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
})

const  { cart, closeDrawer} = inject('cart')

const isCreatingOrder = ref(false);
const orderId = ref(null);


const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    // Преобразование объектов в массив ID товаров
    const itemIds = cart.value.map(item => item.id);
    // Преобразование массива ID товаров в строку, разделенную запятыми
    const itemIdsString = itemIds.join(',');

    const { data } = await axios.post(`http://127.0.0.1:8000/api/orders`, {
      itemstId: itemIdsString,
      totalPrice: props.totalPrice.value
    });

    // Очистка корзины после создания заказа
    cart.value = [];

    orderId.value = data.id;
    console.log(data.id)
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    isCreatingOrder.value = false
  }
};

const cartIsEmpty = computed(() => cart.value.length === 0)


const buttonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value)


</script>
<template>
  <div>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />


    

   <div v-if="!totalPrice || orderId" class="flex h-full items-center">
    <InfoBlock 
    v-if="!totalPrice && !orderId"
     title="Корзина пустая"
      description="Добавьте хотя бы один товар, чтобы сделать заказ."
       image-url="/package-icon.png"/>

       <InfoBlock 
       v-if="orderId"
     title="Заказ оформлен !"
      :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
       image-url="/order-success-icon.png"/>

   </div>

   <div v-else>
    <CartItemList />

<div  class="flex flex-col gap-4 mt-7">
  <div class="flex gap-2 items-baseline">
    <span>Итого:</span>
    <div class="flex-1 border-b border-dashed"></div>
    <b>{{totalPrice}} руб.</b>
  </div>

  <div class="flex gap-2 items-baseline">
    <span>Налог 5%:</span>
    <div class="flex-1 border-b border-dashed"></div>
    <b>{{vatPrice}} руб.</b>
  </div>
  <button
    @click="createOrder"
    :disabled="buttonDisabled"
    class="mt-4transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-700 cursor-pointer"
  >
    Оформить заказ
  </button>
</div>
   </div>
  </div>
</div>
</template>
