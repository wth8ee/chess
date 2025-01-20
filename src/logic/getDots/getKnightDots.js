import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";

export function getKnightDots(index) {
    const { x, y } = getCoords(index);
    const dots = [];

    dots.push({ x: x - 2, y: y - 1 });
    dots.push({ x: x - 2, y: y + 1 });
    dots.push({ x: x - 1, y: y + 2 });
    dots.push({ x: x - 1, y: y - 2 });
    dots.push({ x: x + 2, y: y - 1 });
    dots.push({ x: x + 2, y: y + 1 });
    dots.push({ x: x + 1, y: y + 2 });
    dots.push({ x: x + 1, y: y - 2 });

    const res = filterDots(dots);
    return res;
}
