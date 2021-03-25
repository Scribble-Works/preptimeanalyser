<template>
  <div class="container-fluid form-bg py-5">
    <h3 class="container display-6">About</h3>
    <div class="container container-about">
      <div v-for="content in aboutData.content" :key="content.id">
        <div class=" card card-body " >
        <h5 class="card-title">{{ content.header }}</h5>
        <p class="card-text" v-html="content.content"></p>
        </div>
        <br>
      </div>
    </div>

    <div class=" row pricing px-5 d-flex justify-content-around">
      <div >
        <h3 class="container" style="color:white;">Pricing</h3>
      </div>
      

      <div class="col-sm-3" v-for="content in aboutData.plans" :key="content.id">
        <div class=" card card-body " style="">
        <h5 class="card-title text-center">{{ content.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-center">${{content.priceInCents /100}}</h6>
        <hr>
        <p class="card-text" v-html="content.features[0].description"></p>
        <NuxtLink class="btn btn-secondary btn-sm" type="button" to="/contact" role="button"
            >Start</NuxtLink
          >
        </div>
        <br>
      </div>
      <div><br /></div>
    </div>
    <div class="container">
      <div class="row blog mt-3">
        <div class="col-sm-5">
          <div class="card card-body">
            <h3 class="card-title">PrepTime Analyser in Action</h3>
            <h6 class="card-subtitle">Everything you need to know about PrepTime Analyser</h6>
            <div class="btn">
              <NuxtLink class="btn btn-secondary btn-lg" type="button" to="/blog" role="button"
                >Blog</NuxtLink
              >
            </div>
          </div>
        </div>

        <div class="col-auto">
          <img
            src="~assets/images/analser2.png"
            height="206px"
            width="281px"
            alt=""
          />
        </div>
        <div class="col-auto">
          <img
            src="~assets/images/google-analytics-dashboard-business-analytics-computer-icons-business.png"
            height="216px"
            width="231px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      aboutData:{}
    }
  },
  created () {
    this.getAboutData();
  },

  methods : {
    async getAboutData(){
      const data = await this.$axios.$get('/about-page')
      this.aboutData = data
    }
  }
}
</script>


<style>
.about-sec {
  background: #fff9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 310px;
}

.pricing {
  background: #3e4f5c;
}
.col-md-2{
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.action {
  background: #ffffff;
  width: 254px;
  height: 184px;
}

.btn-sm{
  border-radius: 25px;
  /* width: 100px; */
}

.blog .btn-lg{
  border-radius: 25px;
  width: 130px;
}
</style>