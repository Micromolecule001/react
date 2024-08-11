import "./index.css"

export default function Details({
   title,
   guests,
   bedrooms,
   beds,
   baths,
}) {
   return (
      <div className="container">
         <div className="details__wrapper">
           <span className="details"> {title} </span>
         </div>

         <div className="info-line"> {guests} guests </div>
         <div className="info-line"> {bedrooms} bedrooms </div>
         <div className="info-line"> {beds} beds </div>
         <div className="info-line"> {baths} baths </div>
      </div>
   )
}
