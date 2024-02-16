import { Link } from "react-router-dom";
import "./Footer.css";
import { Container, Grid, Typography } from "@mui/material";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const StickyFooter = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Easing function for smooth scroll
    });
  };

  return (
    <div className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div className="footer-content">
              <Typography variant="h5">Contact Us</Typography>
              <Typography>Email: info@carrental.com</Typography>
              <Typography>Phone: (123) 456-7890</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="footer-content">
              <Typography variant="h5">Follow Us</Typography>
              <Typography>Facebook</Typography>
              <Typography>Twitter</Typography>
              <Typography>Instagram</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="footer-content">
              <Typography variant="h5">Quick Links</Typography>
              <Link to={"/"} component={ScrollLink} onClick={scrollToTop}>
                <Typography>Home</Typography>
              </Link>
              <Link to={"/about"} component={ScrollLink} onClick={scrollToTop}>
                <Typography>Services</Typography>
              </Link>
              <Link to={"/about"} component={ScrollLink} onClick={scrollToTop}>
                <Typography>FAQ</Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
