<template>
  <div class="container-fluid py-5">
    <br /><br />
    <div class="container-about">
      <div class="about-sec">
        <h5>About</h5>
        <h3>Bringing the benefits of Preptime Analyser to every educator</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eum
          doloremque facere dolor sapiente. Soluta laudantium quasi inventore,
          nam ullam placeat iste possimus totam ipsum exercitationem ut, officia
          id rerum?
        </p>
      </div>
    </div>

    <div class="row pricing">
      <h3 class="pl-5">Pricing</h3>
      <div class="container col-2">
        <h3 class="text-center">Free</h3>
        <h5 class="text-center">Free</h5>
        <div class="btn px-5 ml-5">
          <NuxtLink class="btn btn-secondary btn-sm" type="button" to="#" role="button"
            >Start</NuxtLink
          >
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
        <h3 class="text-center">Basic</h3>
        <h5 class="text-center">GH₵10 / month</h5>
        <div class="btn px-5 ml-5">
          <NuxtLink class="btn btn-secondary btn-sm" type="button" to="#" role="button"
            >Buy</NuxtLink
          >
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
        <h3 class="text-center">Standard</h3>
        <h5 class="text-center">GH₵80 / month</h5>
        <div class="btn px-5 ml-5">
          <NuxtLink class="btn btn-secondary btn-sm" type="button" to="#" role="button"
            >Buy</NuxtLink
          >
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
        <h3 class="text-center">Enterprice</h3>
        <h5 class="text-center">GH₵250 / month</h5>
        <div class="btn px-5 ml-5">
          <NuxtLink class="btn btn-secondary btn-sm" type="button" to="#" role="button"
            >Buy</NuxtLink
          >
        </div>
        <hr />
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
      <div><br /></div>
    </div>
    <div class="container">
      <div class="row blog mt-3">
        <div class="col-5">
          <div class="action">
            <h6>PrepTime Analyser in Action</h6>
            <h3>Everything you need to know about PrepTime Analyser</h3>
            <div class="btn">
              <NuxtLink class="btn btn-secondary btn-lg" type="button" to="#" role="button"
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

<style>
.about-sec {
  background: #fff9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 310px;
}

.pricing {
  background: #3e4f5c;
  height: 110%;
  width: 100%;
}
.col-2 {
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
  width: 100px;
}

.blog .btn-lg{
  border-radius: 25px;
  width: 130px;
}
</style>