
import { checkCheck } from "../checkCheck";
import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";
import { getIndex } from "../getIndex";

export function getPawnDots(index, color, cells) {
    const { x, y } = getCoords(index);
    const dots = [];

    if (color == "white") {
        if (!cells[getIndex(x, y - 1)]) {
            dots.push({ x: x, y: y - 1 });
            if (y == 6 && !cells[getIndex(x, y - 2)]) {
                dots.push({ x: x, y: y - 2 });
            }
        }

        if (cells[getIndex(x - 1, y - 1)]) {
            dots.push({ x: x - 1, y: y - 1 });
        }
        if (cells[getIndex(x + 1, y - 1)]) {
            dots.push({ x: x + 1, y: y - 1 });
        }
    }

    if (color == "black") {
        if (!cells[getIndex(x, y + 1)]) {
            dots.push({ x: x, y: y + 1 });
            if (y == 1 && !cells[getIndex(x, y + 2)]) {
                dots.push({ x: x, y: y + 2 });
            }
        }

        if (cells[getIndex(x - 1, y + 1)]) {
            dots.push({ x: x - 1, y: y + 1 });
        }
        if (cells[getIndex(x + 1, y + 1)]) {
            dots.push({ x: x + 1, y: y + 1 });
        }
    }

    const res = filterDots(dots, cells, index);
    return res;
}
