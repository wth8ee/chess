import clsx from "clsx";
import { getCoords } from "../logic/getCoords";
import { getIndex } from "../logic/getIndex";

export function GameCell({
  className,
  index,
  figure,
  dots,
  selected,
  handleCellClick,
  check,
  mate,
  cells,
}) {
  const filteredDots = dots.filter(
    (dot) => cells[getIndex(dot.x, dot.y)]?.color != selected?.figure?.color
  );
  const { x, y } = getCoords(index);
  const colored = (x + y) % 2 == 1;
  const dotted = filteredDots.some((dot) => dot.x == x && dot.y == y);
  const isChecked = check?.x == x && check?.y == y;
  const isMate = mate?.x == x && mate?.y == y;
  const isSelected = selected?.index == index;

  let color;
  if (isMate) {
    color = "bg-red-500";
  } else if (isChecked) {
    color = "bg-amber-400";
  } else {
    if (colored) {
      color = isSelected ? "bg-violet-300" : "bg-violet-400";
    } else {
      color = isSelected ? "bg-violet-100" : "bg-white";
    }
  }

  return (
    <div
      onClick={() => {
        console.log("1");
        if (mate) {
          return;
        }
        handleCellClick(figure, dotted, index);
      }}
      className={clsx(
        className,
        "flex justify-center items-center relative select-none transition-colors",
        color
      )}
    >
      {figure && <img className={clsx("h-[80%]")} src={figure.icon} />}
      {!figure && dotted && (
        <div className="aspect-square h-[35%] bg-black/25 rounded-full" />
      )}
      {figure && dotted && (
        <div className="aspect-square h-[105%] opacity-25 absolute">
          <img src="/src/assets/circle.png" />
        </div>
      )}
    </div>
  );
}
