import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect } from "react";


export  function Card({ id, name,status,species,gender,origin,image,onClose, addFavorite, deleteFavorite, favorites}) {
   function handleClose() {
      console.log(1)
      onClose(id);
   }
   const [isFav,setIsFav] = useState(false);
   function handleFavorite(){
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({ id, name,status,species,gender,origin,image})
      }
   }
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);
   return (
      <div>
         {onClose?(<button onClick={handleClose}>X</button>) :null }
         <h2> {name}</h2>
         <h2>{species}</h2>
         <Link to={`/detail/${id}`}>
         <img src={image} alt='character' />
         </Link>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (character) {
         dispatch(addFavorite(character))
      },
      deleteFavorite: function (id){
         dispatch(deleteFavorite(id))
      }
   }
}
export function mapDispatchToState(globalState){
   return {
      favorites: globalState.favorites
   }
}
export default connect(mapDispatchToState,mapDispatchToProps)(Card)