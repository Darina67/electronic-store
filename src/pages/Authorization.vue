<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-bold mb-4">Авторизация</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email:</label
          >
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            :class="{ 'border-red-500': emailError !== '' }"
            class="mt-1 p-2 border rounded-md w-full"
            required
          />

          <span v-if="emailError" class="text-red-500 text-sm">{{
            emailError
          }}</span>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Пароль:</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Войти
        </button>
      </form>
      <p class="mt-4 text-sm">
        Нет аккаунта?
        <router-link to="/registration" class="text-blue-500"
          >Зарегистрироваться</router-link
        >
      </p>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import axios from "axios";
import Toast from "../components/Toast.vue";

export default {
  components: {
    Toast,
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "", // Добавляем переменную для отображения ошибки валидации email
    };
  },
  methods: {
    async login() {
      try {
        if (!this.validateEmail(this.email)) {
          this.emailError = "Пожалуйста, введите корректный email";
          return;
        }

        this.emailError = "";
        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(() => {
          axios
            .post("http://127.0.0.1:8000/login", {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              console.log(response);
              this.$router.push({ name: "Profile" });
            })
            .catch((error) => {
              console.error("Ошибка при попытке входа:", error);
              this.$refs.toast.showToast(
                "Неправильный Email или пароль. Проверьте данные и попробуйте еще раз!",
              );
            });
        });

        this.$router.push({ name: "Profile" });
      } catch (error) {
        console.error("Ошибка авторизации:", error);
        this.$refs.toast.showToast(
          "Неправильный Email или пароль. Проверьте данные и попробуйте еще раз!",
        );
      }
    },
    validateEmail(email) {
      // Простая проверка на корректный формат email
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>
