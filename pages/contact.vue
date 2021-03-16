<template>
  <div>
    <div class="body-contact top-buffer">
      <div class="container form">
        <form action="" method="POST">
          <h2>GET IN TOUCH</h2>
          <div class="row">
            <div class="col">
              <h5>Tell us your name</h5>
              <input
                name="name"
                type="text"
                placeholder="Micheal Martey"
                required
              />
            </div>
            <div class="col" id="number">
              <h5>Enter your telephone number</h5>
              <input name="tel" type="text" placeholder="0244444444" required />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h5>Enter your email address</h5>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="mikeMartey@gmail.com"
                required
              />
            </div>
          </div>
          <div class="msg">
            <h5>Your message</h5>
            <input name="message" placeholder="How can we help you?" id="" />
          </div>
          <div class="btn">
            <NuxtLink class="btn btn-secondary" to="#" role="button">Send</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>

</style>