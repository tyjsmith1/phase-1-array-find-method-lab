function superbowlWin(games) {
    const winObject = games.find(game => game.result === "W")

    if (winObject) {
        return winObject.year
    } else {
        return undefined
    }
}
