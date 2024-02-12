import { useState } from "react";
import "./App.css";

const today = new Date();
// const [step, setStep] = useState(1);
// const [count, setCount] = useState(0);
export default function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	function handleStepsPlus() {
		step >= 1 && setStep((s) => s + 1);
	}

	function handleStepsMinus() {
		step > 1 && setStep((s) => s - 1);
	}

	function handleCountPlus() {
		count >= 0 && setCount((s) => s + step);
	}

	function handleCountMinus() {
		count > 0 && setCount((s) => s - step);
	}
	return (
		<>
			<header className="headerItem">
				<h1>Date Counter</h1>
			</header>
			<main>
				<section className="bodyArea">
					<button onClick={handleStepsMinus}>-</button>
					<p>Step: {step}</p>
					<button onClick={handleStepsPlus}>+</button>
				</section>
				<section className="bodyArea">
					<button onClick={handleCountMinus}>-</button>
					<p>Count: {count}</p>
					<button onClick={handleCountPlus}>+</button>
				</section>
				<div className="dateArea">{ `Today is ${today.toDateString()}.`}</div>
			</main>
		</>
	);
}

// function Step({ step }) {
// 	return (
// 		<section className="bodyArea">
// 			<button>-</button>
// 			<p>Step: {step}</p>
// 			<button onClick={(s) => setStep(s + 1)}>+</button>
// 		</section>
// 	);
// }

// function Count() {
// 	return (
// 		<section className="bodyArea">
// 			<button>-</button>
// 			<p>Count: 0</p>
// 			<button>+</button>
// 		</section>
// 	);
// }
