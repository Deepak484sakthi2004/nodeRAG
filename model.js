const { GoogleGenerativeAI } = require('@google/generative-ai');
const fetch = require('node-fetch'); // Import node-fetch

// Polyfill fetch and Headers globally
globalThis.fetch = fetch;
globalThis.Headers = fetch.Headers; // Polyfill Headers

// Initialize the GoogleGenerativeAI instance with the API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function handleQuery(query) {
    try
    {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            console.log(query);
            const result = await model.generateContent(query);
            return result.response.text();
    }
    catch (error) 
    {
            console.error('Error generating text:', error);
            return 'An error occurred while processing the query.';
        }
}

module.exports = handleQuery;
