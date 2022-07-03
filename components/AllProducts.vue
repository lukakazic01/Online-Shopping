<template>
  <div class="products-wrapper mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 my-2 container">
      <div v-for="product in products" :key="product.id">
      <SingleProduct :product="product"></SingleProduct>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        products(){
          if(!this.$store.state.userInfo.hasSearched)
            return this.$store.state.products
          else
            return this.getSearchedProducts()
        }
    },
    methods: {
        getSearchedProducts(){
            const searched = this.$store.state.userInfo.productTitleSearched;
            const products = this.$store.state.products;
            return products.filter(el => el.title.trim().toLowerCase().includes(searched.trim().toLowerCase()))
        }
    }
}
</script>

<style lang="scss">
  @media(max-width: 480px){
      .products-wrapper{
          grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .card-button{
          font-size: 0.8rem;
      }
  }
</style>