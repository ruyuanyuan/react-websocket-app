const ADD_Gun ='加机关枪'
const REMOVE_Gun ='减机关枪'
//reducer
export function counter(state=0,action){
    switch(action.type){
        case ADD_Gun:
            return state+1
        case REMOVE_Gun:
            return state-1
        default:    
            return 10        
    }
}

//action creator
export function addGun(){
    return {type:ADD_Gun}
}

export function delGun(){
    return {type:REMOVE_Gun}
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(() => {
           dispatch(addGun())
        }, 2000);
    }
}