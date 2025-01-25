import { checkCheck } from "./checkCheck"
import { getIndex } from "./getIndex"


export function filterBadDots(index, cells, dots = [], whiteIsNext) {
    const finalDots = []
    for (let dot of dots) {
        const newCells = cells.slice()
        if (cells[index]?.color != cells[getIndex(dot.x, dot.y)]?.color)
        newCells[getIndex(dot.x, dot.y)] = cells[index]
        newCells[index] = null
        if (!checkCheck(newCells, whiteIsNext, true)) {
            finalDots.push(dot)
        }
    }
    return finalDots
}