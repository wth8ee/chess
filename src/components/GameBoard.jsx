import { useGameState } from "../logic/useGameState";
import { GameCell } from "./GameCell";

export function GameBoard() {
    const { cells, dots, selected, handleCellClick, check, mate } =
        useGameState();

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
                />
            ))}
        </div>
    );
}
