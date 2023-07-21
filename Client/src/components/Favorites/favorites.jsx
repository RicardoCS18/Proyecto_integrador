import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export  function Favorites(props) {
    const [ord, setOrd] = useState(false);
    const dispatch = useDispatch();
    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setOrd(!ord);
    }
    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <select onChange={handleOrder}>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            </select>
            {props.favorites?.map((char) => <Card
            id={char.id}
            name={char.name} 
            status={char.status} 
            species={char.species} 
            gender={char.gender} 
            origin={char.origin} 
            image={char.image} 
             /> )}
        </div>
    )
}
export function mapStateToProps(state){
    return {
        favorites: state.favorites,
    }


}
export default connect(mapStateToProps)(Favorites);