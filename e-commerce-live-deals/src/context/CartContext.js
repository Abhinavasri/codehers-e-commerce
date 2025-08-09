import React, { createContext, useReducer, useContext, useEffect } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const initialState = {
  items: [],
}

function cartReducer(state, action){
  switch(action.type){
    case 'INIT':
      return action.payload
    case 'ADD':{
      const { product, qty=1 } = action.payload
      const existing = state.items.find(i=>i.productId===product._id)
      let items
      if(existing){
        items = state.items.map(i => i.productId===product._id ? { ...i, qty: i.qty + qty } : i)
      } else {
        items = [...state.items, { productId: product._id, name: product.name, price: product.price, image: product.images?.[0]||'', qty }]
      }
      return { ...state, items }
    }
    case 'UPDATE':{
      const { productId, qty } = action.payload
      const items = state.items.map(i => i.productId===productId ? { ...i, qty } : i).filter(i => i.qty>0)
      return { ...state, items }
    }
    case 'REMOVE':{
      const { productId } = action.payload
      const items = state.items.filter(i=>i.productId!==productId)
      return { ...state, items }
    }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // initialize from localStorage
  useEffect(()=>{
    try{
      const raw = localStorage.getItem('cart_v1')
      if(raw){
        dispatch({ type: 'INIT', payload: JSON.parse(raw) })
      }
    }catch(e){ console.warn('cart init failed', e) }
  }, [])

  useEffect(()=>{
    try{ localStorage.setItem('cart_v1', JSON.stringify(state)) }catch(e){}
  }, [state])

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart(){
  return useContext(CartStateContext)
}
export function useCartDispatch(){
  return useContext(CartDispatchContext)
}
