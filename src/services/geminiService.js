import { GEMINI_API_KEY, GEMINI_API_URL } from "../config";

export const getGeminiAnswer = async (question) => {
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: question }] }] })
        });
        if (!response.ok) throw new Error('Failed to get answer');
        return (await response.json()).candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
