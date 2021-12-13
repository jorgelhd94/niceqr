<template>
  <div class="transition hover:bg-gray-100">
    <!-- header -->
    <div
      class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
      @click="toggle()"
    >
      <i class="fas" :class="open ? 'fa-minus' : 'fa-plus'"></i>
      <h3>{{ title }}</h3>
    </div>
    <!-- Content -->
    <div
      class="accordion-content px-5 pt-0 overflow-hidden max-h-0"
      ref="content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    title: String,
    open: Boolean,
  },
  watch: {
    open() {
      if (this.open) {
        this.$refs['content'].style.maxHeight = `${
          this.$refs['content'].scrollHeight + 32
        }px`;
      } else {
        this.$refs['content'].style.maxHeight = `0px`;
      }
    },
  },
  methods: {
    toggle() {
      this.$emit('toogle', this.open);
    },
  },
};
</script>

<style scoped>
.accordion-content {
  transition: max-height 0.3s ease-out, padding 0.3s ease;
}
</style>
