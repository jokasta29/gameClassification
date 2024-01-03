# Player Classification System

This is a simple JavaScript project that uses functions and switch statements to classify a player based on the number of wins and losses.

## Installation

There is no special installation procedure. Simply clone or download this repository and open the `index.html` file in your browser.

## Usage

To use the classification system, modify the values of `winGames` and `lostGames` in the `index.js` file and run the script. The result will be displayed in the console.

```javascript
let winGames = 70;
let lostGames = 10;
let gamePoints = playerLevel(winGames, lostGames);
let classification = rankingLevel(gamePoints);

console.log("The Hero has " + winGames + " victories, and is at level " + classification);

```

## Contributions
Contributions are welcome! Feel free to open issues and submit pull requests.

## License
This project is licensed under the MIT License.
