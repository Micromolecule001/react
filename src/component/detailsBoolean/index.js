import "./index.css";

export default function DetailsBoolean({ list }) {
   return (
      <div className="container">
         <div className="details__wrapper">
           <span className="details"> Details </span>
         </div>

         <div className="items__wrapper">
            {Object.entries(list).map(([key, value]) => (
               value && (
                  <div key={key} className="info-line">
                     {renderItem(key)}
                  </div>
               )
            ))}
         </div>
      </div>
   );
}

function renderItem(key) {
   return <span>{key}</span>;
}