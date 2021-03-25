<template>
  <div>
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-between footer-docs">
          <div class="col mt-2">
            <div class="img-link">
              <NuxtLink to="/"
                ><img
                  src="~assets/images/PrepTime analyser bw.png"
                  width="20%"
                  alt=""
              /></NuxtLink>
            </div>
          </div>
          <div class="col mt-4">
            <NuxtLink class="footer-links" to="">Privacy</NuxtLink>
          </div>
          <div class="col mt-4">
            <NuxtLink class="footer-links" to="">Terms</NuxtLink>
          </div>
          <div class="col-sm-6 mt-4">
            <NuxtLink class="footer-links" to=""
              >About PrepTime Analyser</NuxtLink
            >
          </div>
          <div class="col-sm-1 mt-4">
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
footer{
  background: #C4C4C4;
  margin-top:10%;
}

</style>