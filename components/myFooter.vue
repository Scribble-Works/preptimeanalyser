<template>
  <div>
    <footer>
      <div class="container-fluid">
        <div class="img-link">
          <NuxtLink to="/"
            ><img
              src="~assets/images/PrepTime analyser bw.png"
              height="70px"
              width="auto"
              alt=""
          /></NuxtLink>
        </div>

        <div class="row justify-content-between footer-docs">
          <div class="col">
            <NuxtLink class="footer-links" to="">Privacy</NuxtLink>
          </div>
          <div class="col">
            <NuxtLink class="footer-links" to="">Terms</NuxtLink>
          </div>
          <div class="col-sm-6">
            <NuxtLink class="footer-links" to=""
              >About PrepTime Analyser</NuxtLink
            >
          </div>
          <div class="col-sm-1">
            <NuxtLink class="footer-links" to="">Feedback</NuxtLink>
          </div>
        </div>
        <div class="row justify-content-between"></div>
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
  top: 1114px;
  background-color: rgba(196, 196, 196, 1);
}
.footer-links {
  color: black;
}
/* .row{
    display: inline-block;
  } */
.img-link{
  display: inline;
}

.footer-docs{
  position: absolute;
  left: 290px;
  top: 19px;
}
</style>