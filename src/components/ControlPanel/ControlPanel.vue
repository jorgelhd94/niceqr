<template>
  <div>
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
import AccordionItem from '@/components/AccordionItem/AccordionItem.vue';
export default {
  name: 'ControlPanel',
  props: {
    options: Object,
  },
  data() {
    return {
      listAccordion: [false, false, false],
    };
  },
  components: {
    AccordionItem,
  },
  methods: {
    toogle(index, open) {
      this.listAccordion[index] = !open;

      if (!open) {
        this.listAccordion = new Array(this.listAccordion.length).fill(false);
        this.listAccordion[index] = true;
      }
    },
  },
};
</script>
