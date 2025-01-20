import { getAllDots } from "./getDots/getAllDots";
import { getKingCoords } from "./getKingCoords";

export function checkCheck(cells, whiteIsNext) {
    const allDots = getAllDots(cells, whiteIsNext ? "white" : "black");
    const kingCoords = getKingCoords(cells, whiteIsNext ? "black" : "white");
    if (
        allDots.some((dot) => dot.x == kingCoords?.x && dot.y == kingCoords?.y)
    ) {
        return kingCoords;
    }
    return false;
}
