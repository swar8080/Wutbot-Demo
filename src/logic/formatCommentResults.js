export default function formatCommentResults(comments){
    return comments
        .sort((c1, c2) => {
            //sort by highest lin similarity score
            if (c1.linIC < c2.linIC) return -1;
            if (c1.linIC > c2.linIC) return 1;
            return 0
        })
        .map((comment) => {
            const postCommentsLink = `https://www.reddit.com/r/${comment.subreddit}/comments/${comment.submissionId}/-/`;
            const subredditLink = `https://www.reddit.com/r/${comment.subreddit}`;

            return {
                title: comment.submissionTitle,
                body: comment.body,
                postLink: postCommentsLink,
                subreddit: comment.subreddit,
                subredditLink: subredditLink
            }
        });
}

