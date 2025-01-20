import { getBishopDots } from "./logic/getDots/getBishopDots";
import { getKingDots } from "./logic/getDots/getKingDots";
import { getKnightDots } from "./logic/getDots/getKnightDots";
import { getPawnDots } from "./logic/getDots/getPawnDots";
import { getQueenDots } from "./logic/getDots/getQueenDots";
import { getRookDots } from "./logic/getDots/getRookDots";

export const figureImages = {
    pawn: "/src/assets/pawn.png",
    bishop: "/src/assets/bishop.png",
    rook: "/src/assets/rook.png",
    queen: "/src/assets/queen.png",
    king: "/src/assets/king.png",
    knight: "/src/assets/knight.png",
};

export const figures = {
    whitePawn: {
        type: "pawn",
        color: "white",
        icon: "/src/assets/white-pawn.png",
        getDots: (index, cells) => {
            return getPawnDots(index, "white", cells);
        },
    },
    whiteBishop: {
        type: "bishop",
        color: "white",
        icon: "/src/assets/white-bishop.png",
        getDots: getBishopDots,
    },
    whiteRook: {
        type: "rook",
        color: "white",
        icon: "/src/assets/white-rook.png",
        moved: false,
        getDots: getRookDots,
    },
    whiteQueen: {
        type: "queen",
        color: "white",
        icon: "/src/assets/white-queen.png",
        getDots: getQueenDots,
    },
    whiteKing: {
        type: "king",
        color: "white",
        icon: "/src/assets/white-king.png",
        moved: false,
        getDots: getKingDots,
    },
    whiteKnight: {
        type: "knight",
        color: "white",
        icon: "/src/assets/white-knight.png",
        getDots: getKnightDots,
    },
    blackPawn: {
        type: "pawn",
        color: "black",
        icon: "/src/assets/black-pawn.png",
        getDots: (index, cells) => {
            return getPawnDots(index, "black", cells);
        },
    },
    blackBishop: {
        type: "bishop",
        color: "black",
        icon: "/src/assets/black-bishop.png",
        getDots: getBishopDots,
    },
    blackRook: {
        type: "rook",
        color: "black",
        icon: "/src/assets/black-rook.png",
        getDots: getRookDots,
        moved: false,
    },
    blackQueen: {
        type: "queen",
        color: "black",
        icon: "/src/assets/black-queen.png",
        getDots: getQueenDots,
    },
    blackKing: {
        type: "king",
        color: "black",
        icon: "/src/assets/black-king.png",
        moved: false,
        getDots: getKingDots,
    },
    blackKnight: {
        type: "knight",
        color: "black",
        icon: "/src/assets/black-knight.png",
        getDots: getKnightDots,
    },
};

export const blackRow = [
    figures.blackRook,
    figures.blackKnight,
    figures.blackBishop,
    figures.blackQueen,
    figures.blackKing,
    figures.blackBishop,
    figures.blackKnight,
    figures.blackRook,
];
export const blackPawnRow = Array(8).fill(figures.blackPawn);
export const whiteRow = [
    figures.whiteRook,
    figures.whiteKnight,
    figures.whiteBishop,
    figures.whiteQueen,
    figures.whiteKing,
    figures.whiteBishop,
    figures.whiteKnight,
    figures.whiteRook,
];
export const whitePawnRow = Array(8).fill(figures.whitePawn);
