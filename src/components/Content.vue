<template>
  <div class="container 2xl:w-1/2 rounded-lg bg-white lg:mt-24 mt-6 px-10 pt-5">
    <logo />

    <div class="flex flex-nowrap flex-col lg:flex-row">
      <div class="flex-1 order-2 lg:order-1 px-6 py-6 overflow-y-auto">
        <control-panel :options="options"/>
      </div>
      <div class="flex-2 order-1 lg:order-2 px-6 py-6">
        <QR :qrCode='qrCode'/>
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

import QRCodeStyling from 'qr-code-styling';

export default {
  name: 'Content',
  components: {
    Logo,
    FooterCustom,
    QR,
    ControlPanel,
  },
  data() {
    const options = {
      width: 300,
      height: 300,
      type: 'svg',
      data: 'JCode Studio',
      image: '/favicon.ico',
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 20,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#41b583',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#35495E',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#35495E',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    };
    return {
      options,
      extension: 'svg',
      qrCode: new QRCodeStyling(options)
    }
  },
};
</script>
