<template>
  <div>
    <div class="body-contact top-buffer form-bg">
      <div><br /></div>
      <div class="container form">
        <form action="" method="POST">
          <div class="container">
            <div><br /></div>
            <h2>GET IN TOUCH</h2>
            <div class="row">
              <div class="col">
                <h5>Tell us your name</h5>
                <input
                  class="w-100"
                  name="name"
                  type="text"
                  placeholder="Micheal Martey"
                  required
                />
              </div>
              <div class="col" id="number">
                <h5>Enter your telephone number</h5>
                <input
                class="w-100"
                  name="tel"
                  type="text"
                  placeholder="0244444444"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5>Enter your email address</h5>
                <input class="w-100"
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
              <input name="message" class="w-100" placeholder="How can we help you?" id="msg" />
            </div>
            <div class="btn">
              <NuxtLink class="btn btn-secondary" to="#" role="button"
                >Send</NuxtLink
              >
            </div>
            <div><br /></div>
          </div>
        </form>
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<style>
.form {
  background: #ffffff;
  height: 100%;
  width: 100%;
}

input{
  background: rgba(196, 196, 196, 0.56);
  height: 68px;
  border: none;
}
#msg{
  height: 300px;
}
</style>