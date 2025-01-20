export function getAllDots(cells, color) {
    const allDots = new Set();
    const allDotArrays = [];
    for (let i in cells) {
        const cell = cells[i];
        if (cell && cell.color == color) {
            allDotArrays.push(cell.getDots(i, cells));
        }
    }

    for (let dotArray of allDotArrays) {
        for (let dot of dotArray) {
            allDots.add(dot);
        }
    }

    return Array.from(allDots);
}
