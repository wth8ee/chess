import clsx from "clsx";

export function TimerVidget({ time, isActive }) {
    const seconds = 600 - Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const restSeconds = seconds - minutes * 60;
    const fewTime = minutes < 1;
    return (
        <div
            className={clsx(
                "text-[max(3vmin,20px)] w-[max(20vmin,100px)] h-[max(5vmin,30px)] rounded-[max(0.8vmin,5px)] pr-[max(1vmin,8px)] font-medium shadow bg-white flex items-center justify-end",
                fewTime ? "text-red-500" : "text-slate-700",
                isActive
                    ? ""
                    : fewTime
                    ? "opacity-70 text-red-400"
                    : "opacity-70 text-gray-400"
            )}
        >
            {String(minutes).padStart(2, "0")}:
            {String(restSeconds).padStart(2, "0")}
        </div>
    );
}
