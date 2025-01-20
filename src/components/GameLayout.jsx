export function GameLayout({ board }) {
    return (
        <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
            <div className="h-[80%] aspect-square">{board}</div>
        </div>
    );
}
