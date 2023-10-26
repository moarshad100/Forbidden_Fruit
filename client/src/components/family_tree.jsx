import { Link, useNavigate } from "react-router-dom";
function FamilyTree() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/createfamily");
      }}
    >
      Create Family Tree
    </button>
  );
}

export default FamilyTree;
