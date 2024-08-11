import "./index.css";
import Description from "../description";

export default function AdditionalDetails({ list }) {
   return (
      <div className="container">
         <div className="details__wrapper">
           <span className="details"> Details </span>
         </div>

         <div className="items__wrapper">
            {Object.entries(list).map(([key, value]) => (
                 <span>{renderItem(key, value)}</span>
            ))}
         </div>
      </div>
   );
}

function renderItem(key, value) {
   return <div key={key} className="info-line-a">
      <Description 
         title={key}
         description={value}
      />
   </div>
}