import express from 'express';
import { ConversationAgent } from './conversationAgent';

const app = express();
const port = 3000;
const apiKey = 'your-mcp-api-key'; // Replace with your MCP API key
const agent = new ConversationAgent(apiKey);

app.use(express.json());

app.post('/query', async (req, res) => {
	const { query, industry } = req.body;

	try {
		const response = await agent.handleUserQuery(query, industry);
		res.send({ response });
	} catch (error) {
		res.status(500).send({ error: 'Failed to process query' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
