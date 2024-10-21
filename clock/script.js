        function updateDate() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.toLocaleString('default', { month: 'short' });
            var day = now.getDate();

            // Format the date
            var dateString = day.toString().padStart(2, '0') + '/' +
                month + '/' +
                year.toString();

            // Update the date element
            document.getElementById('date').textContent = dateString;
        }

        // Update the date every second
        setInterval(updateDate, 1000);
  
        let lastTime = null;

        async function updateTime() {
            try {
                // Fetch time data from the World Time API only once
                const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
                const data = await response.json();

                // Set the last known accurate time
                lastTime = new Date(data.datetime);

                // Update the clock immediately
                displayTime();

                // Start a local clock that updates every second
                setInterval(displayTime, 1000);

            } catch (error) {
                console.error('Error fetching time:', error);
            }
        }

        function displayTime() {
    if (lastTime) {
        // Increment the time by 1 second
        lastTime.setSeconds(lastTime.getSeconds() + 1);

        // Display the time in 12-hour format with AM/PM
        document.getElementById('clock').innerText = lastTime.toLocaleTimeString('en-US', { hour12: true });
    }
}

        // Initialize the clock on page load
        window.onload = updateTime;
