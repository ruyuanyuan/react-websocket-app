export function getRedirectPath({type,avatar}){
    // 根据用户信息，跳转至不同的地址
    // user.type /boss /genius
    // user.type /bossInfo /geniusInfo
    let url = (type==='boss')?'/boss':'/genius'
    if(!avatar){
        url+='info'
    }
    return url;
}