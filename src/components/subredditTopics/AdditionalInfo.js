import React from 'react';
import './AdditionalInfo.css';

export default function AdditionalInfo(){
   return (
        <div className='additional-info'>
            <div className='additional-info__section'>
                <h2 className='additional-info__section-heading'>What do the values in each column mean?</h2>

                <p className='additional-info__paragraph'>
                    <span className='additional-info__column-name'>Topic: </span>
                    <span>These are words that describe posts in the subreddit. This includes bigrams, which are pairs of words like “hot dog” and “space station”.</span>
                </p>

                <p className='additional-info__paragraph'>
                    <span className='additional-info__column-name'>Synset: </span>
                    <span>Synsets are groups of words that can be used to convey the same meaning in a sentence. Many words belong to more than one synset because they have more than one meaning. The challenge of assigning a word in text to the correct synset (determining its intended meaning) is called “Word Sense Disambiguation”, which is discussed further in the <i>About</i> tab of this page.</span>
                </p>

                <p className='additional-info__paragraph'>
                    <span className='additional-info__column-name'>Synset Meaning: </span>
                    <span>The interpreted meaning of the topic’s synset.</span>
                </p>

                <p className='additional-info__paragraph'>
                    <span className='additional-info__column-name'>Synset Similarity Score: </span>
                    <span>This is the <i>Lin Similarity</i> score, which is a measure of how similar one synset is to another based on their distance in the WordNet graph and how frequently the synsets' words appear in English texts. In this table, the similarity score shown for a topic is the maximum score obtained when comparing any of the topic’s synsets to all the other topics’ synsets.</span>
                </p>
            </div>

            <div className='additional-info__section'>
                <h2 className='additional-info__section-heading'>Topics not assigned a synset</h2>

                <p className='additional-info__paragraph'>These are words or bigrams that appear frequently in the subreddit but are not in the WordNet database.</p>
            </div>

            <div className='additional-info__section'>
                <h2 className='additional-info__section-heading'>What subreddits work best?</h2>

                <p className='additional-info__paragraph'>Word Sense disambiguation will be effective when the topics’ synsets share a lot of “similarity”. Synsets are similar if they have a strong “is a” relationship. For example, “dog” and “bat” will have high similarity for their animal-meaning synsets because both have a close “is a” relationship with the “animal” synset. The “hot dog” and “baseball bat” synsets will have low similarity because the closest synset they share an “is a” relationship with is “physical entity”</p>

                <p className='additional-info__paragraph'>However, this approach is ineffective for topics that are “related” but not “similar”. For example, “food” and “plate” are related because you eat food on a plate, but highly dissimilar because their closest synset with an “is a” relationship is also “physical entity”. </p>
            </div>

        </div>
   );
}
