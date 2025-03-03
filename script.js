const serverUrl = "https://dice-roller-node-js-go-b5c8c5b0hahkcrfx.centralus-01.azurewebsites.net/"; // Replace with your actual API URL

async function rollDice() {
    try {
        // Call the API to roll a dice
        let response = await fetch(`${serverUrl}/roll-dice`);
        
        // Handle potential errors
        if (!response.ok) {
            throw new Error("Failed to fetch dice roll");
        }

        let data = await response.json();
        
        // Display the rolled number
        document.getElementById("result").textContent = `You rolled a ${data.result}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error rolling dice.";
        console.error(error);
    }
}
