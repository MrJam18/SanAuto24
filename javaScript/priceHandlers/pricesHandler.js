import {priceList} from "../constants/priceList.js";
import {changePrice} from "./changePrice.js";


export const pricesHandler = () => {
   priceList.forEach((el)=> {
       changePrice(el.price, el.id);
   });
}