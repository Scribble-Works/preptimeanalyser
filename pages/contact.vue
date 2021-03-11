<template>
  <div>
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
          <a class="btn btn-secondary" href="#" role="button">Send</a>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.form {
  position: relative;
  width: 1022px;
  height: 723px;
  top: 152px;
  left: 50px;
  background: #ffffff;
}

form .btn .btn-secondary {
  position: relative;
  width: 251px;
  left: 324px;
  top: 20px;
}

form .row {
  position: relative;
  left: 94px;
}
.msg {
  position: relative;
  left: 94px;
}
.msg input {
  position: relative;
  width: 832px;
  height: 178px;
}
.row .col input {
  position: relative;
  width: 386px;
  height: 68px;
}
input {
  border: none;
  background: rgba(196, 196, 196, 0.56);
}
#email {
  position: relative;
  width: 832px;
}
#number {
  position: relative;
  right: 70px;
}
form h2 {
  position: relative;
  left: 90px;
}
form {
  position: relative;
  top: 80px;
}

</style>