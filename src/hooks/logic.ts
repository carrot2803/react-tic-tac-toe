import { useState } from "react";

export function useGameLogic() {
	const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
	const [turn, setTurn] = useState("x");
	const [winner, setWinner] = useState<string | null>("");

	const checkGameOver = () => {
		for (const square of squares) if (!square) return false;
		return true;
	};

	const checkWinning = () => {
		const combinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const combo of combinations) {
			const [a, b, c] = combo;
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			)
				return squares[a];
		}
		return null;
	};

	const updateSquares = (index: number) => {
		if (squares[index] || winner) return;
		const sqr = squares;
		sqr[index] = turn;
		setSquares(sqr);
		setTurn(turn === "x" ? "o" : "x");
		const winningUser = checkWinning();
		if (winningUser) setWinner(winningUser);
		else if (checkGameOver()) setWinner("x | o");
	};

	const resetGame = () => {
		setSquares(Array(9).fill(""));
		setTurn("x");
		setWinner(null);
	};

	return { squares, turn, winner, updateSquares, resetGame };
}
