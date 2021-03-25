<template>
  <div class="container-fluid">
    <div class="row about form-bg">
      <div class="col-7 mx-5">
        <div class="h-45 mx-5">
          <h2>Analysing With Preptime Analyser</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            error rem consequatur ad unde tempora dolore? Provident reiciendis,
            libero unde voluptatum impedit quod odio quibusdam consequuntur
            dignissimos. Eligendi, cum. Obcaecati? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Rerum quod neque facere, in molestiae
            labore ipsum, vel animi, dignissimos repellendus asperiores ut quae!
            Sint similique incidunt doloribus deleniti dolore quas.
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
        <h2 class="text-center my-5">Research & Development</h2>
        <div>
          <br />
          <br />
        </div>
      </div>
      <div class="col rnd2">
        <h2>
          This is a google forms addon to analyse quizzes after submission.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aperiam
          minus aspernatur eveniet quo minima magni ducimus possimus
          necessitatibus, libero debitis numquam. Accusamus magnam accusantium
          quam aliquid. Rerum, debitis eum! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eum minima voluptatem error veniam rem
          fugit, tempora tempore dignissimos recusandae repudiandae. Perferendis
          optio provident dignissimos fugiat cum corporis quae accusantium
          alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          harum ut hic est delectus voluptatum, animi, laborum id accusamus
          eaque
        </p>
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
        <h2>Get Your Analysis Ready In Seconds.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          sit perferendis nisi ea quae voluptatum vel atque aut fugit at est,
          tempore ratione impedit explicabo delectus quia facilis voluptatibus?
          Iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          repellendus velit soluta debitis natus rem quisquam, tempore porro ex
          quia iure impedit aliquam veritatis odio ipsum eligendi corrupti
          dignissimos! Deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas error modi veritatis commodi saepe. Voluptas
          libero et unde eum repellat reiciendis! Nihil velit, accusamus fugit
          sapiente laudantium libero at harum.
        </p>
      </div>
    </div>
    <div class="row graph">
      <div class="col lap3-caption">
        <h2>Graph Of Correct Responses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          similique aut, aliquam voluptates excepturi dicta omnis, corporis quod
          repudiandae deserunt iste facilis voluptas ullam veniam culpa earum
          placeat voluptate quisquam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet accusantium quibusdam ducimus molestias
          atque voluptatum adipisci assumenda voluptates totam. Aliquam
          similique magni a eos minus molestiae cum iste laboriosam id. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. A, non dignissimos?
          Esse, quidem commodi qui labore corporis maiores dolores dolore
          dolorem aliquid cupiditate itaque quo incidunt pariatur inventore
          facere voluptatibus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Incidunt distinctio officia quos harum, rem quae
          magni sint autem error quas saepe? Enim, eveniet et fuga hic doloribus
          aliquid dignissimos quisquam.
        </p>
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
  created () {
    this.getHomeData();
  },

  methods : {
    async getHomeData(){
      const data = await this.$axios.$get('/home-page')
      this.homeData = data
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
