<template>
  <div>
    <div class="container">
      <div class="row top-buffer">
        <h4 class="container display-6">All The Latest</h4>
        <div class="row" v-for="article in articles" :key="article.id">
          <hr />
          <nuxt-link :to="'/blog/'+ article.id">
            <div class="col col-lg-9">
              <h6>{{ format(new Date(article.created_at), "MMM dd") }}</h6>
              <h6 class="container display-6">
                {{ article.title }}
              </h6>
            </div>
            <div v-if="article.featuredImage" class="col">
              <img
                src="~assets/images/nap.jpg"
                height="76px"
                width="101px"
                alt=""
              />
            </div>
          </nuxt-link>
        </div>

        <div v-show="articles < 1" class="btn">
          <div class="btn">
            <NuxtLink
              class="btn btn-secondary btn-lg btn-block"
              to="#"
              role="button"
              >Load More Blog</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { compareAsc, format } from "date-fns";
export default {
  data() {
    return {
      articles: [],
      format,
    };
  },
  created() {
    this.getArticles();
  },

  methods: {
    async getArticles() {
      const data = await this.$axios.$get("/articles");
      this.articles = data;
    },
  },
};
</script>
<style>
</style>