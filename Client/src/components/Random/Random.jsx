export default function randomizer(props){
    function handleRandom(){
        props.onRandom();
    }
    return (
        <div>
             <button onClick={handleRandom} >Random</button>
            </div>
    )
}