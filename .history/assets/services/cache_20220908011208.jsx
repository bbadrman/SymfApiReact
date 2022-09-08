import { set } from "core-js/core/dict";

const cache = {};

function set(key, data){
    cache[key] = {
            data,
            cachedAt: new Date().getTime()   
    };
}

function get(key){
    return new Promise(resolve =>{
        resolve(
            cache[key] && cache[key].cachedAt < new Date().getTime() + 15 * 60 * 1000
            ? cache[key].data:null
        );
    });
}

export default{
    set,
    get
};