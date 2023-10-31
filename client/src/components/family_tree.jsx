import { Link, useNavigate } from "react-router-dom";
function FamilyTree() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/mainfamily");
        }}
      >
        Create New Family
      </button>
      <button
        onClick={() => {
          navigate("/savedfamily");
        }}
      >
        Saved Family Trees
      </button>
    </>
  );
}

export default FamilyTree;
