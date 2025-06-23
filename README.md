# Backend Demo: MCP Integration with Conversation Agent

## Overview
This project integrates Microsoft Cloud Platform (MCP) into a self-hosted conversation agent. It uses Retrieval-Augmented Generation (RAG) for industry-specific commerce and performs predictions using both internet and local data.

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your MCP API key in `server.ts`.
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### POST `/query`
- **Request Body**:
  ```json
  {
    "query": "Your query here",
    "industry": "Industry name"
  }
  ```
- **Response**:
  ```json
  {
    "response": "Generated response based on query and predictions"
  }
  ```

## Technologies Used
- MCP SDK
- Express.js
- Node.js
