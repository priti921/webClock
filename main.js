var meridiem = "AM"

window.onload = (function() {
			function displayTime() {
				var currentTime = new Date();
				var hours = currentTime.getHours();
				var minutes = currentTime.getMinutes();
				var seconds = currentTime.getSeconds();
				setInterval(displayTime, 1000);

				if(hours > 12) {
					hours = hours - 12;
					meridiem = "PM";
				}

				if(hours === 0) {
					hours = 12;
				}

				var clockTime = document.getElementById('clock');
				clockTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;

			}
			displayTime();
		});