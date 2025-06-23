import { MCPIntegration } from './mcpIntegration';

export class ConversationAgent {
	private mcpIntegration: MCPIntegration;

	constructor(apiKey: string) {
		this.mcpIntegration = new MCPIntegration(apiKey);
	}

	async handleUserQuery(query: string, industry: string): Promise<string> {
		// Fetch RAG data
		const ragData = await this.mcpIntegration.fetchRAGData(industry);

		// Predict based on query and RAG data
		const prediction = await this.mcpIntegration.predictData({ query, ragData });

		// Generate response
		return `Based on your query, here is the prediction: ${prediction}`;
	}
}
