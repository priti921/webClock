window.onload = (function() {
			function displayTime() {
				var currentTime = new Date();
				var hours = currentTime.getHours();
				var minutes = currentTime.getMinutes();
				var seconds = currentTime.getSeconds();
				setInterval(displayTime, 1000);

				var clockTime = document.getElementById('clock');
				clockTime.innerHTML = hours + ":" + minutes + ":" + seconds;

			}
			displayTime();
		});