<template>
  <div>
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div class="col-6 col-sm-4">
            <NuxtLink to="/"><img src="~assets/images/PrepTime analyser bw.png" height="70px" width="auto" alt=""></NuxtLink>
          </div>
        </div>

        <div class="row justify-content-between">
          <div class="col-md-4">
            <NuxtLink class="footer-links" to="">Privacy</NuxtLink>
          </div>
          <div class="col-md-4">
            <NuxtLink class="footer-links" to="">Terms</NuxtLink>
          </div>
          <div class="col-md-4">
            <NuxtLink class="footer-links" to="">About PrepTime Analyser</NuxtLink>
          </div>
           <div class="col-md-4">
            <NuxtLink class="footer-links" to="">Feedback</NuxtLink>
          </div>
        </div>
        <div class="row justify-content-between">
         
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style>
  footer {
    position: absolute;
    width: 2020px;
    height: 73px;
    left: 0px;
    top: 1014px;
    background-color: rgba(196, 196, 196, 1);
  }
  .footer-links {
    color: black;
  }
  /* .row{
    display: inline-block;
  } */
  .col-md-4{
    display: inline;
  }
</style>