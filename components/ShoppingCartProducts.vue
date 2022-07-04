<template>
<div class="flex items-center p-2">
  <div class="basis">        
     <img :src="product.image" class="w-12 sm:w-20">  
  </div> 
  <div class="basis text-center">
     <p class="text-xs sm:text-base">Price: {{product.price}}&euro;</p>
  </div> 
  <div class="basis text-center">
     <p class="text-xs sm:text-base">Quantity: {{product.quantity}}</p>
  </div>           
  <div class="basis text-center">
     <p class="text-xs sm:text-base">{{product.title}}</p>
  </div> 
  <div class="basis text-right">
     <button class="bg-transparent hover:bg-red-500 text-red-500 font-normal text-xs sm:text-base sm:font-semibold hover:text-white sm:py-2 sm:px-4 py-1 px-3 border border-red-500 hover:border-transparent rounded" @click="removeItem(product)">Delete</button>
  </div>  

</div>
</template>

<script>
export default {
  props: {
    product: 
    {
      type: Object,
      required: true
    }
  },
  data(){
    return{

    }
  },
  methods: {
    removeItem(product){
       const id = product.id;
       this.$store.commit('removeFromCart', id)
    },
  }
}
</script>
