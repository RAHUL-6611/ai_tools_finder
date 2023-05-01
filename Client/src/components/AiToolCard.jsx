import PropTypes from "prop-types";

const AiToolCard = ({ tool }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <img src={tool.imageUrl} alt={tool.name} className="w-full rounded-md mb-4" />
        <div className="text-gray-800">
          <h5 className="text-lg font-semibold mb-2">{tool.name}</h5>
          <p className="mb-2">{tool.description}</p>
          <ul className="flex flex-wrap mb-4">
            {tool.tags.map((tag) => (
              <li key={tag} className="mr-2 mb-2 p-2 rounded-md bg-gray-200 text-gray-700">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

AiToolCard.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AiToolCard;