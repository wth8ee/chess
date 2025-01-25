import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";
import { getIndex } from "../getIndex";

export function getBishopDots(index, cells) {
    const { x, y } = getCoords(index);
    const dots = [];

    //top-right
    for (let i = 1; i < 8; i++) {
        if (x + i > 7 || y - i < 0) break;
        dots.push({ x: x + i, y: y - i });
        if (cells[getIndex(x + i, y - i)]) break;
    }
    //top-left
    for (let i = 1; i < 8; i++) {
        if (x - i < 0 || y - i < 0) break;
        dots.push({ x: x - i, y: y - i });
        if (cells[getIndex(x - i, y - i)]) break;
    }
    //bottom-left
    for (let i = 1; i < 8; i++) {
        if (x - i < 0 || y + i > 7) break;
        dots.push({ x: x - i, y: y + i });
        if (cells[getIndex(x - i, y + i)]) break;
    }
    //bottom-right
    for (let i = 1; i < 8; i++) {
        if (x + i > 7 || y + i > 7) break;
        dots.push({ x: x + i, y: y + i });
        if (cells[getIndex(x + i, y + i)]) break;
    }

    const res = filterDots(dots, cells, index);
    return res;
}
