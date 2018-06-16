import { SERVER_URL } from '../config';
import { getAsync } from "./requests";

export function commentCountBySynset(lemma){
    const requestUrl = `${SERVER_URL}/comment_count_by_synset?lemma=${lemma}`;

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

export function commentsForSynset(synsetId, lemma){
    const requestUrl = `${SERVER_URL}/comments_by_synset?synset=${synsetId}&lemma=${lemma}`;

    return new Promise((resolve, reject) => {
       getAsync(requestUrl,
         (response) => {
           const json = JSON.parse(response);
           resolve(json.comments);
         },
         (error) => {
            console.log(error);
            reject(error);
         }
       );
    });

}