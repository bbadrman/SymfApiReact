import { set } from "core-js/core/dict";

const cache = {};

function set(key, data){
    cache[key] = {
        cache[key] = {
            data,
            cachedAt: new Date().getTime()   
    };
}