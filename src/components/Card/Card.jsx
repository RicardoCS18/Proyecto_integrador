import card from "../Card/Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ id, name,status,species,gender,origin,image,onClose}) {
   function handleClose() {
      console.log(1)
      onClose(id);
   }
   return (
      <div>
          <button onClick={handleClose}>X</button>
         <h2><Link to={`/detail/${id}`} >{name}</Link></h2>
         <h2>{species}</h2>
         <img src={image} alt='character' />
      </div>
   );
}
