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
        placeholder="Your Text"
        :value="content"
        @input="updateData"
      />
    </div>

    <!-- Options -->
    <accordion-item
      title="Text"
      :open="listAccordion[0]"
      @toogle="toogle(0, $event)"
    >
      <p class="leading-6 font-light pl-9 text-justify">
        Our asked sex point her she seems. New plenty she horses parish design
        you. Stuff sight equal of my woody. Him children bringing goodness
        suitable she entirely put far daughter.
      </p>
      <button
        class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9"
      >
        Learn more
      </button>
    </accordion-item>

    <accordion-item
      title="Colors"
      :open="listAccordion[1]"
      @toogle="toogle(1, $event)"
    >
      <p class="leading-6 font-light pl-9 text-justify">
        Our asked sex point her she seems. New plenty she horses parish design
        you. Stuff sight equal of my woody. Him children bringing goodness
        suitable she entirely put far daughter.
      </p>
      <button
        class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9"
      >
        Learn more
      </button>
    </accordion-item>

    <accordion-item
      title="Colors"
      :open="listAccordion[2]"
      @toogle="toogle(2, $event)"
    >
      <p class="leading-6 font-light pl-9 text-justify">
        Our asked sex point her she seems. New plenty she horses parish design
        you. Stuff sight equal of my woody. Him children bringing goodness
        suitable she entirely put far daughter.
      </p>
      <button
        class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9"
      >
        Learn more
      </button>
    </accordion-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AccordionItem from '@/components/AccordionItem/AccordionItem.vue';
export default {
  name: 'ControlPanel',
  data() {
    return {
      listAccordion: [false, false, false],
    };
  },
  components: {
    AccordionItem,
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
