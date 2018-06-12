import { BASE_URL } from '../config';

export function getAsync(url, success, error){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        if (xhr.status === 200)
            success(xhr.responseText);
        else
            error(xhr.status);
    });
    xhr.addEventListener('error', () => {
        error(xhr.statusText);
    });

    xhr.open('GET', url, true);
    xhr.send(null);
}

export function paramStringBuilder(dict){
    let paramStr = '?';
    for (const key of Object.keys(dict)){
        if (dict[key] !== null && dict[key] !== undefined)
            paramStr += `&${key}=${dict[key]}`
    }
    return paramStr;
}
