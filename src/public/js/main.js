const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");

form.onsubmit = async function (e) {
	e.preventDefault();

	const data = {
		email: email.value,
		password: password.value,
	};
	console.log(JSON.stringify(data));

	const response = await fetch("http://localhost:3000/api/v1/createAccount", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (response.status == 201) {
		alert("User Created!");
		console.log(response.body);
	}
};
