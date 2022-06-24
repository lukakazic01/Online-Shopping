<template>
  <div v-if="openModal()" class="modal-wrapper">
    <div class="modall">
        <div class="modall-header p-3">
            <p class="modal-p">Checkout</p>
            <i class="fa-solid fa-circle-xmark" @click="closeCartModal()"></i>
        </div>
        <section id="modal-products" class="p-3"> 
          <div v-if="products.length === 0"> 
            <p>Your checkout is empty</p>
          </div>
          <div v-for="product in products" v-else :key="product.id" class="flex items-center p-2">
            <div class="basis">        
              <img :src="product.image" class="w-12 sm:w-20">  
            </div>           
            <div class="basis text-center">
               <p class="text-xs sm:text-base">{{product.title}}</p>
            </div> 
            <div class="basis text-right">
               <button class="bg-transparent hover:bg-red-500 text-red-500 font-normal text-xs sm:text-base sm:font-semibold hover:text-white sm:py-2 sm:px-4 py-1 px-3 border border-red-500 hover:border-transparent rounded">Izbrisi</button>
            </div>  
          </div> 
        </section>
        <div class="modal-button p-3">
            <button type="button" class="bg-green-400 text-white font-bold p-2 rounded">Buy product for 35$</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShoppingCartModal',
  layout: 'ShoppingCartModal',
  data() {
      return {
        
      }
  },
  computed: {
    products(){
        return this.$store.getters.addedToCartProducts
    }
  },
  methods: {
      openModal(){
          if(this.$store.state.systemInfo.openCartModal)
          return true;
          else
          return false;
      },
      closeCartModal(){
       this.$store.commit('closeCartModal')
      }
  }
}
</script>

<style lang="scss">
.modal-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}
.modall{
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    width: 60vw
}
.modall-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.modal-p{
    flex-grow: 1;
}
#modal-products{
  background-color: white;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}
.basis{
  flex-basis: 33.3333%;
}
</style>