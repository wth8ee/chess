import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";

export function getKingDots(index) {
    const { x, y } = getCoords(index);
    const dots = [];

    dots.push({ x: x, y: y - 1 });
    dots.push({ x: x, y: y + 1 });
    dots.push({ x: x - 1, y: y - 1 });
    dots.push({ x: x + 1, y: y - 1 });
    dots.push({ x: x + 1, y: y + 1 });
    dots.push({ x: x - 1, y: y + 1 });
    dots.push({ x: x + 1, y: y });
    dots.push({ x: x - 1, y: y });

    const res = filterDots(dots);
    return res;
}
