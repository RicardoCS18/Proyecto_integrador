import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types"
const initialState = {
    favorites:[],
    allCharacters: [],
    access: false,  
}

export default function rootReducer (state= initialState, {type, payload}) {
    switch(type){
        case ADD_FAVORITE:

            let added = [...state.favorites, payload]
            return {...state, favorites: added, allCharacters:[...added]}

        case DELETE_FAVORITE:

            let deleted1 = state.allCharacters.filter((char) => char.id !== Number(payload))
            let deleted2 = state.favorites.filter((char) => char.id !== Number(payload))
            return {...state, favorites: deleted2 ,allCharacters: deleted1}

        case FILTER:

            return {...state, favorites: state.allCharacters.filter((char)=> char.gender === payload)} 

        case ORDER:
            
            let ordered = state.allCharacters.sort((a,b)=>{
                if(payload === "Ascending") {
                    if(a.id>b.id) return 1
                    if(a.id<b.id) return -1
                    return 0
                } else {
                    if(a.id>b.id) return -1
                    if(a.id<b.id) return 1
                    return 0
                }
            } )
            console.log(ordered)
            return {...state, favorites: ordered} 

        default: 
            return {...state}
    }
}