import analizar from "./IA.js";

document.getElementById('recommend').addEventListener('click', async () => {
    const user = document.getElementById('user').value;
    const songs = document.getElementById('songs').value.split(',');

    try {
        const output = await analizar(user, songs);  // Wait for the async function to complete
        document.getElementById('output').innerText = output;  // Display the recommendation
    } catch (error) {
        console.error('Error during recommendation:', error);
        document.getElementById('output').innerText = 'Failed to generate recommendations.';
    }
});
