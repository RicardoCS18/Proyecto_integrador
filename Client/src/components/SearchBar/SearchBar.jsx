import { useState } from "react";
export default function SearchBar(props) {
   let [id, setId] = useState("");
   function handleChange(event){
      setId(event.target.value)
   }
   function handleSearch() {
      props.onSearch(id);
      setId("");
    }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} placeholder="Ingresa un ID"/>
         <button onClick={handleSearch} id={id} >Agregar</button>
      </div>
   );
}
