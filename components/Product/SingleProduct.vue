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
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>    
      </div>
      <div class="cena p-3">
        Price: {{ product.price }}$  
      </div>
      </div>
      <div class="flex flex-row items-center">
      <div class="pl-3 pt-1 pr-1 pb-1 flex button-wrapper">
        <button type="button" class="card-button bg-blue-500 hover:bg-blue-700 text-white rounded p-3"><span class="text-center">Add to Cart</span></button> 
      </div>
      <div class="kolicina flex justify-end">
       <select>
         <option>1</option>
         <option>2</option>
         <option>3</option>
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

      }
  },
}
</script>

<style>
.card{
    display:flex;
}
.kartica:hover{
    box-shadow: 0px 0px 7px 3px rgba(230,230,230);
}
.kartica-slika{
  height: 13em;
  width: 100%;
}
.dummy-text{
  flex-basis: 50%;
}
.button-heart{
  flex-basis: 50%;
}
.kolicina{
  flex-basis: 50%;
}
.button-wrapper{
  flex-basis: 50%;
}
</style>