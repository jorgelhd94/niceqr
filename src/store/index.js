import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      options: {
        width: 250,
        height: 250,
        type: 'svg',
        data: 'Enter your text here',
        image: '',
        // margin: 10,
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.4,
          margin: 2,
          crossOrigin: 'anonymous',
        },
        dotsOptions: {
          color: '#2a5686',
          // gradient: {
          //   type: 'linear', // 'radial'
          //   rotation: 0,
          //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
          // },
          type: 'extra-rounded',
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
          // color: '#35495E',
          type: 'dot',
          gradient: {
            type: 'linear', // 'radial'
            rotation: 120,
            colorStops: [{ offset: 0, color: '#cccef4' }, { offset: 1, color: '#154b84' }]
          },
        },
        cornersDotOptions: {
          color: '#79b3ff',
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
    updateLogo(state, url) {
      state.options.image = url;
    },
    updateimageOptions(state, data) {
      if (data.imageSize > 0 && data.imageSize <= 1) {
        state.options.imageOptions.imageSize = data.imageSize;
      }

      if (data.imageSize > 0 && data.imageSize <= 100) {
        state.options.imageOptions.margin = data.margin;
      }
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
