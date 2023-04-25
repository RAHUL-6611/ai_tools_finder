const { getAllAIToolsService, getAiToolByIdService } = require("../services/getAiTools");

const getAllAITools = (req, res, next) => {
  const searchQuery = req.query.search;

  const aiTools = getAllAIToolsService(searchQuery);

  res.status(200).json(aiTools);
};

const getAiToolById = (req, res, next) => {
  const toolId = req.params.id;
  const aiTool = getAiToolByIdService(toolId);

  if (!aiTool) {
    return res.status(404).json({ message: "AI tool not found" });
  }

  res.status(200).json(aiTool);
};

module.exports = { getAllAITools, getAiToolById }