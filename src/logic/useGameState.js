import { useState } from "react";
import { blackPawnRow, blackRow, whitePawnRow, whiteRow } from "../constants";
import { getAllDots } from "./getDots/getAllDots";
import { getKingCoords } from "./getKingCoords";
import { checkCheck } from "./checkCheck";
import { checkMate } from "./checkMate";

export function useGameState() {
    const [dots, setDots] = useState([]);
    const [selected, setSelected] = useState(null);
    const [whiteIsNext, setWhiteIsNext] = useState(true);
    const [check, setCheck] = useState(false);
    const [mate, setMate] = useState(false);

    const [cells, setCells] = useState([
        ...blackRow,
        ...blackPawnRow,
        ...Array(32).fill(null),
        ...whitePawnRow,
        ...whiteRow,
    ]);

    const handleCellClick = (figure, dotted, index) => {
        if (figure) {
            if (dotted && selected.figure.color != figure.color) {
                const newCells = cells.slice();
                newCells[selected.index] = null;
                newCells[index] = selected.figure;
                setCells(newCells);
                setSelected(null);
                setDots([]);
                const tempCheck = checkCheck(newCells, whiteIsNext);
                setCheck(tempCheck);
                if (tempCheck) {
                    setMate(checkMate(newCells, whiteIsNext));
                }
                setWhiteIsNext((l) => !l);
            } else {
                if (
                    (whiteIsNext && figure.color == "white") ||
                    (!whiteIsNext && figure.color == "black")
                ) {
                    const tempDots = figure.getDots(index, cells);
                    setDots(tempDots);
                    setSelected({ index: index, figure: figure });
                } else {
                    setSelected(null);
                    setDots([]);
                }
            }
        } else if (dotted) {
            const newCells = cells.slice();
            newCells[selected.index] = null;
            newCells[index] = selected.figure;
            setCells(newCells);
            setSelected(null);
            setDots([]);
            const tempCheck = checkCheck(newCells, whiteIsNext);
            setCheck(tempCheck);
            if (tempCheck) {
                setMate(checkMate(newCells, whiteIsNext));
            }
            setWhiteIsNext((l) => !l);
        } else {
            setDots([]);
            setSelected(null);
        }
    };

    return {
        cells,
        dots,
        selected,
        handleCellClick,
        check,
        mate,
    };
}
