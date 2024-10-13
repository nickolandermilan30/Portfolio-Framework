
const Tooltip = ({ text }) => {
  return (
    <div
      className="absolute bg-gray-800 text-white text-sm rounded p-1 transition-opacity duration-300"
      style={{ zIndex: 10, top: '5%', right: '120%', marginLeft: '10rem' }} // Position to the right with some margin
    >
      {text}
    </div>
  );
};

export default Tooltip;
