import SHOP_DATA  from "./shop.data"

const INITIAL_VALUES={
    collections: SHOP_DATA
}
    

  const shopReducer =(state=INITIAL_VALUES,action )=>{
    switch(action.type){
        default:
            return state;
    }
  }

  export default shopReducer;