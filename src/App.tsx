import Button from "./components/Button";
import Square from "./components/Square";
import { useGameLogic } from "./hooks/logic";
import Animation from "./components/Animation";

export default function App() {
	const { squares, turn, winner, updateSquares, resetGame } = useGameLogic();

	return (
		<div className="tic-tac-toe">
			<h1>TIC-TAC-TOE</h1>
			<Button reset={resetGame} />
			<div className="game">
				{Array.from("012345678").map((index: string) => (
					<Square
						key={index}
						index={parseInt(index)}
						updateSquare={updateSquares}
						letter={squares[parseInt(index)]}
					/>
				))}
			</div>
			<div className={`turn ${turn === "x" ? "left" : "right"}`}>
				<Square letter={"x"} />
				<Square letter={"o"} />
			</div>
			<Animation winner={winner} resetGame={resetGame} />
		</div>
	);
}
