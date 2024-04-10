<script setup>
import axios from "axios";
import { inject, reactive, watch, ref, onMounted } from "vue";
import CardList from '../components/CardList.vue';


const {cart, addToCart, removeFromCart} = inject('cart');

const items = ref([]); // { value[] }

const filters = reactive({
  sortBy: "title",
  searchQuery: "",
});

const onclickAddPlus = (item) => {
  if(!item.isAdded){
    addToCart(item)
  }
  else{
   removeFromCart(item)
  }
  console.log(cart)
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
}

const addToFavorite = async (item)=>{
try {
if(!item.isFavorite) {
  const obj = {
  itemId : item.id
};

  item.isFavorite = true;

  const { data } = await axios.post(`http://127.0.0.1:8000/api/favorites`, obj)
  item.favoriteId = data.id;


  console.log(data);
}else{
  item.isFavorite = false;
  await axios.delete(`http://127.0.0.1:8000/api/favorites/${item.favoriteId}/delete`)
  item.favoriteId = null;
}
} catch (error) {
  console.log(error)
}
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value;
};  

const fetchFavorites = async () => {
  try {
 
    const { data: favorites } = await axios.get(`http://127.0.0.1:8000/api/favorites`)
    items.value = items.value.map(item => {
      const favorite = favorites.favorites.find(favorite => favorite.itemId === item.id);

      if(!favorite) {
        return item;
      }

      return{
        ...item,
        isFavorite: true, 
        favoriteId : favorite.id,
      }

    })
  } catch (err) {
    console.log(err);
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `${filters.searchQuery}`;
    }
    const { data } = await axios.get(`http://127.0.0.1:8000/api/items`, {
      params,
    });

    items.value = data.items.map(obj => ({
      ...obj,
      isFavorite : false,
      favoriteId: null,
      isAdded: false
    }));
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () =>{
const localCart = localStorage.getItem('cart');
cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
});



watch(cart , () =>{

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
}

);

watch(filters, fetchItems);
</script>

<template>
    <div>
         <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все товары</h2>
        <div class="flex gap-4">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border rounded-md outline-none"
            name=""
            id=""
          >
            <option value="title">По названию</option>
            <option value="price">По цене(сначала недорогие)</option>
            <option value="-price">По цене(сначала дорогие)</option>
          </select>
          <div class="relative">
            <img class="absolute left-4 top-2.5" src="/search.svg" alt="" />
            <input
              @input="onChangeSearchInput"
              class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <CardList :items="items" @add-to-favorite = "addToFavorite" @add-to-cart="onclickAddPlus"/>
      </div>
    </div>
</template>