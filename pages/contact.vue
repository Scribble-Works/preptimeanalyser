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
                  v-model="contactData.name"
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
                  v-model="contactData.phoneNumber"
                  placeholder="0244444444"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5>Enter your email address</h5>
                <input
                  class="w-100"
                  id="email"
                  name="email"
                  type="email"
                  v-model="contactData.email"
                  placeholder="mikeMartey@gmail.com"
                  required
                />
              </div>
            </div>
            <div class="msg">
              <h5>Your message</h5>
              <input
                v-model="contactData.message"
                name="message"
                class="w-100"
                placeholder="How can we help you?"
                id="msg"
              />
            </div>
            <div class="btn">
              <div
                class="btn btn-secondary"
                @click="postContactData"
                role="button"
                :data-toggle="modal"
              >
                Send
              </div>
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
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" :data-dismiss="modal=false" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactData: {},
      modal:false
    };
  },
  created() {},

  methods: {
    async postContactData() {
      this.modal ? this.modal=false : this.modal=true;
      /* const data = await this.$axios.$post("/contacts", this.contactData);
      if (data.id) {
        this.aboutData = {};
      } else {
      } */
    },
  },
};
</script>
<style>
.form {
  background: #ffffff;
  height: 100%;
  width: 100%;
}

input {
  background: rgba(196, 196, 196, 0.56);
  height: 68px;
  border: none;
}
#msg {
  height: 300px;
}
</style>