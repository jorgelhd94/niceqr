import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      options: {
        width: 300,
        height: 300,
        type: 'svg',
        data: 'JCode Studio',
        image: '/favicon.ico',
        margin: 10,
        qrOptions: {
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'Q',
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
          type: 'rounded',
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
        },
      },
    };
  },
  mutations: {
    updateData(state, data) {
      state.options.data = data;
    },
  },
  getters: {},
  actions: {},
});
