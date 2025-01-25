export function filterDots(dots) {
    const res = dots.filter(
        (dot) => 0 <= dot.x && dot.x <= 7 && 0 <= dot.y && dot.y <= 7
    );
    
    return res;
}
