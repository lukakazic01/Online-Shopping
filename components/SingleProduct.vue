<template>
    <div class="kartica">
    <div class="product-image">
     <img :src="product.image" class="kartica-slika object-cover object-center">
     <div class="overlay"></div>
    </div>
    <div class="product-text flex items-center">
      <div class="flex dummy-text">
        <p class="p-3">{{ product.title }}</p>
      </div>
      <div class="p-1 flex button-heart justify-end">
        <button><i class="fa-regular fa-heart"></i></button>  
      </div>
    </div>
    <p class="p-3">{{ product.description }}</p>
    <div class="ocene-i-cena flex flex-row justify-between">
      <div class="ocena p-3">
      <i v-for="star in product.ratings" :key="star.id" class="fa-solid fa-star"></i>    
      </div>
      <div class="cena p-3">
        Price: {{ product.price }}$  
      </div>
      </div>
      <div class="flex flex-row items-center">
      <div class="pl-3 pt-1 pr-1 pb-1 flex button-wrapper">
        <button v-if="!product.isAddedToCart" type="button" class="bg-blue-500 hover:bg-blue-700 text-white rounded p-3 text-xs" @click="addToCart(product)"><span class="text-center">Add to Cart</span></button>
        <button v-else type="button" class="bg-blue-500 hover:bg-blue-700 text-white rounded p-3 text-xs" @click="removeFromCart(product)"><span class="text-center">Remove from Cart</span></button>  
      </div>
      <div class="kolicina flex justify-end">
       <select v-model="selected" @change="onSelectChange(product.id)">
         <option v-for="(number, index) in quantityArray" :key="index" :value="number">{{ number }}</option>
       </select>
      </div>  
    </div>
    </div>
</template>

<script>
export default {
  name: 'SingeProduct',
  props: {
    product: 
    {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      quantityArray: [],
      selected: 1
    }
  },
  created(){
    for(let i = 1; i <= 20; i++){
      this.quantityArray.push(i);
    }
  },
  methods: {
    addToCart(product){
      const id = product.id;
      this.$store.commit('addToCart', id);
    },
    removeFromCart(product){
      const id =  product.id
      this.$store.commit('removeFromCart', id)
    },
    onSelectChange(id){
     const data = {
        id,
        quantity: this.selected
     }
     this.$store.commit('quantityChanged', data)
    }
  },
}
</script>
