const { aiToolsData } = require("../Data/aiToolsData");

const getAllAIToolsService = (searchQuery) => {
    let aiTools = aiToolsData;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      aiTools = aiTools.filter(tool => {
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
      });
    }
  
    return aiTools;
  };

const getAiToolByIdService = (id) => {
  return aiToolsData.find((tool) => tool.id === id);
};

module.exports = { getAllAIToolsService, getAiToolByIdService }