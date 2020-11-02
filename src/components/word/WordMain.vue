<template>
  <div class="word-main">
    <SingleWordRow v-for="w in words" :key="w.id" :word="w.word" :id="w.id">
    </SingleWordRow><br>
  </div>
</template>

<script>
import SingleWordRow from "./SingleWordRow";
export default {
  name: "WordMain",
  components: {SingleWordRow},
  props:{
    words: Array,
  }
}
</script>

<style scoped>

</style>