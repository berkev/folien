const startButton = document.querySelector("#start");
const superHeldenCountText = document.querySelector("#superheldencount");
let superHeldenCount = 0;

function toggleSuperHeld(checkbox) {
	if (checkbox.checked) {
		superHeldenCount += 1;
	} else {
		superHeldenCount -= 1;
	}

	superHeldenCountText.innerText = superHeldenCount;
	checkSuperHeldenCount();
}


function checkSuperHeldenCount() {
	if (superHeldenCount === 0) {
		startButton.disabled = true;
	} else {
		startButton.disabled = false;
	}
}


function startAbenteuer() {
	alert("Dein Abenteuer beginnt, mach dich bereit!");
}