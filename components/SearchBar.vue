<template>
  <div class="search-bar control has-icons-left hidden sm:block">
      <input 
       v-model="search"
       type="text"
       placeholder="Search..." 
       class="input is-rounded"
       @keyup="searched()"
       >
      <span class="icon is-small is-left">
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

<style lang="scss">
</style>