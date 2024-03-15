import { motion } from "framer-motion";
import "./Square.css";

export interface SquareProps {
	index?: number;
	updateSquare?: (index: number) => void;
	letter: string;
}

export default function Square({ index, updateSquare, letter }: SquareProps) {
	const handleClick = () => {
		if (updateSquare && index !== undefined)
			updateSquare(index);
	};

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			className="square"
			onClick={handleClick}
		>
			{letter && (
				<motion.span
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					className={letter}
				></motion.span>
			)}
		</motion.div>
	);
}
