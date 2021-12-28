<template>
  <div class="overflow-x-auto" id="qr-code" ref="qrCode"></div>
</template>

<script>
import QRCodeStyling from 'qr-code-styling';

export default {
  name: 'QR',
  data() {
    return {
      qrCode: '',
    };
  },
  computed: {
    options() {
      return this.$store.state.options;
    },
  },
  mounted: function () {
    this.qrCode = new QRCodeStyling(this.options);
    this.qrCode.update({
      data: 'Created by JCode Studio',
    });
    this.qrCode.append(this.$refs['qrCode']);
    this.setClassToQR();
  },
  watch: {
    options: {
      handler() {
        const content = this.options.data;
        let copyOptions = { ...this.options };
        if (!content) {
          copyOptions.data = 'Created by JCode Studio';
        }
        this.qrCode.update(copyOptions);
        this.setClassToQR();
      },
      deep: true,
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
