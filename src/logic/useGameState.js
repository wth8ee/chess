import { useState } from "react";
import { blackPawnRow, blackRow, figures, whitePawnRow, whiteRow } from "../constants";
import { getAllDots } from "./getDots/getAllDots";
import { getKingCoords } from "./getKingCoords";
import { checkCheck } from "./checkCheck";
import { checkMate } from "./checkMate";
import { getIndex } from "./getIndex";
import { getCoords } from "./getCoords";
import { filterBadDots } from "./filterBadDots";

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
                    const goodDots = filterBadDots(index, cells, tempDots, whiteIsNext)
                    setDots(goodDots);
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


            //проверка на короткую рокировку белых bottom-left
            if (x == 6 && y == 7
                && getCoords(selected.index).x == 4 && getCoords(selected.index).y == 7
                && selected.figure.type == "king"
                && selected.figure.color == "white") {
                newCells[getIndex(4, 7)] = null
                newCells[getIndex(6, 7)] = figures.whiteKing
                newCells[getIndex(5, 7)] = figures.whiteRook
                newCells[getIndex(7, 7)] = null
            }
            //проверка на дальнюю рокировку белых bottom-right
            if (x == 2 && y == 7
                && getCoords(selected.index).x == 4 && getCoords(selected.index).y == 7
                && selected.figure.type == "king"
                && selected.figure.color == "white") {
                newCells[getIndex(4, 7)] = null
                newCells[getIndex(2, 7)] = figures.whiteKing
                newCells[getIndex(3, 7)] = figures.whiteRook
                newCells[getIndex(0, 7)] = null
            }

            //проверка на короткую рокировку черных top-right
            if (x == 6 && y == 0
                && getCoords(selected.index).x == 4 && getCoords(selected.index).y == 0
                && selected.figure.type == "king"
                && selected.figure.color == "black"
            ) {
                newCells[getIndex(4, 0)] = null
                newCells[getIndex(6, 0)] = figures.blackKing
                newCells[getIndex(5, 0)] = figures.blackRook
                newCells[getIndex(7, 0)] = null
            }
            //проверка на длинную рокировку черных top-left
            if (x == 2 && y == 0
                && getCoords(selected.index).x == 4 && getCoords(selected.index).y == 0
                && selected.figure.type == "king"
                && selected.figure.color == "black"
            ) {
                newCells[getIndex(4, 0)] = null
                newCells[getIndex(2, 0)] = figures.blackKing
                newCells[getIndex(3, 0)] = figures.blackRook
                newCells[getIndex(0, 0)] = null
            }

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
