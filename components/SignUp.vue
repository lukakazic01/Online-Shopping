<template>
  <div v-if="openSignUp()" class="modal-wrapper">
    <div class="modal">
        <div class="modal-header p-3">
            <p class="modal-p">Sign Up</p>
            <i class="fa-solid fa-circle-xmark cursor-pointer" @click="closeSignUp()"></i>
        </div>
        <form>
          <section id="modal-section" class="p-3">
            <div>
              <label>Username:</label>
              <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 mt-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline" type="text" placeholder="Username" required/>
            </div>
            <div>
              <label>Email:</label>
              <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 mt-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline" type="email" placeholder="Email" required/>
            </div>
            <div>
              <label>Password:</label>
              <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 mt-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline" type="password" placeholder="Password" required/>
            </div>
        </section>
        <div class="modal-button p-3 text-center">
            <button type="submit" class="bg-blue-500 py-2 px-2 text-white rounded w-20" @click="sendData()">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      email: '',
      password: '',
      username: ''
    }
 },
 methods: {
    openSignUp() {
      if(this.$store.state.systemInfo.openSignUpModal)
      return true;
      else
      return false;
    },
    closeSignUp(){
      this.$store.commit('showSignUpModal', false);
    },
    async sendData(){
      await this.$axios.$get('/serverMiddleware/signup', { params: {
        username: this.username,
        password: this.password,
        email: this.email
      }})

    }
 },
}
</script>

<style>

</style>