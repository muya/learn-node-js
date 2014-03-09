function sleep (milliseconds) {
	var startTime = new Date().getTime();
	while(new Date().getTime() < startTime + milliseconds);
}