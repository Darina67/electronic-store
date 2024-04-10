<template>
  <div v-if="show" class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000); // Закрываем уведомление через 3 секунды
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
