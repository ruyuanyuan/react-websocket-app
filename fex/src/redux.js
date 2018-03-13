const ADD_Gun="加机关枪";
const DEL_Gun="减机关枪";
export function counter(state=0,action){
    switch(action.type){
        case ADD_Gun:
            return state+1
        case DEL_Gun:
            return state-1
        default:    
            return 10        
    }
}
export function addGun(){
    return {type:ADD_Gun}
}
export function delGun(){
    return {type:DEL_Gun}
}

export function addGunsettime(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())     
        },2000)
    }
}