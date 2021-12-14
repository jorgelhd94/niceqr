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
    select: Boolean,
  },
  data() {
    return {
      selected:
        'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white',
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

<style scoped></style>
