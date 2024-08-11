import "./index.css"

export default function ReviewsList({ 
   list,
}) {
   return (
      <div className="reviews__container">
         <h3 className="reviews__title"> Reviews </h3>

         <div className="review__list">
            {list.map(({ id, ...rest}) => (
               <div key={id}>
                  <Item {...rest} />
               </div>
            ))}
         </div>
      </div>
   )
}

function Item({ guestName, rating, review }) {
   return (
      <div className="review">
         <div className="title__wrapper">
            <span className="review__title"> {guestName} </span>
            <span className="review__rating"> Rating: {rating} </span>
         </div>
         
         <span className="review__text"> {review} </span>
      </div>
   )
}
