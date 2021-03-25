<template>
    <div class="container">
        
        <div class="display-5">
            {{article.title}}
        </div>
        <div v-html="article.content"></div>
    </div>
</template>

<script>
import { compareAsc, format } from "date-fns";
export default {
  data() {
    return {
      article: {},
      format,
    };
  },
  created() {
      console.log(`/articles/${this.$route.params.id}`)
    this.getArticle();
  },

  methods: {
    async getArticle() {
      const data = await this.$axios.$get(`/articles/${this.$route.params.id}`);
      this.article = data;
    },
  },
};
</script>
<style scoped>

</style>