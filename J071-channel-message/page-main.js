const loadingDockInterface = document.querySelector('#loading-dock iframe');

const loadingDockChannel = new MessageChannel();
const loadingDockChannelPort = loadingDockChannel.port1;

const initializeLoadingDock = (event) => {
	loadingDockInterface.contentWindow.postMessage('init', '*', [loadingDockChannel.port2]);
};
loadingDockInterface.addEventListener('load', initializeLoadingDock);