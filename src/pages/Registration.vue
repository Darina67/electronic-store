<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-bold mb-4">Регистрация</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Ф.И.О</label
          >
          <input
            type="text"
            v-model="name"
            name="name"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email:</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            name="email"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Пароль:</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            name="password"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p class="mt-4 text-sm text-center">
        <router-link to="/authorization" class="text-blue-500"
          >Авторизация</router-link
        >
      </p>

      <!-- Добавляем компонент Toast -->
      <toast ref="toast"></toast>
    </div>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/registration",
          {
            name: this.name,
            email: this.email,
            password: this.password,
          },
        );

        // Отображаем всплывающее уведомление
        this.$refs.toast.showToast(
          "Регистрация прошла успешно. Перенаправление на страницу авторизации.",
        );

        // Перенаправляем пользователя на страницу авторизации
        setTimeout(() => {
          this.$router.push({ name: "Authorization" });
        }, 1000); // Перенаправляем через 3 секунды
      } catch (error) {
        console.error("Ошибка регистрации:", error);
        // Обработка ошибки регистрации
        this.$refs.toast.showToast(
          "Ошибка регистрации. Пожалуйста, проверьте введенные данные и повторите попытку.",
        );
      }
    },
  },
};
</script>
