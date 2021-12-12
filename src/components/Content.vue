<template>
  <div class="container 2xl:w-1/2 rounded-lg bg-white lg:mt-36 mt-6 px-10 pt-5">
    <Logo />

    <div class="flex flex-nowrap flex-col lg:flex-row">
      <div class="flex-1 bg-red-600 order-2 lg:order-1 px-6 py-6">
        <p>Control Panel</p>
      </div>
      <div class="flex-1 order-1 lg:order-2 px-6 py-6">
        <QR />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Logo from './Logo.vue';
import Footer from './Footer.vue';
import QR from './QR/QR.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Logo,
    Footer,
    QR,
  },
};
</script>
