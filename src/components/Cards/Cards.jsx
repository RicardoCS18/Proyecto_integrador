import Card from '../Card/Card.jsx';

export default function Cards(props) {
   return (
   <div>
      <h2>{
         
   props.characters.map((char)=> (
    <Card 
    id={char.id}
    name={char.name} 
    status={char.status} 
    species={char.species} 
    gender={char.gender} 
    origin={char.origin} 
    image={char.image} 
      
    onClose={props.onClose} 
    />
    ))
      }</h2>
   </div>);
}
