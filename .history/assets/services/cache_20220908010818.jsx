import { set } from "core-js/core/dict";

const cache = {};

functio set(key, data){
    cache[key] = {
        cache[key] = {
            data,
            cachedAt: new Date().getTime()
        }
    }
}