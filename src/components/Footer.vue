<template>
  <footer class="h-[300px] pt-20 bg-[#F8F9FA]">
    <div class="footer-container max-w-[1294px] w-full mx-auto">
      <div class="b-columns flex justify-between">
        <div class="b-first__column">
          <div class="logo">
            <router-link to="/">
              <div>
                <img src="/logo.png" alt="Logo" />
              </div>
            </router-link>
            <div class="logo-info max-w-[350px] pt-5">
              Здесь вы окунетесь в мир передовых технологий, где каждый гаджет —
              это не просто устройство, а источник вдохновения. Наши полки
              наполнены техникой, которая изменит вашу жизнь.
            </div>
          </div>
        </div>
        <div class="b-second__column">
          <div class="title text-2xl font-bold mb-5">Полезные ссылки</div>
          <div class="list">
            <li class="list__items list-none pb-3">О компании</li>
            <li class="list__items list-none pb-3">
              <router-link to="/shop">Товары</router-link>
            </li>
            <li class="list__items list-none pb-3">
              <a href="#contact"> Контакты </a>
            </li>
            <li class="list__items list-none"><a href="#blog">Блог</a></li>
          </div>
        </div>
        <div class="b-third__column">
          <div class="title text-2xl font-bold mb-5">Мы в соц. сетях</div>
          <div class="list">
            <li class="list__items list-none pb-3">Вконтакте</li>
            <li class="list__items list-none pb-3">Youtube</li>
            <li class="list__items list-none pb-3">Instagram</li>
            <li class="list__items list-none pb-3">
              <a href="mailto:info@technohub@mail.ru">info@technohub@mail.ru</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
