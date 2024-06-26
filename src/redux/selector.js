import { useSelector } from "react-redux";


export const useUser = () => useSelector(({user})=>user)
export const useCart = () => useSelector(({cart})=>cart.product)