<template>
<div>
<NavBar></NavBar>
<AllProducts></AllProducts>
<ShoppingCartModal></ShoppingCartModal>
</div>
</template>

<script>
import ShoppingCartModal from '@/components/Modal/ShoppingCartModal.vue';
import NavBar from '@/components/navbar/NavBar';
import AllProducts from '@/components/ProductList/AllProducts.vue';

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    AllProducts,
    ShoppingCartModal,
},
  data() {
    return {
    }
  },
}
</script>
