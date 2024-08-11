import "./index.css"

export default function Description({ 
   title,
   description
}) {
   return (
      <div className="description__wrapper">
         <h3 className="description__title"> {title} </h3>

         <p className="description__text"> {description} </p>
      </div>
   )
}
