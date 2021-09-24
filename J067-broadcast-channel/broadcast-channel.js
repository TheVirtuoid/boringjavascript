const processMessage = (event) => {
	currentAnimal.textContent = event.data;
}

const broadcastNewAnimal = (event) => {
	const newAnimal = newAnimalInput.value;
	if (newAnimal) {
		broadcastChannel.postMessage(newAnimal);
	}
	currentAnimal.textContent = newAnimal;
}

const submitButton = document.getElementById('change-animal');
const newAnimalInput = document.getElementById('new-animal');
const currentAnimal = document.getElementById('current-animal');
const channelName = "BoringJavaScript";

const broadcastChannel = new BroadcastChannel(channelName);
broadcastChannel.addEventListener('message', processMessage);
submitButton.addEventListener('click', broadcastNewAnimal);
