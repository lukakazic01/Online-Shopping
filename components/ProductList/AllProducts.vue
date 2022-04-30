<template>
  <div class="products-wrapper container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 my-2">
      <div v-for="product in products" :key="product.id">
      <SingleProduct :product="product"></SingleProduct>
      </div>
  </div>
</template>

<script>
import SingleProduct from "@/components/Product/SingleProduct.vue";
export default {
    components: { SingleProduct },
    data() {
        return {
            products: this.$store.state.products,
        };
    },
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