import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
export default function Nav(props) {

   return (
    <div>
     <SearchBar onSearch={props.onSearch} />
     <Random onRandom={props.onRandom}/>
     </div>
     )
}