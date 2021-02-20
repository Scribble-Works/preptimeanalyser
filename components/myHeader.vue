<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <NuxtLink class="navbar-brand" to="/"
        ><img
          src="~assets/images/PrepTime analyser logo.png"
          height="50px"
          width="125px"
          alt=""
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/news">News Article</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/updates">Products Updates</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/blog">Blog Post</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/started">Get Started</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
html {
  font-family: "Roboto";
}

.navbar-nav{
  padding-left: 15px;
}

.navbar-brand{
  padding-left: 70px;
}
</style>
<script>
export default {};
</script>