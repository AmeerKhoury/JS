function pingPongTracker() {
    let totalTime = 0;

    return {
        timeSpentPlaying() {
            return totalTime;
        },
        playOneGame() {
            totalTime += 15;
            return "Game Played";
        },
        myLevel() {
            if (totalTime < 30) {
                return "I need to improve my game";
            } else if (totalTime <= 100) {
                return "You need to improve your game";
            } else {
                return "Wow, I have wasted a lot of time";
            }
        }
    };
}

// Example usage:
const myGame = pingPongTracker();
console.log(myGame.playOneGame());      // "Game Played"
console.log(myGame.playOneGame());      // "Game Played"
console.log(myGame.timeSpentPlaying()); // 30
console.log(myGame.myLevel());          // "You need to improve your game"
