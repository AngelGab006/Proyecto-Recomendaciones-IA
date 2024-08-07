import song from "../data/song.json";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

async function analizar(user, frequentSongs) {
    const mensajeFinal = `Hola ${user}, basado en las canciones que escuchas frecuentemente, creemos que seguro vas a estar encantado de escuchar estas canciones:`;
  
    const messages = [
        { role: "system", content: "You are an AI music recommendation system. You have access to a JSON database of songs, each with attributes such as genre, artist, album, and year. Based on an array of songs a user frequently listens to, recommend a list of songs they might enjoy. Return the recommendations as a JavaScript array of song titles." },
        { role: "user", content: `These are the frequent songs of the user: ${frequentSongs.join(", ")}` },
        { role: "user", content: JSON.stringify(song)}
    ];
  
    try {
        const initProgressCallback = (initProgress) => {
            console.log(initProgress);
        };
        
        const selectedModel = "gemma-2-2b-it-q4f32_1-MLC";
        
        const engine = await CreateMLCEngine(
            selectedModel,
            { initProgressCallback: initProgressCallback }, // engineConfig
        );

        // Handle potential engine initialization issues
        if (!engine || !engine.chat || !engine.chat.completions) {
            throw new Error('Engine initialization failed');
        }
        
        const reply = await engine.chat.completions.create({
            messages,
        });

        if (!reply || !reply.choices || reply.choices.length === 0) {
            throw new Error('No recommendations received');
        }

        const recommendation = reply.choices[0].message.content;
        console.log(recommendation);

        return mensajeFinal + "\n" + recommendation; // Return the final message with recommendations
    } catch (error) {
        console.error('Error during recommendation generation:', error);

        // Optional: Return a default recommendation or an error message
        return 'Error generating recommendations. Please try again later.';
    }
}

export default analizar;
