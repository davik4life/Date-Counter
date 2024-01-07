import { useState } from "react";
import "./App.css";

const today = new Date();
export default function App() {
	return (
		<>
			<header className="headerItem">
				<h1>Date Counter</h1>
			</header>
			<main>
				<Step />
				<Count />
				<div className="dateArea">{`Today is ${today.toDateString()}`}</div>
			</main>
		</>
	);
}

function Step() {
	return (
		<section className="bodyArea">
			<button>-</button>
			<p>Step: 1</p>
			<button>+</button>
		</section>
	);
}

function Count() {
	return (
		<section className="bodyArea">
			<button>-</button>
			<p>Count: 0</p>
			<button>+</button>
		</section>
	);
}
