<template>
  <div v-if="openModal()" class="modal-wrapper">
    <div class="modal">
        <div class="modal-header p-3">
            <p class="modal-p">Checkout</p>
            <i class="fa-solid fa-circle-xmark cursor-pointer" @click="closeCartModal()"></i>
        </div>
        <section id="modal-products" class="p-3"> 
          <div v-if="products.length === 0 && !$store.state.userInfo.isBought"> 
            <p>Your checkout is empty</p>
          </div>
          <div v-for="product in products" v-else-if="products.length > 0 && !$store.state.userInfo.isBought" :key="product.id">
            <ShoppingCartProducts :product="product"></ShoppingCartProducts> 
          </div>
          <div v-else>
            <p>You successfully bought products :)</p>
          </div>
        </section>
        <div class="modal-button p-3">
            <button 
            v-if="!$store.state.userInfo.isBought"  
            :class="[products.length === 0 ? 'hidden':'bg-green-400 text-white font-bold p-2 rounded']" 
            @click="buyProducts()">
            Buy {{label}} for {{sumAllPrices()}} &euro;
            </button>
            <button v-else type="button" class="bg-red-400 text-white font-bold p-2 rounded" @click="closeCartModal()" >Close</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShoppingCartModal',
  data() {
      return {
        label: '',
        isBought: this.$store.state.userInfo.isBought
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
       this.$store.commit('isBought', false);
       this.$store.commit('closeCartModal')
    },
    sumAllPrices(){
      let sum = 0;
      this.products.forEach(el => {
        sum += (el.price * el.quantity)
        if(el.quantity > 1 || this.products.length > 1)
        this.label = 'products'
        else
        this.label = 'product'
      })
      return sum
    },
    buyProducts(){
      this.$store.commit('isBought', true);
      this.$store.commit('ifProductsWereBought');
      this.products.splice(0)
    }
  },
}
</script>

