import "./index.css"

export default function RoomTypes({ 
   list,
}) {
   return (
      <div className="rooms__container">
         <h3 className="rooms__title"> Rooms type </h3>

         <div className="room__list">
            {list.map(({ id, ...rest}) => (
               <div key={id}>
                  <Item {...rest} />
               </div>
            ))}
         </div>
      </div>
   )
}

function Item({ type, pricePerNight: price, currency, capacity}) {
   return (
      <div className="room">
         <span className="room__title"> {type} </span>
         <span className="room__info"> Count of beds: {capacity} </span>
         <span className="room__price"> {currency} {price} </span>
      </div>
   )
}
