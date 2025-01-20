import { checkCheck } from "./checkCheck";
import { getIndex } from "./getIndex";
import { getKingCoords } from "./getKingCoords";

export function checkMate(cells, whiteIsNext) {
    const matedColor = whiteIsNext ? "black" : "white";
    const kingCoords = getKingCoords(cells, matedColor);
    for (let i in cells) {
        const cell = cells[i];
        if (!cell) {
            continue;
        }
        if (cell && cell.color == matedColor) {
            const figureDots = cell.getDots(i, cell);
            for (let dot of figureDots) {
                const newCells = cells.slice();
                const index = getIndex(dot.x, dot.y);
                if (newCells[index]?.color != cell.color) {
                    newCells[index] = cell;
                    newCells[i] = null;
                }
                if (!checkCheck(newCells, whiteIsNext)) {
                    console.log(dot, `${cell.color}-${cell.type}`);
                    return false;
                }
            }
        }
    }
    return kingCoords;
}
