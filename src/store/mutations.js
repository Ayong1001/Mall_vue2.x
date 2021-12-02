import {ADD_CART,ADD_COUNT} from "@/store/mutation-types";

export default {
  [ADD_COUNT](state,payLoad){
    payLoad.count++
  },
  [ADD_CART](state,payLoad){
    payLoad.checked=true
    state.cartList.push(payLoad)
  },
}
