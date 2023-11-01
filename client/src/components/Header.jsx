import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <header
      onMouseOver={(event) => {
        event.target.style.cursor = "pointer";
        event.target.style.cursor = "pointer";
        event.target.style.textDecoration = "underline";
      }}
      onMouseOut={(event) => {
        event.target.style.textDecoration = "";
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      FORBIDDEN FRUIT
    </header>
  );
}

export default Header;
