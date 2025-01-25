import { filterDots } from "../filterDots";
import { getCoords } from "../getCoords";
import { getIndex } from "../getIndex";

export function getKingDots(index, cells) {
    const { x, y } = getCoords(index);
    const dots = [];

    const king = cells[index]
    const moved = king?.moved
    if (y == 0) {
        //top-right
        if (x == 4 && cells[getIndex(x + 3, y)]?.type == "rook"
            && cells[getIndex(x + 3, y)]?.color == "black"
            && !cells[getIndex(x + 3, y)]?.moved
            && !moved && !cells[getIndex(x + 1, y)]
            && !cells[getIndex(x + 2, y)]) {
            dots.push({x: x + 2, y: y})
        }
        //top-left
         else if (x == 4 && cells[getIndex(x - 4, y)]?.type == "rook"
            && cells[getIndex(x - 4, y)]?.color == "black"
            && !cells[getIndex(x - 4)]?.moved
            && !moved && !cells[getIndex(x - 1, y)]
            && !cells[getIndex(x - 2, y)]
            && !cells[getIndex(x - 3, y)]) {
            dots.push({x: x - 2, y: y})
       }
    }

    if (y == 7) {
        //bottom-right
        if (x == 4 && cells[getIndex(x + 3, 7)].type == "rook"
            && cells[getIndex(x + 3, y)]?.color == "white"
            && !cells[getIndex(x + 3, y)]?.moved && !moved
            && !cells[getIndex(x + 2, y)]
            && !cells[getIndex(x + 1, y)]) {
            dots.push({x: x + 2, y: y})
        }
        
        //bottom-left
        else if (x == 4 && cells[getIndex(x - 4, 7)]?.type == "rook"
            && cells[getIndex(x - 4, 7)]?.color == "white"
            && cells[getIndex(x - 4, 7)]?.moved == false
            && !moved && !cells[getIndex(x - 2, 7)]
            && !cells[getIndex(x - 2, 7)]
            && !cells[getIndex(x - 3, 7)]) {
            dots.push({x: x - 2, y: y})
        }
    }

    dots.push({ x: x, y: y - 1 });
    dots.push({ x: x, y: y + 1 });
    dots.push({ x: x - 1, y: y - 1 });
    dots.push({ x: x + 1, y: y - 1 });
    dots.push({ x: x + 1, y: y + 1 });
    dots.push({ x: x - 1, y: y + 1 });
    dots.push({ x: x + 1, y: y });
    dots.push({ x: x - 1, y: y });

    const res = filterDots(dots, cells, index);
    return res;
}
