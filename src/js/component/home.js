import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [isShown, setIsShown] = useState(false);
	const [variable, setVariable] = useState([
		"Do Homework",
		"Do Laundry",
		"Walk the Dog"
	]);

	let todo = variable.map((item, i) => {
		return (
			<li
				className="col-12 list-group-item text-info"
				style={{ height: "5rem" }}
				key={i}
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}>
				{item}
				{isShown && (
					<button
						className="float-right"
						onClick={() => removeItem(i)}>
						x
					</button>
				)}
			</li>
		);
	});

	const removeItem = index => {
		console.log(index);
		const newArray = variable.filter((item, i) => i != index);
		console.log(newArray);
		setVariable(newArray);
	};

	const newTodo = onKeyDownEvent => {
		console.log(onKeyDownEvent);
		if (onKeyDownEvent.keyCode === 13) {
			let userInput = onKeyDownEvent.target.value;
			const newTodo = [...todo, variable];
			setVariable(newTodo);
			console.log(variable);
			onKeyDownEvent.target.value = "";
		}
	};

	return (
		<>
			<h1 className="text-center text-success mt-4 ">To Do List</h1>
			<div className="List col-4  mx-auto list-group mt-4">
				<input
					className="col-12 p-3 font-weight-bold text-center"
					onKeyDown={newTodo}
					type="text"
					id="fname"
					placeholder="Enter A Task"
					name="fname"
				/>
				<ul className="col-12 p-0">
					{todo}
					<span className="footer list-group-item text-danger">
						{todo.length} item left
					</span>
				</ul>
			</div>
			{/* <div className="App">
				<button
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}>
					Hover over me!
				</button>
				{isShown && (
					<div>I&apos;ll appear when you hover over the button.</div>
				)}
			</div> */}
		</>
	);
}
