import { defineMCP } from "cursor-mcp";

export default defineMCP({
  async onAsk({ figma }) {
    const nodes = await figma.getSelectedNodes();
    return `選択中のノード数: ${nodes.length}。さらに詳細な質問を指定してください。`;
  }
});
