export default function Button({ reset }: { reset: () => void }) {
	return <button onClick={() => reset()}>New Game</button>;
}
