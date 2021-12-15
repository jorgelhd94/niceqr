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
      class="accordion-content px-5 pt-0 max-h-0"
      :style="{ overflow: overflow }"
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
  data() {
    return {
      overflow: 'hidden',
    };
  },
  watch: {
    open() {
      if (this.open) {
        this.$refs['content'].style.maxHeight = `${
          this.$refs['content'].scrollHeight + 96
        }px`;

        setTimeout(() => {
          this.overflow = 'visible';
        }, 300);
      } else {
        this.$refs['content'].style.maxHeight = `0px`;
        this.overflow = 'hidden';
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
  transition: max-height 0.2s ease-out, padding 0.3s ease;
}
</style>
