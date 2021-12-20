import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      options: {
        width: 250,
        height: 250,
        type: 'svg',
        data: 'Enter your text here',
        image: '/favicon.ico',
        // margin: 10,
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.4,
          margin: 20,
          // crossOrigin: 'anonymous',
        },
        dotsOptions: {
          color: '#2a5686',
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
    updateBackground(state, data) {
      if (data.backgroundType === 'color') {
        state.options.backgroundOptions.color = data.color;
        state.options.backgroundOptions.gradient = null;
      } else if (data.backgroundType === 'gradient') {
        state.options.backgroundOptions.gradient = {
          type: data.gradient.aspect,
          rotation: data.gradient.rotation,
          colorStops: [
            { offset: 0, color: data.gradient.color1 },
            { offset: 1, color: data.gradient.color2 },
          ],
        };
        state.options.backgroundOptions.color = null;
      }
    },
    updateCornersAndDots(state, payload) {
      const listKeys = [
        'dotsOptions',
        'cornersDotOptions',
        'cornersSquareOptions',
      ];
      const key = Object.keys(payload)[0];
      const data = payload[key];

      if (listKeys.includes(key)) {
        state.options[key].type = data.type;

        if (data.backgroundType === 'color') {
          state.options[key].color = data.color;
          state.options[key].gradient = null;
        } else if (data.backgroundType === 'gradient') {
          state.options[key].gradient = {
            type: data.gradient.aspect,
            rotation: data.gradient.rotation,
            colorStops: [
              { offset: 0, color: data.gradient.color1 },
              { offset: 1, color: data.gradient.color2 },
            ],
          };
          state.options[key].color = null;
        }
      }
    },
  },
  getters: {},
  actions: {},
});
