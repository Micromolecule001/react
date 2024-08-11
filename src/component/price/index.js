import "./index.css"

export default function Price({ 
   price,
   discount,
   currency,
   cleaning,
   service,
   checkin,
   checkout,
}) {
   return (
      <div className="container">
         <div className="price__wrapper">
           <span className="price"> {currency}{price} </span>
           <span className="discount"> {currency}{discount} </span>
         </div>

         <div className="info-line"> Price for cleaning: {currency}{cleaning} </div>
         <div className="info-line"> Service tax: {currency}{service} </div>
         <div className="info-line"> Checkin: {checkin} </div>
         <div className="info-line"> Checkout: {checkout} </div>
      </div>
   )
}
