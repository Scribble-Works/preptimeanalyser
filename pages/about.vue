<template>
  <div class="about">
    <div class="container-about">
      <h5>About</h5>
      <h3>Bringing the benefits of Preptime Analyser to every educator</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eum
        doloremque facere dolor sapiente. Soluta laudantium quasi inventore, nam
        ullam placeat iste possimus totam ipsum exercitationem ut, officia id
        rerum?
      </p>
    </div>

    <div class="row justify-content-between pricing">
      <h3>Pricing</h3>
      <div class="container col-2">
        <h3>Free</h3>
        <h5>Free</h5>
        <div class="btn">
          <a class="btn btn-secondary btn-sm" href="#" role="button">Start</a>
        </div>
        <hr />
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
      <div class="container col-2">
        <h3>Basic</h3>
        <h5>GH₵10 / month</h5>
        <div class="btn">
          <a class="btn btn-secondary btn-sm" href="#" role="button">Buy</a>
        </div>
        <hr />
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
      <div class="container col-2">
        <h3>Standard</h3>
        <h5>GH₵80 / month</h5>
        <div class="btn">
          <a class="btn btn-secondary btn-sm" href="#" role="button">Buy</a>
        </div>
        <hr />
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
      <div class="container col-2">
        <h3>Enterprice</h3>
        <h5>GH₵250 / month</h5>
        <div class="btn">
          <a class="btn btn-secondary btn-sm" href="#" role="button">Buy</a>
        </div>
        <hr />
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
    </div>
    
    <div class="row blog">
      <div class="col-2">
        <h6>PrepTime Analyser in Action</h6>
        <h3>Everything you need to know about PrepTime Analyser</h3>
        <div class="btn">
          <a class="btn btn-secondary btn-blog" href="#" role="button">Blog</a>
        </div>
      </div>
      
      <div class="col-auto">
        <img src="~assets/images/analser2.png" height="206px" width="281px" alt="" />
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
</template>

<style>
.about{
  position: relative;
}
.about:before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: #EFEEEE url(~assets/images/preptime_bg.png) repeat-x;
  background-size: cover;
}
.container-about h5{
  position: absolute;
  width: 68px;
  height: 22px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 15px;
  /* left: 310px; */
}

.container-about h3{
  position: absolute;
  width: 252px;
  height: 50px;
  color: #000;
  font-family: "Squada_One"; 
  font-size: 18px;
  font-weight: bold;
  top: 20px;
}

.blog{
  position: relative;
  height: 300px;
  top: 350px;
  left: 0px;
}
.blog:before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: #EFEEEE url(~assets/images/preptime_bg.png) no-repeat;
  background-size: cover;
}
.container-about {
  background: #fff9f9;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 100px;
  width: 310px;
  height: 180px;
  left: 268px;
}

.container-about p{
  position: absolute;
  width: 232px;
  height: 76px;
  left: 0px;
  font-size: 12px;
  top: 80px;
}
.pricing {
  background: #3e4f5c;
  position: relative;
  width: 100%;
  height: 340px;
  top: 300px;
}
.pricing h3{
  position: relative;
  left: 80px;
}
.pricing .col-2{
  position: relative;
  background: #FFFFFF; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: -15px;
}
.blog .col-2 h3{
  width: 250px;
}
.blog .col-2{
  position: relative;
  left: 250px;
  height: 204px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
}
.blog .col-auto{
  position: relative;
  left: 750px;
}
</style>