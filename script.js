const serverUrl = "https://dice-roller-node-js-go-b5c8c5b0hahkcrfx.centralus-01.azurewebsites.net/fetching-from-server.html"; // Replace with your real API URL

// Wake up the server
document.getElementById("wakeServer").addEventListener("click", async function() {
    try {
        await fetch(`${serverUrl}/wake-up`);
        document.getElementById("result").textContent = "Server is awake!";
    } catch (error) {
        document.getElementById("result").textContent = "Failed to wake up server.";
        console.error(error);
    }
});

// Call the dice roll API
document.getElementById("rollDice").addEventListener("click", async function() {
    try {
        let response = await fetch(`${serverUrl}/roll-dice`);
        let data = await response.json();
        document.getElementById("result").textContent = `You rolled a ${data.result}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error rolling dice.";
        console.error(error);
    }
});

// Demonstrate CORS failure
async function causeCORSFailure() {
    try {
        let response = await fetch(`${serverUrl}/cors-failure`);
        let data = await response.json();
        document.getElementById("result").textContent = `CORS Test: ${data.result}`;
    } catch (error) {
        document.getElementById("result").textContent = "CORS failure occurred (expected).";
        console.error("CORS failure triggered:", error);
    }
}

// Auto-trigger CORS failure for testing
setTimeout(causeCORSFailure, 5000);