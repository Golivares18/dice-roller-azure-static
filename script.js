const serverUrl =
"https://dice-roller-node-js-go-b5c8c5b0hahkcrfx.centralus-01.azurewebsites.net/";

async function rollDice() {
    try {
        let response = await fetch(`${serverUrl}/roll-dice`);

        if (!response.ok) {
            throw new Error("Failed to fetch dice roll");
        }

        let data = await response.json();

        // Displays number
        document.getElementById("result").textContent = `You rolled a ${data.result}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error rolling dice.";
        console.error(error);
    }
}