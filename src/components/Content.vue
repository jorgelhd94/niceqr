<template>
  <div class="container lg:w-9/12 rounded-lg bg-white lg:my-24 my-6 px-10 pt-5">
    <logo />

    <div class="flex flex-nowrap flex-col lg:flex-row">
      <div class="flex-1 order-2 lg:order-1 px-6 py-6 overflow-y-auto">
        <control-panel />
      </div>
      <div class="flex-1 order-1 lg:order-2 px-6 py-6">
        <QR />
      </div>
    </div>

    <footer-custom />
  </div>
</template>

<script>
import Logo from './Logo.vue';
import FooterCustom from './Footer.vue';
import QR from './QR/QR.vue';
import ControlPanel from './ControlPanel/ControlPanel.vue';

export default {
  name: 'Content',
  components: {
    Logo,
    FooterCustom,
    QR,
    ControlPanel,
  },
  data() {
    return {
      extension: 'svg',
    };
  },
};
</script>
