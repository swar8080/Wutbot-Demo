import React from 'react';
import './ProjectInfo.css';

export default function ProjectInfo(props){
    return (
        <div>
            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>About this Project</h2>
                <p>The goal of this project was to create a “bot” that participates in discussions on reddit in a human-like way. This boils down to the bot finding comments by reddit users that are about the same topics as other submissions on the site, and then responding with those comments. </p>
                <p>Although using comments from real people leads to the bot having proper (or believably improper) spelling, grammar, etc., the challenge is picking a comment that is actually on-topic.</p>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>About this Webpage</h2>

                <p>This webpage provides an overview of how the bot works while demoing its functionality related to Word Sense Disambiguation (discussed in the following section). It is divided into the following tabs:</p>

                <ul className='project-info__section__tab-info'>
                    <li><i>About:</i> A high-level build-up to how the bot works by explaining challenges in Word Sense Disambiguation.</li>
                    <li><i>Subreddit Topics:</i> Shows how the bot establishes context for posts in a specific subreddit. Enter the name of a subreddit to generate a list if its topics and their interpreted meanings</li>
                    <li><i>Comment WSD:</i> Search for reddit comments containing a specific word and then filter by the bot’s interpreted meaning of the word.</li>
                    <li><i>Reddit Bot:</i> Links to a subreddit showing the latest comments made by the bot on reddit.</li>
                </ul>

                <p>
                    <span>Lastly, I created this webpage to experiment with ReactJS. The front-end source code is available on </span>
                    <a href='https://github.com/swar8080/Wutbot-Webpage' target='_blank'>github</a>
                    <span> – feedback is appreciated!</span>
                </p>
            </div>

            <div className='section-divider'/>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>Examples of the Bot in Action</h2>
                <p>Before explaining how the bot works, below are some fun examples of the bot making comments on reddit posts (look for the bot’s posts with the username “Wutbot1”).</p>

                <ul className='project-info__section__bot-example-list'>
                    <li>
                        <a
                            href='https://www.reddit.com/r/WutbotPosts/comments/8js7ik/wutbot_on_canine_dog_ranimalsbeingbros_dog_jumps/'
                            target='_blank'>
                            Dogs are a bot’s best friend
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.reddit.com/r/backpacking/comments/8lpyl2/things_to_do_in_seattle/dzkv6tc/'
                            target='_blank'>
                            Things to do in Seattle
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.reddit.com/r/WutbotPosts/comments/8nrpoc/wutbot_on_biotech_stock_rstocks_biotech_stock/'
                            target='_blank'>
                            Opinionated Investment Advice from a Bot
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.reddit.com/r/WutbotPosts/comments/8ls2n2/wutbot_on_jacket_pant_rstreetwear_wdywt_my_jacket/'
                            target='_blank'>
                            Fashion Advice from a Bot
                        </a>
                    </li>
                </ul>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>The Challenge</h2>
                <p>As mentioned earlier, the challenge is matching reddit posts to relevant comments from elsewhere on the site. As a human, this would be very easy: If we see a post titled "<i>bass fishing with my dog</i>" we’d known to look for other comments about bringing pet dogs on fishing trips. Our brains are very good at interpreting the correct meaning of words in the context of a sentence. To machines thinking in 1s and 0s, this isn’t as easy.</p>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>Matching by Common Word</h2>
                <p>One approach to creating this bot would be to look for comments containing some of the same words as the post you are trying to match with. This could work sometimes, but going back to the "<i>bass fishing with my dog</i>" example, the bot might think its appropriate to respond with comments about playing bass guitar or hot dog recipes, but ignore a relevant comment containing “angling with my golden retriever”. </p>
                <p>The problem is that comments would be selected where the words are used in the wrong context - or ignored when different words are used in the same context.</p>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>Word-sense Disambiguation (WSD)</h2>
                <p>
                    <span>Building on the idea of matching by common word, it would be much more effective if the bot understood that “<i>bass fishing with my dog</i>” is about bass (the fish), dog (the mammal), that angling is a synonym for fishing, and that golden retriever is a type of dog. This task, having a machine identify the meaning or “sense” of a word, is known as </span>
                    <a href='https://en.wikipedia.org/wiki/Word-sense_disambiguation' target='_blank'>Word-sense Disambiguation</a>
                    <span>.</span>
                </p>
            </div>

            <div className='project-info__section'>
               <h2 className='project-info__section__heading'>WordNet</h2>
                <p>
                    <span>The WordNet database is a helpful tool in Word-sense Disambiguation. It is similar to a thesaurus in that it groups words that can be used to convey the same meaning in a sentence. These groups are called “synsets”. For example, the word “dog” </span>
                    <a href='http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=dog' target='_blank'>belongs to multiple synsets</a>
                    <span>, such as the group of all words that can be used to describe a hot dog (frankfurter, weenie, etc.). </span>
                </p>
                <p>Unlike a thesaurus, synsets in WordNet can be represented as nodes in a directed tree.  An edge from synset B to synset A means that B is a more specific type of A. For example, a puppy is a more specific type of dog (in the canine sense). This relationship is transitive which allows for calculating a “similarity score” for how strong the “is a” relationship exists between synsets based on their distance in the tree.</p>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>WSD of Reddit Content Using WordNet</h2>
                <p>Most posts and comments on reddit are short and contain incomplete sentences, making word-sense disambiguation difficult without additional information. </p>
                <p>Consider a post titled <i>Squash Serving Tips</i>. Is it about tips for serving squash (the food) or serving the ball in the sport of squash? It’s ambiguous from the title alone. If you knew that this post was in the <i>food</i> subreddit, it’d be obvious.</p>
                <p>The bot would also be able to make this connection. Using the WordNet graph, the bot can see that the squash (fruit) synset shares the “is a” relationship with the food synset, whereas the squash (sport) synset does not.</p>
            </div>

            <div className='project-info__section'>
                <h2 className='project-info__section__heading'>Putting it Together</h2>
                <ol className='project-info__bot-step-list'>
                    <li>
                        <span>The bot samples posts in a subreddit using a </span>
                        <a href='https://en.wikipedia.org/wiki/Topic_model' target='_blank'>topic modelling</a>
                        <span> algorithm to find topics (words) that describe the content. For example, topics for the food subreddit could be “food”, “hot dog”, and “plate”. Any words in the name of the subreddit are also considered topics.</span>
                    </li>
                    <li>All of the synsets that each topic belongs to are compared for similarity. The synset that has the highest similarity score with another topic’s synset becomes the interpreted meaning of the word in the context of that subreddit. At this point, there is a list of synsets describing the subreddit’s content.</li>
                    <li>The words in individual posts can be assigned synsets using a similar process: Their synsets are compared for similarity with each other and the synsets describing the subreddit it is posted in.</li>
                    <li>Synsets can be assigned to words in comments using a similar process. Comment-synset pairs are periodically gathered from new posts and stored in a database.</li>
                    <li>When scheduled, the bot looks at recent posts to reply to that are a good match for one of the comments stored in the database, based on the number of shared synsets. As a tie-breaker, I found using words less frequently used in English and words that contain more characters are usually less ambiguous (and less likely to be used incorrectly).</li>
                </ol>
            </div>

        </div>
    );
}