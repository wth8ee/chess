import { GameCell } from "./GameCell";

export function GameBoard({
    cells,
    dots,
    selected,
    handleCellClick,
    check,
    mate,
}) {
    return (
        <div className="h-full w-full rounded-[2%] bg-white shadow-md overflow-hidden grid grid-cols-8 grid-rows-8">
            {cells.map((cell, i) => (
                <GameCell
                    index={i}
                    key={i}
                    figure={cell}
                    dots={dots}
                    selected={selected}
                    handleCellClick={handleCellClick}
                    check={check}
                    mate={mate}
                    cells={cells}
                />
            ))}
        </div>
    );
}
