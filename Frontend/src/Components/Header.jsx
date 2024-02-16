import headerImage from "../assets/header.jpg";
import "./Header.css";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const Header = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("pricing");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="headerContainer">
      <div className="headerContent">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ marginLeft: "25px", marginTop:"10px"  }}
        >
          Travel With Style.
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ marginLeft: "10px" }}
        >
          Explore, Experience, Enjoy - Your Journey Starts Here!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSmoothScroll}
        >
          Rent a Car
        </Button>
      </div>
      <div className="header">
        <img src={headerImage} alt="Car Rental" className="headerImg" />
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Header;
