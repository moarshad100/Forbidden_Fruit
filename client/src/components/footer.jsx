import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const linkStyle = {
    border: "1px black",
    padding: "5px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  };
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <hr />
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-light mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Forbidden Fruit</h4>
      </div>
    </footer>
  );
}
