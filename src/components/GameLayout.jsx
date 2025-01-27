import { TimerIcon } from "../icons/TimerIcon";
import { useGameState } from "../logic/useGameState";
import { GameBoard } from "./GameBoard";
import { TimerVidget } from "./TimerVidget";

export function GameLayout() {
    const {
        cells,
        dots,
        selected,
        handleCellClick,
        check,
        mate,
        whiteTime,
        blackTime,
        whiteIsNext,
        gameRunning,
        handleGameStart,
    } = useGameState();
    return (
        <div className="w-full h-screen bg-slate-200 flex justify-center items-center gap-10 xl:flex-row flex-col">
            <div className="lg:h-full flex flex-col justify-center gap-[max(2vmin,8px)] items-end">
                <TimerVidget
                    time={blackTime.timePassed}
                    isActive={!whiteIsNext && gameRunning}
                />
                <div className="h-[max(80vmin,350px)] aspect-square">
                    <GameBoard
                        cells={cells}
                        dots={dots}
                        selected={selected}
                        handleCellClick={handleCellClick}
                        check={check}
                        mate={mate}
                    />
                </div>
                <TimerVidget
                    time={whiteTime.timePassed}
                    isActive={whiteIsNext && gameRunning}
                />
            </div>
            <div className="flex flex-col xl:h-[calc(100vh-calc(100vh-max(80vmin,350px)-max(4vmin,16px)-max(10vmin,60px)))] gap-[max(2vmin)] h-full bg-white px-[min(6vmin)] p-[min(3vmin)] shadow rounded-[2%]">
                <div className="flex flex-col relative cursor-pointer">
                    <div className="h-[max(7vmin)] w-[max(40vmin)] outline outline-1 outline-slate-500 bg-slate-200 rounded-[max(1vmin)] text-2xl gap-[1vmin] flex justify-center items-center font-medium text-black z-10">
                        <TimerIcon className="h-[3vmin] w-[3vmin] aspect-square" />
                        10 min.
                    </div>
                    <div className="h-[max(7vmin)] w-[max(40vmin)] bg-slate-400 rounded-[max(1vmin)] absolute top-[0.4vmin]" />
                </div>

                <div className="relative flex flex-col text-white hover:text-purple-200 transition-colors cursor-pointer">
                    <button
                        onClick={handleGameStart}
                        className="text-4xl bg-gradient-to-tr from-violet-500 to-purple-400 font-medium w-[max(40vmin)] h-[max(7vmin)] rounded-[max(1vmin)] z-10"
                    >
                        Play
                    </button>
                    <div className="bg-gradient-to-r from-violet-700 to-purple-600 w-[max(40vmin)] h-[max(7vmin)] rounded-[max(1vmin)] absolute top-[max(0.5vmin)]" />
                </div>
            </div>
        </div>
    );
}
