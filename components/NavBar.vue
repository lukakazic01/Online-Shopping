<template>
  <nav class="flex flex-row items-center">
    <div class="logo-i-search flex items-center">
      <img src="~/assets/lukas-shop.svg" class="logo ml-2"/>
      <SearchBar></SearchBar>
    </div>
    <div class="ikonice-i-kolica flex justify-end items-center">
    <div class="social-media-ikonice hidden sm:inline-block">
      <ul>
        <li><i class="fab fa-facebook px-2"></i></li>
        <li><i class="fab fa-twitter px-2"></i></li>
        <li><i class="fab fa-instagram px-2"></i></li>
        <li><i class="fab fa-linkedin px-2"></i></li>
      </ul>
    </div>
    <div @click="showCartModal">
      <i class="fa-solid fa-cart-shopping px-2 cursor-pointer">{{ productsLength  }}</i>
    </div>
    <div class="mr-2 ml-2">
      <button class="modal-button hover:bg-blue-500 hover:text-white py-1 px-4 border rounded">Sign Up</button>
      <button class="modal-button hover:bg-blue-500 hover:text-white py-1 px-4 border rounded">Log in</button>
    </div>
  </div>
  </nav>
</template>

<script>


export default {
  name: 'NavBar',

   data() {
     return {
     }
   },
   computed: {
     productsLength(){
      return this.$store.getters.addedToCartProducts.length
     }
   },
   methods: {
     showCartModal(){
       this.$store.commit('showCartModal', true);
     }
   },
}
</script>