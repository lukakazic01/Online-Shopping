<template>
  <div class="hidden sm:flex justify-end items-center relative">
      <input 
       v-model="search"
       type="text"
       placeholder="Search..." 
       class="py-2 px-4 text-gray-700 leading-tight border-2 border-gray-200 border rounded focus:outline-none bg-white focus:border-blue-500"
       @keyup="searched()"
       >
      <span class="lupa bg-blue-500 flex items-center justify-center">
			<i class="fa fa-search"></i>
		</span>
    </div>
</template>

<script>
export default {
  data() {
      return {
        search: ''
      }
  },
  methods: {
    searched() {
      if(this.search.length > 0){
      this.$store.commit('hasSearched', true);
      this.$store.commit('searchedValue', this.search);
      }
      else{
      this.$store.commit('hasSearched', false);
      this.$store.commit('searchedValue', '');
      }

    }
  },
  
}
</script>