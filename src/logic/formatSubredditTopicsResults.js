export default function formatSubredditTopicsResults(response){

    if (response.topics){
        response.topics = response.topics
            .filter((t1) => t1.pos === 'n')
            .sort((t1, t2) => {
                //sort by similarity score in descending order
                // and tiebreak by topic lemma in alphabetical order
                const lin1 = t1.linIC || -1;
                const lin2 = t2.linIC || -1;

                if (lin1 > lin2) return -1;
                else if (lin1 < lin2) return 1;
                else {
                     if (t1.lemma > t2.lemma) return 1;
                     else if (t1.lemma < t2.lemma) return -1;
                     else return 0;
                }
            })
            .map((t1) => {
               t1.lemma = t1.lemma.replace(/_/, " ");
               return t1;
            });
    }

    return response;
}