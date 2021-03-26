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
    <div>
      <b-modal id="modal" title="BootstrapVue">
        <p class="my-4">{{statusMessage}}</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactData: {},
      statusMessage:''
    };
  },
  created() {},

  methods: {
    async postContactData() {
      const data = await this.$axios.$post("/contacts", this.contactData);
      if (!data.error) {
        this.aboutData = {};
        this.statusMessage='Thank you for contacting us.\nWe will reach out to you very soon.'
        this.$bvModal.show('modal')
      } else {
        this.statusMessage='Something went wrong while sending your message.\nPlease try again soon'
        this.$bvModal.show('modal')
      }
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