<template>
  <div>
    <!-- Text -->
    <div class="relative p-6">
      <label for="text" class="text-gray-700">
        Content
        <span class="text-red-500 required-dot"> * </span>
      </label>
      <input
        type="text"
        id="text"
        class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="text"
        placeholder="Enter Your Text Here"
        :value="content"
        @input="updateData"
      />
    </div>

    <!-- Options -->

    <!-- Background -->
    <accordion-item
      title="Background"
      :open="listAccordion[0]"
      @toogle="toogle(0, $event)"
    >
      <background-control />
    </accordion-item>

    <!-- Dots -->
    <accordion-item
      title="Dots"
      :open="listAccordion[1]"
      @toogle="toogle(1, $event)"
    >
      <dots-control />
    </accordion-item>

    <!-- Corner Dot -->
    <accordion-item
      title="Corner Dot"
      :open="listAccordion[2]"
      @toogle="toogle(2, $event)"
    >
      <corners-dot-control />
    </accordion-item>

    <!-- Corner Square -->
    <accordion-item
      title="Corner Square"
      :open="listAccordion[3]"
      @toogle="toogle(3, $event)"
    >
      <corners-square-control />
    </accordion-item>

    <!-- Logo -->
    <accordion-item
      title="Logo"
      :open="listAccordion[4]"
      @toogle="toogle(4, $event)"
    >
      <logo-control />
    </accordion-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AccordionItem from '@/components/UI/Accordion/AccordionItem/AccordionItem.vue';
import BackgroundControl from './Controls/BackgroundControl.vue';
import DotsControl from './Controls/DotsControl.vue';
import CornersDotControl from './Controls/CornersDotControl.vue';
import CornersSquareControl from './Controls/CornersSquareControl.vue';
import LogoControl from './Controls/LogoControl.vue';

export default {
  name: 'ControlPanel',
  data() {
    return {
      listAccordion: new Array(5).fill(false),
    };
  },
  components: {
    AccordionItem,
    BackgroundControl,
    DotsControl,
    CornersDotControl,
    CornersSquareControl,
    LogoControl,
  },
  computed: {
    ...mapState({
      content: (state) => state.options.data,
    }),
  },
  methods: {
    toogle(index, open) {
      this.listAccordion[index] = !open;

      if (!open) {
        this.listAccordion = new Array(this.listAccordion.length).fill(false);
        this.listAccordion[index] = true;
      }
    },
    updateData(e) {
      this.$store.commit('updateData', e.target.value);
    },
  },
};
</script>
