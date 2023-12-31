import { useNavigate, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("---");
    navigate("/");
  };
  return (
    <main>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={handleSubmit}>Back to Home</button>
      <Link to="/">I can do the same thing</Link>
    </main>
  );
}

export default Contact;
