<template>
  <div id="qr-code" ref="qrCode"></div>
</template>

<script>

export default {
  name: 'QR',
  props: {
    qrCode: Object,
  },
  mounted: function () {
    this.qrCode.append(this.$refs['qrCode']);
    this.setClassToQR();
  },
  watch: {
    ['options.data']: function () {
      this.qrCode.update(this.options);
    },
  },
  methods: {
    setClassToQR() {
      document.getElementsByTagName('svg')[0].classList.add('mx-auto');
      document.getElementsByTagName('svg')[0].classList.add('xl:ml-auto');
    },
  },
};
</script>
