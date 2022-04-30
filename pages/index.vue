<template>
<div>
<NavBar></NavBar>
<AllProducts></AllProducts>
</div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar';
import AllProducts from '@/components/ProductList/AllProducts.vue';

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    AllProducts
},
  data() {
    return {
    }
  },
}
</script>
