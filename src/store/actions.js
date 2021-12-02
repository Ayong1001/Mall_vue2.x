import {ADD_CART,ADD_COUNT} from "@/store/mutation-types";

export default {
  addCart(context,payLoad){
    return new Promise(resolve => {
      let oldProduct =context.state.cartList.find(item=>item.iid===payLoad.iid)
      if(oldProduct){
        context.commit(ADD_COUNT,oldProduct)
        resolve('商品数量+1')
      }
      else {
        payLoad.count=1
        context.commit(ADD_CART,payLoad)
        resolve('商品添加成功!')
      }
    })

    /*let oldProduct=null
    for (let item of state.cartList) {
      if(item.iid===payLoad.iid){
          oldProduct=item
      }
    }
    if(oldProduct){
      oldProduct.count++
    }
    else {
      payLoad.cont=1
      state.cartList.push(payLoad)

    }*/
  }
}
