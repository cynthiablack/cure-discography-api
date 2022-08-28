# The Cure's Discography API
The Cure's Discogrphy API is a searchable public API containing the catalog of The Cure's live and studio albums along with compilations, and extended play releases.

**Link to project:** https://cure-discography.herokuapp.com/

![alt tag](https://github.com/cynthiablack/cure-discography-api/blob/main/CureAPI.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express

The Cure's Discography API is a public API containing a partial catalog of music released by The Cure. The catalog includes album title, release year, label, and album category (studio, live, compilation, or extended play). Users can access the API directly or by using the search field to return results for individual releases by album name.

The API consists of a JSON object (discography) with subobjects for each release, all hard-code in the server.js file. The /api url allows access to the full discography data set, while main.js controls how search results are relayed to the DOM and automatically toggles a 'hidden' class when results are available.

## Planned Enhancements

- Add singles
- Add songlist catalog
- Add search fields for: release year, covers, song length, songwriter, country of release, chart position
- Refactor main.js search functionality to return search results for partial entries (i.e, searching for 'top' would return data for 'The Top')
- evaluate efficiency of storing data in database vs. hard-coded server.js object

## Lessons Learned:

Punctuation matters! I wrote my original fetch request with single quotation marks (' ') instead of backticks (` `). When I added a template literal to the url to handle user input for the search query, the fetch request failed to return valid data. Although the error I received suggested my JSON data was missing brackets, if I'd more carefully read my fetch request, I would not have spent time reviewing every line of server.js to ensure the JSON object was properly coded.

## License
MIT