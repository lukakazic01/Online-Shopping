export const state = () => ({
    products: [
      {
        id: 1,
        title: 'Bele Patike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        image: require('~/assets/bele-patike.jpg'),
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 2,
        title: 'Braon Cipele',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 80,
        image: require('~/assets/braon-cipele.jpg'),
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 3,
        title: 'Crne Patike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 100,
        image: require('~/assets/converse-patike.jpg'),
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 4,
        title: 'Crne Cipele',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 150,
        image: require('~/assets/crne-cipele.jpg'),
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 5,
        title: 'Sivi Duks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 70,
        image: require('~/assets/plavi-duks.jpg'),
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 6,
        title: 'Plavi Duks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 40,
        image: require('~/assets/plavi-dzemper.jpg'),
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 7,
        title: 'Sivi Dzemper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 90,
        image: require('~/assets/sivi-duks.jpg'),
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 8,
        title: 'Plavi Dzemper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 200,
        image: require('~/assets/teget-duks.jpg'),
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      },
      {
        id: 9,
        title: 'Bele Patike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        image: require('~/assets/bele-patike.jpg'),
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavorite: false,
        quantity: 1
      }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: '',
      isBought: false,
    },
    systemInfo: {
      openLogInModal: false,
      openSignUpModal: false,
      openCartModal: false
    }
  })
  export const mutations = {
     showCartModal(state, show){
       state.systemInfo.openCartModal = show;
     },
     showSignUpModal(state, show){
      state.systemInfo.openSignUpModal = show;
    },
     closeCartModal(state){
       state.systemInfo.openCartModal = false;
     },
     addToCart(state, id){
      state.products.forEach(el => {
        if(id === el.id)
          el.isAddedToCart = true;
      })
     },
     removeFromCart(state, id){
      state.products.forEach(el => {
        if(id === el.id)
          el.isAddedToCart = false;
      })
     },
     quantityChanged(state, data){
       state.products.forEach(el => {
         if(data.id === el.id)
           el.quantity = data.quantity;
       })
     },
     isBought(state, isBought){
      state.userInfo.isBought = isBought;
     },
     ifProductsWereBought(state){
      state.products.forEach(el => {
        el.isAddedToCart = false;
      })
     },
     hasSearched(state, isSearched){
      state.userInfo.hasSearched = isSearched;
     },
     searchedValue(state, title){
      state.userInfo.productTitleSearched = title;
     },
  };
  export const getters = {
    addedToCartProducts(state){
      return state.products.filter(el => {
        return el.isAddedToCart === true;
      })
    }
}