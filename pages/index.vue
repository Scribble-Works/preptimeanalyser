<template>
  <div>
    <div class="row about">
      <div class="col intro">
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
      <div class="col intro-lap">
        <img
          src="~assets/images/analser1.png"
          height="284px"
          width="426px"
          alt=""
        />
      </div>
    </div>

    <div class="row">
      <div class="col rnd">
        <h2 class="text-center">Research & Development</h2>
      </div>
      <div class="col rnd2">
        <h2>
          This is a google forms addon to analyse quizzes after submission.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aperiam
          minus aspernatur eveniet quo minima magni ducimus possimus
          necessitatibus, libero debitis numquam. Accusamus magnam accusantium
          quam aliquid. Rerum, debitis eum!
        </p>
      </div>
    </div>

    <div class="row results">
      <div class="col lap2">
        <img
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
          similique magni a eos minus molestiae cum iste laboriosam id.
        </p>
      </div>
      <div class="col lap3">
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
export default {};
</script>

<style>
.row{
  width: auto;
}
.intro {
  /* margin-top: 10%; */
  position: absolute;
  width: 588px;
  height: 249px;
  left: 300px;
  top: 93px;

  background: rgba(36, 145, 206, 0.95);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.intro-lap {
  position: absolute;
  left: 1121px;
  width: 462px;
  top: 75px;
}

.rnd {
  position: absolute;
  width: 1014px;
  height: 170px;
  left: 0px;
  top: 368px;
  background: rgba(232, 211, 21, 1);
}
.rnd h2 {
  position: absolute;
  width: 284px;
  height: 76px;
  left: 255px;
  top: 50px;
  /* font-family: "Squada_One"; */
  font-weight: bold;
  font-style: normal;
  font-size: 25px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 1);
}

.rnd2 {
  position: absolute;
  width: 1050px;
  height: 170px;
  left: 914px;
  top: 368px;
  background: #fffcff;
}
.lap2 {
  position: absolute;
  left: 227px;
  top: 515px;
  width: 395px;
}
.lap2-caption {
  position: absolute;
  width: 1111px;
  height: 248px;
  left: 914px;
  top: 541px;
  background: rgba(189, 33, 33, 1);
}

.lap3-caption {
  position: absolute;
  width: 915px;
  height: 226px;
  left: 0px;
  top: 788px;
  background: rgba(51, 160, 33, 1);
}

.lap3{
  position: absolute;
  width: 342px;
  left: 1225px;
  top: 766px;
}
.intro h2, .intro p {
  color: white;
}

.lap2-caption h2, .lap2-caption p{
  color: white;
}
.lap3-caption h2, .lap3-caption p{
  color: white;
}


</style>
