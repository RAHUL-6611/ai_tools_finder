const { aiToolsData } = require("../Data/aiToolsData");

const getAllAIToolsService = (searchQuery) => {
  let aiTools = aiToolsData;

  if (searchQuery) {
    const regex = new RegExp(searchQuery, "i");
    aiTools = aiTools.filter((tool) => {
      return (
        regex.test(tool.name) ||
        regex.test(tool.description) ||
        tool.tags.some((tag) => regex.test(tag))
      );
    });
  }

  return aiTools;
};

const getAiToolByIdService = (id) => {
  return aiToolsData.find((tool) => tool.id === id);
};

module.exports = { getAllAIToolsService, getAiToolByIdService }