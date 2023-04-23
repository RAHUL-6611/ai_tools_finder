const { getAllAIToolsService } = require("../services/getAiTools");

const getAllAITools = (req, res, next) => {

    const searchQuery = req.query.search;

    const aiTools = getAllAIToolsService(searchQuery);

    res.status(200).json(aiTools);
  };

module.exports = { getAllAITools }