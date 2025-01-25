import { getAllDots } from "./getDots/getAllDots";
import { getIndex } from "./getIndex";
import { getKingCoords } from "./getKingCoords";

export function checkCheck(cells, whiteIsNext, self = false) {
    if (self) {
        const friendlyColor = whiteIsNext ? "white" : "black"
        const enemyColor = whiteIsNext ? "black" : "white"
        const friendlyKingCoords = getKingCoords(cells, friendlyColor)
        const allEnemyDots = getAllDots(cells, enemyColor)
        if (allEnemyDots.some(dot => dot.x == friendlyKingCoords?.x && dot.y == friendlyKingCoords?.y)) {
            return true
        }
        return false
    } else {
        const allWhiteDots = getAllDots(cells, "white");
    const blackKingCoords = getKingCoords(cells, "black");
    if (
        allWhiteDots.some((dot) => dot.x == blackKingCoords?.x && dot.y == blackKingCoords?.y)
    ) {
        return blackKingCoords
    }
    const allBlackDots = getAllDots(cells, "black")
    const whiteKingCoords = getKingCoords(cells, "white")
    if (
        allBlackDots.some(dot => dot.x == whiteKingCoords?.x && dot.y == whiteKingCoords?.y)) {
            return whiteKingCoords
        }
    
    return false;
    }
}