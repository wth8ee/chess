import clsx from "clsx";
import { getCoords } from "../logic/getCoords";

export function GameCell({
    className,
    index,
    figure,
    dots,
    selected,
    handleCellClick,
    check,
    mate,
}) {
    const { x, y } = getCoords(index);
    const isSelected = selected?.index == index;
    const colored = (x + y) % 2 == 1;
    const dotted = dots.some((dot) => dot.x == x && dot.y == y);
    const isChecked = check?.x == x && check?.y == y;
    const isMate = mate?.x == x && mate?.y == y;
    return (
        <div
            onClick={() => {
                if (mate) {
                    return;
                }
                handleCellClick(figure, dotted, index);
            }}
            className={clsx(
                className,
                "flex justify-center items-center relative select-none transition-colors",
                isMate
                    ? "bg-red-500"
                    : isChecked
                    ? "bg-amber-400"
                    : colored
                    ? isSelected
                        ? "bg-violet-300"
                        : "bg-violet-400"
                    : isSelected
                    ? "bg-violet-100"
                    : "bg-white"
            )}
        >
            {figure && <img className={clsx("h-[80%]")} src={figure.icon} />}
            {!figure && dotted && (
                <div className="aspect-square h-[35%] bg-black/25 rounded-full" />
            )}
        </div>
    );
}
