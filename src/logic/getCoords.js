export function getCoords(index) {
    const x = index % 8;
    const y = Math.floor(index / 8);
    return { x, y };
}
