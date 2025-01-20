import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";
import { getIndex } from "../getIndex";

export function getRookDots(index, cells) {
    const { x, y } = getCoords(index);
    const dots = [];
    //top
    for (let i = 1; i < 8; i++) {
        if (y - i < 0) break;
        dots.push({ x: x, y: y - i });
        if (cells[getIndex(x, y - i)]) break;
    }
    //bottom
    for (let i = 1; i < 8; i++) {
        if (y + i > 7) break;
        dots.push({ x: x, y: y + i });
        if (cells[getIndex(x, y + i)]) break;
    }
    //right
    for (let i = 1; i < 8; i++) {
        if (x + i > 7) break;
        dots.push({ x: x + i, y: y });
        if (cells[getIndex(x + i, y)]) break;
    }
    //left
    for (let i = 1; i < 8; i++) {
        if (x - i < 0) break;
        dots.push({ x: x - i, y: y });
        if (cells[getIndex(x - i, y)]) break;
    }

    const res = filterDots(dots);
    return res;
}
