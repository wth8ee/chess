import { getCoords } from "./getCoords";

export function getKingCoords(cells, color) {
    for (let i in cells) {
        const cell = cells[i];
        if (cell && cell.type == "king" && cell.color == color) {
            const { x, y } = getCoords(i);
            return { x: x, y: y };
        }
    }
}
