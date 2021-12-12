<template>
  <div id="qr-code" ref="qrCode"></div>
</template>

<script>
import QRCodeStyling from 'qr-code-styling';

export default {
  name: 'QR',
  mounted: function () {
    this.qrCode.append(this.$refs['qrCode']);
    document.getElementsByTagName('canvas')[0].classList.add('mx-auto');
  },
  watch: {
    ['options.data']: function () {
      this.qrCode.update(this.options);
    },
  },
  data() {
    return {
      qrCode: new QRCodeStyling({
        data: 'http://qr-code-styling.com',
      }),
    };
  },
};
</script>
