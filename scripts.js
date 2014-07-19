var deviceHeading, deviceName, deviceVersion;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log('onLoad');
	navigator.compass.getCurrentHeading(
		function(heading){
			deviceHeading = heading;
		},
		function(){
			deviceHeading = 'Not defined';
		}
	);
	deviceName = window.device.name;
	deviceVersion = window.device.version;
}


function doStuff(){
	console.log('This is a console log, in the cloud!');
	console.log('Device Heading');
	console.log(deviceHeading);
	console.log('Device Name');
	console.log(deviceName);
	console.log('Device Version');
	console.log(deviceVersion);
}