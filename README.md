# Interview Technical Assignment - Stemming/frequency

Solution for senior developer interview using Node

Run app with `npm start`

Run tests with `npm test`

## The test

At NICE Digital Services, we use Elasticsearch. Elasticsearch indexes content to provide relevant search results for a query. One aspect of indexing is stemming. Stemming is the process for reducing inflected (or sometimes derived) words to their stem, base or root form. For example the stemmed form of 'classes' is 'class'.

Please write code that processes the some input text to determine the frequency of the stemmed words within it. Please see the acceptance criteria below. Your solution should cope with other input texts containing those terms.

### Acceptance criteria

#### Input text

_"Friends are friendlier friendlies that are friendly and classify the friendly classification class. Flowery flowers flow through following the flower flows."_

Given the input text above, when asked for the following words, return the associated frequency count of the stem of the word as specified below

| Word             | Frequency |
| ---------------- | --------- |
| "following"      | 1         |
| "flow"           | 2         |
| "classification" | 3         |
| "class"          | 3         |
| "flower"         | 3         |
| "friend"         | 5         |
| "friendly"       | 5         |
| "classes"        | 3         |

### Instructions

- Don't use stemming libraries
- prove your solution meets the acceptance criteria.

## Things to consider further

- The flow/flower issue - not finding flow in flower without using its own specific test?
- Where in the word the match comes up, do we only want to match at the beginning of a word? Does unfollow come from the same stem as follow? Seems right to find flower in sunflower.
- I considered throwing an error if the type of the input wasn't a string, but because my interface is using readline it should always be a string.
