<template>
  <div class="container-fluid" v-if="homeData.feature">
    <div class="row about form-bg">
      <div class="col-7 mx-5">
        <div class="h-45 mx-5">
          <h2>{{homeData.feature[0].name}}</h2>
          <p v-html="homeData.feature[0].description">
          </p>
        </div>
      </div>
      <div class="col intro-lap">
        <img
          src="~assets/images/analser1.png"
          height="214px"
          width="326px"
          alt=""
        />
      </div>
    </div>
    <div class="row">
      <div class="col rnd">
        
        <div>
          <br />
          <br />
        </div>
      </div>
      <div class="col rnd2">
        <h2>
          {{homeData.feature[1].name}}
        </h2>
        <p v-html="homeData.feature[1].description"></p>
      </div>
    </div>

    <div class="row">
      <div class="col lap2 sheet-bg">
        <img
          class="mx-5"
          src="~assets/images/analser2.png"
          height="281px"
          width="395px"
          alt=""
        />
      </div>
      <div class="col lap2-caption">
        <h2>{{homeData.feature[2].name}}</h2>
        <p v-html="homeData.feature[2].description"></p>
      </div>
    </div>
    <div class="row graph">
      <div class="col lap3-caption">
        <h2>{{homeData.feature[3].name}}</h2>
        <p v-html="homeData.feature[3].description"></p>
      </div>
      <div class="col mx-5 lap3 sheet-bg">
        <img
          src="~assets/images/analser3.png"
          height="251px"
          width="342px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      homeData:{}
    }
  },
  async beforeMount () {
    await this.getHomeData();
  },

  methods : {
    async getHomeData(){
      const data = await this.$axios.$get('/home-page')
      this.homeData =  data
    }
  }
}
</script>

<style>
.top-buffer {
  margin-top: 1em;
}
.h-45 {
  padding: 1%;
  height: 100%;
  width: 85%;
  background: rgba(36, 145, 206, 0.95);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.rnd {
  background: #e8d315;
}

.rnd2 {
  background: #fffcfc;
}

.lap2-caption {
  background: #bd2121;
}
.lap3-caption {
  background: #33a021;
}
.h-45 h2,
.h-45 p {
  color: #fffdfd;
}
.lap2-caption h2,
.lap2-caption p {
  color: #fffdfd;
}
.lap3-caption h2,
.lap3-caption p {
  color: #fffdfd;
}
</style>
