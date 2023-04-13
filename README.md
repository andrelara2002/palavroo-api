# Palavroo API
An API that allows the search of Portuguese words in a random manner, for use in games, for example.

Based on the words provided in the VERO Portuguese spelling correction system, this API is for requesting words with all the words of the Portuguese language.

## Routes:
- /words: Request for all words available in the API, without any filter.
GET Method: Returns a JSON file with all the words from the API individually as a string.

> Return: ["batata", "chicken", ...]

- /random: Search for a random word of any size.
GET Method: Returns a variable as a string with the random word.

> Return: "batata"

/randomsize/:size: Search for a random word with a specific size, passed as a query parameter.
GET Method: Returns a variable as a string with the random word, only if you send an int as a parameter indicating the desired number of letters.

> Return: "batata"

## Notes:
For the moment, this only works in Portuguese
