import { CreateMLCEngine } from "@mlc-ai/web-llm";

async function analizar(user, frequentSongs) {
    const mensajeFinal = `Hola ${user}, basado en las canciones que escuchas frecuentemente, creemos que seguro vas a estar encantado de escuchar estas canciones:`;
  
    const messages = [
        { role: "system", content: "You are an AI music recommendation generator. Your task is to suggest music tracks to the user based on their listening history. The user will provide a list of songs they currently enjoy. Analyze these songs to understand the user's preferences and recommend 10 new songs they might like. Your output should be a simple list of song titles followed by their artists, in Spanish. Do not include any additional text or explanation." },
        { role: "user", content: `These are the frequent songs of the user: ${frequentSongs.join(", ")}` },
    ];
  
    try {
        const initProgressCallback = (initProgress) => {
            console.log(initProgress);
            document.getElementById('output').innerText = initProgress.text;
        };
        
        const selectedModel = "gemma-2-2b-it-q4f32_1-MLC-1k";
        
        const engine = await CreateMLCEngine(
            selectedModel,
            { initProgressCallback: initProgressCallback }, // engineConfig
            { max_gpu_memory_fraction: 0.7 },
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

