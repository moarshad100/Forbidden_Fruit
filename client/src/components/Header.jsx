import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <header
      onMouseOver={(event) => {
        event.target.style.cursor = "pointer";
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      Arshad
    </header>
  );
}

export default Header;
