import analizar from "./IA.js";

document.getElementById('recommend').addEventListener('click', async () => {
    const user = document.getElementById('user').value.trim();
    const songs = document.getElementById('songs').value.split(',').map(song => song.trim());

    if (!user || songs.length === 0 || songs[0] === "") {
        document.getElementById('output').innerText = 'Please enter a valid user name and at least one song.';
        return;
    }

    try {
        const output = await analizar(user, songs);  // Wait for the async function to complete
        document.getElementById('output').innerText = output;  // Display the recommendation
    } catch (error) {
        console.error('Error during recommendation:', error);
        document.getElementById('output').innerText = 'Failed to generate recommendations. Please try again later.';
    }
});
