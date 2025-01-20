import { useState } from "react";
import { blackPawnRow, blackRow, figures, whitePawnRow, whiteRow } from "../constants";
import { getAllDots } from "./getDots/getAllDots";
import { getKingCoords } from "./getKingCoords";
import { checkCheck } from "./checkCheck";
import { checkMate } from "./checkMate";
import { getIndex } from "./getIndex";
import { getCoords } from "./getCoords";

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
        const {x, y} = getCoords(index)
        if (figure) {
            if (dotted && selected.figure.color != figure.color) {
                //хаваем
                const newCells = cells.slice();
                newCells[selected.index] = null;
                selected.figure.moved = true
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
                //переключение на другую фигуру
                if (
                    (whiteIsNext && figure.color == "white") ||
                    (!whiteIsNext && figure.color == "black")
                ) {
                    const tempDots = figure.getDots(index, cells);
                    setDots(tempDots);
                    setSelected({ index: index, figure: figure });
                }
                //расфокус
                else {
                    setSelected(null);
                    setDots([]);
                }
            }
        } else if (dotted) {
            //перемещение на пустую клетку
            const newCells = cells.slice();
            newCells[selected.index] = null;
            selected.figure.moved = true
            newCells[index] = selected.figure;


            //проверка на рокировку
            if (x == 6 && y == 7
                && getIndex(selected.index) == {x: 4, y: 7}
                && selected.figure.type == "rook"
                && selected.figure.color == "white") {
                console.log('successful r')
                newCells[getIndex(4, 7)] = null
                newCells[getIndex(6, 7)] = figures.whiteRook
            }

            console.log(x == 6 && y == 7)

            setCells(newCells);
            setSelected(null);
            setDots([]);
            const tempCheck = checkCheck(newCells, whiteIsNext);
            setCheck(tempCheck);
            if (tempCheck) {
                setMate(checkMate(newCells, whiteIsNext));
            }
            setWhiteIsNext((l) => !l);
        }
        //расфокус
        else {
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
