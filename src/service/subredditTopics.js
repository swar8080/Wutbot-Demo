import { BASE_URL } from "../config";
import { paramStringBuilder, getAsync} from "./requests";


export default function topicsForSubreddit(subreddit, postTypes){
    const url = `${BASE_URL}/topics_for_subreddit`;
    const paramString = paramStringBuilder({subreddit, postTypes});
    const requestUrl = url + paramString;

    return new Promise((resolve, reject) => {
       getAsync(requestUrl,
         (response) => {
           resolve(JSON.parse(response));
         },
         (error) => {
            console.log(error);
            reject(error);
         }
       );
    });
}

