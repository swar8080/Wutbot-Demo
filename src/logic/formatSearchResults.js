export default function formatSearchResults(searchResult){
    if (searchResult.rows){
        searchResult.rows = searchResult.rows
            .filter(searchRow => searchRow.commentCount > 0)
            .sort((r1, r2) => r2.commentCount - r1.commentCount);
    }

    return searchResult;
}