<template>
  <div class="flex flex-nowrap flex-col mx-4 mb-4">
     <!-- Color & Gradient -->
    <div class="flex-1 m-2">
      <color-menu :options="options" @set-options="setOptions($event)" />
    </div>
  </div>
</template>

<script>
import ColorMenu from '@/components/UI/ColorMenu/ColorMenu.vue';

export default {
  name: 'BackgroundControl',
  components: {
    ColorMenu,
  },
  data() {
    return {
      options: {
        backgroundType: 'color', // color, gradient
        color: this.$store.state.options.backgroundOptions.color,
        gradient: { // Default
          aspect: 'linear',
          rotation: 120,
          color1: '#ffffff',
          color2: '#9ca8b5',
        },
      },
    };
  },
  computed: {
    // color() {
    //   return this.$store.state.options.dotsOptions.color;
    // },
  },
  methods: {
    customType(type) {
      type = type.split('-').reduce((prev, curr) => {
        if (curr) {
          curr += ' ';
        }
        return (prev += curr.charAt(0).toUpperCase() + curr.slice(1));
      }, '');
      return type;
    },
    setOptions(newOptions) {
      this.options = { ...newOptions };
    },
  },
  watch: {
    options: {
      handler() {
        this.$store.commit('updateBackground', this.options);
      },
      deep: true,
    },
  },
};
</script>
