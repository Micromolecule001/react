import "./index.css";

export default function DetailsLinks({ list }) {
   return (
      <div className="container">
         <div className="details__wrapper">
           <span className="details"> Details </span>
         </div>

         <div className="items__wrapper">
            {list.map(({id, name, link}) => (
               <div key={id} className="info-line">
                  <a src={link} href={link}> {name} </a>
               </div>
            ))}
         </div>
      </div>
   );
}