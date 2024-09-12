<template>
  <div class="container max-w-screen-xl mx-auto">
    <div class="section-main">
      <div class="block-wrapper flex justify-between">
        <div class="left-block">
          <div class="main-title text-4xl">Найди идеальный курс</div>
          <div>
            <div class="main-second-title text-4xl">И прокачай свои</div>
            <span class="text-white">навыки</span>
          </div>
          <div class="background-item first">
            <img src="/public/img/background-item1.png" alt="" />
          </div>
        </div>
        <div class="right-block">
          <div class="main-img">
            <img src="/public/img/main-art.png" alt="SmolArt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        "/main/slider-1.png",
        "/main/slider-2.png",
        "/main/slider-3.png",
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
/* Стили для навигационных стрелок */
.swiper-button-next,
.swiper-button-prev {
  color: black; /* Черный цвет для стрелок */
}

/* Стили для точек pagination */
.swiper-pagination-bullet {
  background-color: black; /* Черный цвет для точек */
}
</style>
