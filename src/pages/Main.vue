<template>
  <div class="container max-w-screen-xl mx-auto">
    <swiper
      ref="mySwiper"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <!-- Ссылка на первый слайд -->
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <router-link v-if="index === 0 || 1 || 2" to="/"
          ><img
            class="rounded-3xl h-[550px] w-full object-cover"
            :src="slide"
            alt=""
        /></router-link>
        <img
          v-else
          class="rounded-3xl h-[550px] w-full object-cover"
          :src="slide"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <section class="section category">
      <div class="title">
        <h2 class="text-5xl text-center mt-[70px]">
          Самые актуальные категории
        </h2>
      </div>
      <div class="subtitle text-center mx-auto w-3/5 mt-8 mb-[20px]">
        <h3 class="text-base">
          каждая категория девайсов представляет собой уникальное путешествие в
          мир технологий и инноваций. От изящных смартфонов, которые станут
          вашим надежным спутником в повседневных задачах, до мощных ноутбуков,
          которые подарят вам свободу творчества в любом месте и в любое время.
        </h3>
      </div>
      <div class="categories flex">
        <div class="category-column category-column__first">
          <div
            class="w-[640px] min-h-[472px] shadow-lg rounded-md relative cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="catergory-card__image">
              <img class="pl-10" src="/main/category-laptops.png" alt="" />
            </div>
            <div
              class="category-card__info w-[200px] absolute right-10 bottom-3"
            >
              <div class="category-card__title text-right">Ноутбуки</div>
              <div class="category-card__subtitle text-3xl font-semibold">
                Современное решение
              </div>
            </div>
          </div>
          <div
            class="w-[640px] min-h-[270px] shadow-lg mt-12 rounded-md relative cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="catergory-card__image">
              <img src="/main/category-watch.png" alt="" />
            </div>
            <div
              class="category-card__info w-[200px] absolute right-5 bottom-20"
            >
              <div class="category-card__title">Часы</div>
              <div class="category-card__subtitle text-3xl font-semibold">
                Не просто стильно
              </div>
            </div>
          </div>
        </div>
        <div class="category-column categoty-column__second ml-6">
          <div
            class="w-[312px] min-h-[790px] shadow-lg rounded-md relative cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="catergory-card__image">
              <img
                class="w-full pt-20"
                src="/main/category-phones.png"
                alt=""
              />
            </div>
            <div
              class="category-card__info w-[250px] absolute right-8 bottom-36 text-center"
            >
              <div class="category-card__title">Смартфоны</div>
              <div class="category-card__subtitle text-3xl font-semibold">
                Он упростит вашу жизнь
              </div>
            </div>
          </div>
        </div>
        <div class="category-column categoty-column__third ml-6">
          <div
            class="w-[312px] min-h-[790px] shadow-lg rounded-md relative cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="catergory-card__image">
              <img
                class="w-full absolute bottom-36"
                src="/main/category-tablet.png"
                alt=""
              />
            </div>
            <div
              class="category-card__info w-[250px] absolute text-center right-8 top-8"
            >
              <div class="category-card__title">Смартфоны</div>
              <div class="category-card__subtitle text-3xl font-semibold">
                Расширь границы работы
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section most-selled">
      <div class="title">
        <h2 class="text-5xl text-center mt-[70px]">
          Наши самые продаваемые товары
        </h2>
      </div>
      <div class="subtitle text-center mx-auto w-3/5 mt-8 mb-[20px]">
        <h3 class="text-base">Новый лимитированный MacBook Air M1</h3>
      </div>
      <div class="products flex space-x-4">
        <div class="product max-w-[305px] min-h-[400px] relative">
          <div class="product__image">
            <img src="/main/selled-items1.png" alt="" />
          </div>
          <div class="product__title text-2xl font-bold mb-2.5">
            MacBook Pro 13
          </div>
          <div class="product__subtitle">
            Новый чип M2 делает 13-дюймовый MacBook Pro более функциональным,
            чем когда-либо.
          </div>
          <div class="product__price text-lg absolte bottom-0">
            122 990 руб.
          </div>
        </div>
        <div class="product max-w-[305px] min-h-[400px] relative">
          <div class="product__image">
            <img src="/main/selled-items2.png" alt="" />
          </div>
          <div class="product__title text-2xl font-bold mb-2.5">
            Smart Galaxy Watch 3
          </div>
          <div class="product__subtitle">
            Умное устройство, где часы - лишь одна из многих функций
          </div>
          <div class="product__price text-lg">95 990 руб.</div>
        </div>
        <div class="product max-w-[305px] min-h-[400px] relative">
          <div class="product__image">
            <img src="/main/selled-items3.png" alt="" />
          </div>
          <div class="product__title text-2xl font-bold mb-2.5">
            MacBook Air M1
          </div>
          <div class="product__subtitle">
            MacBook Air с чипом Apple M1 — это воплощение инновационных
            технологий и дизайнерского мастерства.
          </div>
          <div class="product__price text-lg">95 990 руб.</div>
        </div>
        <div class="product max-w-[305px] min-h-[400px] relative">
          <div class="product__image">
            <img src="/main/selled-items4.png" alt="" />
          </div>
          <div class="product__title text-2xl font-bold mb-2.5">iPad</div>
          <div class="product__subtitle">
            Планшет Apple iPad одновременно воплощает в себе фирменный стиль,
            технологичность и функциональность.
          </div>
          <div class="product__price text-lg">57 990 руб.</div>
        </div>
      </div>
    </section>
    <section class="section best">
      <div class="title">
        <h2 class="text-5xl text-center mt-[70px]">Все самое лучшее здесь</h2>
      </div>
      <div class="subtitle text-center mx-auto w-3/5 mt-8 mb-[20px]">
        <h3 class="text-base">Лучшая техника твоего города</h3>
      </div>
      <div class="best-cards flex justify-between">
        <div class="best-card bg-[#F8F9FA] w-[413px] min-h-[453px] rounded-md">
          <div
            class="best-card__title text-center text-2xl font-bold pb-8 pt-12"
          >
            Самые последние и лучшие
          </div>
          <div
            class="best-card__button mx-auto py-3.5 border-[1px] rounded-3xl border-black text-center max-w-[190px] hover:bg-[#D9D9D9] cursor-pointer"
          >
            Подробнее
          </div>
          <div class="best-card__image flex justify-center pt-6">
            <img src="/main/thebest-1.png" alt="" />
          </div>
        </div>
        <div class="best-card bg-[#F8F9FA] w-[413px] min-h-[453px]">
          <div
            class="best-card__title text-center text-2xl font-bold pb-8 pt-12 rounded-md"
          >
            Самые продаваемые
          </div>
          <div
            class="best-card__button mx-auto py-3.5 border-[1px] rounded-3xl border-black text-center max-w-[190px] hover:bg-[#D9D9D9] cursor-pointer"
          >
            Подробнее
          </div>
          <div class="best-card__image flex justify-center pt-6">
            <img src="/main/thebest-2.png" alt="" />
          </div>
        </div>
        <div class="best-card bg-[#F8F9FA] w-[413px] min-h-[453px] rounded-md">
          <div
            class="best-card__title text-center text-2xl font-bold pb-8 pt-12"
          >
            Все товары
          </div>
          <div
            class="best-card__button mx-auto py-3.5 border-[1px] rounded-3xl border-black text-center max-w-[190px] hover:bg-[#D9D9D9] cursor-pointer"
          >
            Подробнее
          </div>
          <div class="best-card__image flex justify-center pt-6">
            <img src="/main/thebest-3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="section blog" id="blog">
      <div class="title">
        <h2 class="text-5xl text-center mt-[70px]">Гаджеты в фокусе</h2>
      </div>
      <div class="subtitle text-center mx-auto w-3/5 mt-8 mb-[20px] mb-[56px]">
        <h3 class="text-base">Советы и новости в мире техники</h3>
      </div>
      <div class="b-columns flex justify-between">
        <div class="b-left">
          <div class="b-left__image">
            <img class="w-[620px]" src="/main/ideas1.png" alt="" />
          </div>
        </div>
        <div class="b-right max-w-[570px]">
          <div class="b-right__info">
            <li class="info__item list-none text-2xl mb-8">
              Грядущие тренды в мире носимых устройств: Что стоит ожидать в этом
              году?
            </li>
            <li class="info__item list-none text-2xl mb-8">
              Смарт-технологии будущего: Представляем вам последние разработки в
              индустрии гаджетов
            </li>
            <li class="info__item list-none text-2xl mb-8">
              Автоматизация и роботизация: Какие новые устройства меняют способ,
              которым мы взаимодействуем с техникой
            </li>
            <li class="info__item list-none text-2xl">
              Искусственный интеллект в повседневной жизни: Какие умные решения
              облегчают нашу жизнь
            </li>
          </div>
        </div>
      </div>
      <div class="b-more flex cursor-pointer justify-center mt-12">
        <div class="">Подробнее</div>
        <div class="arrow"><img src="/main/right-up.png" alt="" /></div>
      </div>
    </section>
    <section class="section contact" id="contact">
      <div
        class="b-contact w-[935px] min-h-[450px] bg-[#DCE5E2] rounded-2xl mx-auto mt-20"
      >
        <div class="title pt-[47px]">
          <h2 class="text-5xl text-center">Никогда ничего не пропускай</h2>
        </div>
        <div class="subtitle text-center mx-auto w-3/5 mt-8 mb-[20px]">
          <h3 class="text-base">
            Подпишитесь на рассылку, чтобы получать уведомления о наших выгодных
            предложениях.
          </h3>
        </div>
        <div class="contact-img">
          <img class="mx-auto" src="/main/contact-to-news.png" alt="" />
        </div>
        <div class="b-submit flex justify-center pb-10 pt-5">
          <form action="" class="relative">
            <input
              class="py-3 w-[485px] rounded-2xl border-[1px] border-black placeholder:pl-5"
              type="text"
              placeholder="E-mail"
            />
            <button
              type="submit"
              class="h-[50px] w-[115px] rounded-r-2xl bg-black text-white absolute right-0 hover:bg-[#333030] cursor-pointer"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </section>
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
