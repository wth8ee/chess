import { GameBoard } from "./components/GameBoard";
import { GameLayout } from "./components/GameLayout";

export default function App() {
    return <GameLayout board={<GameBoard />} />;
}
