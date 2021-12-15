<template>
  <div
    class="flex-none w-max px-2 mr-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
    :class="[getClass()]"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    text: String,
    design: String, // single, gradient
    select: Boolean,
  },
  mounted() {
    this.selected = this.design === 'single' ? this.single : this.gradient;
  },
  data() {
    return {
      single:
        'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white',
      gradient: 'gradient focus:ring-indigo-500 text-white',
      selected: '',
      unselected:
        'bg-gray-400 hover:bg-gray-500 focus:ring-indigo-500 text-white',
    };
  },
  methods: {
    getClass() {
      return this.select ? this.selected : this.unselected;
    },
  },
};
</script>

<style scoped>
.gradient {
  background: rgb(11, 9, 33);
  background: linear-gradient(
    270deg,
    rgba(11, 9, 33, 1) 0%,
    rgba(79, 70, 229, 1) 100%
  );

}

.gradient:hover {
  background: rgb(11, 9, 33);
  background: linear-gradient(
    90deg,
    rgba(11, 9, 33, 1) 0%,
    rgba(79, 70, 229, 1) 100%
  );
}
</style>
