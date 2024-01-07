import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc"

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(()=>{

    const timeOutId= setTimeout(()=>{
      if(Math.random()>0.5){
        setIsValidCouponCode(true)
      }
      else{
        setIsValidCouponCode(false)
      }
    },1000)
    return ()=>{
      clearTimeout(timeOutId);
    }
  },[couponCode])
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>SubTotal : ${subtotal}</p>
        <p>Shipping Charges : ${shippingCharges}</p>
        <p>Tax : ${tax}</p>
        <p>Discount : <em> - ${discount}</em></p>
        <p>
          <b>Total : ${total}</b>
        </p>
        <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)} placeholder="Coupon Code" />
        {
          couponCode && (isValidCouponCode ? (<span className="green">${discount} off using the <code>{couponCode}</code></span>)
            : (<span className="red">Invalid Coupon Code <VscError /></span>))
        }
      </aside>
    </div>
  )
}

export default Cart