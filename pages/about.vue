<template>
  <div>
    <div class="about">
      <h4>About</h4>
      <h2>Bringing the benefits of PrepTime Analyser to Every Educator</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus, hic voluptatibus repellat magnam pariatur ad animi tempora
        voluptatum? Architecto corrupti error esse quod earum numquam ad ullam
        aspernatur doloribus?
      </p>
    </div>

    <div class="price">
      <div class="row justify-content-around">
        <h3>Pricing</h3>
        <div class="col-1">
          <h3>Free</h3>
          <h6>Free</h6>
          <button class="">Start</button>
          <hr class="hr-light" />
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div class="col-1">
          <h3>Basic</h3>
          <h6>Gh₵ 10 / month</h6>
          <button class="">Buy</button>
          <hr class="hr-light" />
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div class="col-1">
          <h3>Standard</h3>
          <h6>Gh₵ 80 / month</h6>
          <button class="">Buy</button>
          <hr class="hr-light" />
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div class="col-1">
          <h3>Enterprise</h3>
          <h6>Gh₵ 250 / month</h6>
          <button class="">Buy</button>
          <hr class="hr-light" />
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row no-gutters studs">
      <div class="col-2 align-self-start">
        <img
          src="~assets/images/accra_col1.jpg"
          height="235px"
          width="313px"
          alt=""
        />
      </div>
      <div class="col align-self-center">
        <h4>Analyse from Google Forms</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
          accusamus sint! Eligendi asperiores delectus, quam dolore veritatis
          id! Error consequatur officiis laudantium reprehenderit eius ad id
          dolore possimus deserunt! Ab.
        </p>
      </div>
      <div class="col align-self-end">
        <img src="~assets/images/nap.jpg" height="235px" width="313px" alt="" />
      </div>
    </div>

    <div class="btn-caption">
      <div class="evrtng">
        <h6>PrepTime Analyser In Action</h6>
        <h3>Everything you need to know about PrepTime Analyser</h3>
        <button>Blog</button>
      </div>
      <div class="row">
        <div class="col">
          <img
            src="~assets/images/analser3.png"
            height="206px"
            width="281px"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="~assets/images/google-analytics-dashboard-business-analytics-computer-icons-business.png"
            height="208px"
            width="208px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  position: absolute;
  width: 310px;
  height: 180px;
  left: 268px;
  top: 81px;

  background: #fff9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.about h4 {
  position: absolute;
  top: 18px;
  width: 68px;
  height: 22px;
  font-size: 15px;
  font-family: Roboto;
  font-weight: normal;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
}

.about h2 {
  position: absolute;
  left: 10px;
  top: 47px;
  width: 262px;
  font-family: Squada One;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
}

.about p {
  position: absolute;
  width: 282px;
  height: 76px;
  left: 10px;
  top: 85px;
  font-family: Tuffy;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.76);
}

.price {
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 275px;
  top: 274px;
  background: #3e4f5c;
}

.studs {
  position: absolute;
  top: 558px;
  left: 300px;
}

.evrtng {
  position: absolute;
  top: 752px;
}
.evrtng img {
  position: absolute;
  top: 812px;
}

.price .row .col-1 {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 191px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.btn-caption {
  position: absolute;
  top: 770px;
  width: 100%;
  background: #ffffff;
}
.studs .col-2{
  position: absolute;
  left: 650px;
}

.studs .align-self-center{
  position: absolute;
  width: 226px;
  left: 647px;
  top: 143px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>