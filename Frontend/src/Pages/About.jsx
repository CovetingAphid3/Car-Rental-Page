import "./About.css";

import { Typography, Paper, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const About = () => {


  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const plans = [
    {
      title: "Basic Plan",
      price: "$99.99/month",
      features: [
        "Access To Category C Cars*",
        "24/7 Customer Support",
        "Limited Mileage",
      ],
    },
    {
      title: "Standard Plan",
      price: "$199.99/month",
      features: [
        "Access To Category B and C Cars*",
        "24/7 Customer Support",
        "Unlimited Mileage",
        "Roadside Assistance",
      ],
    },
    {
      title: "Premium Plan",
      price: "R299.99/month",
      features: [
        "Access To Any Vehicle*",
        "Optional Designated Driver Available",
        "Unlimited Mileage",
        "Roadside Assistance",
        "Complimentary Car Wash",
      ],
    },
  ];

  return (
    <div className="about">
      <div className="heading">
        
        <Typography variant="h4">
          Feel free to CONTACT us{" "}
          <Link to={"/contact"} onClick={handleSmoothScroll}>
            here
          </Link>
        </Typography>
      </div>
      <div className="about-body">
        <Typography variant="h4">Who We Are:</Typography>
        <Typography>
          Welcome to ZoomWheels – where your journey begins with a dash of
          excitement! We are not just a car rental service; we are your travel
          companions, committed to turning your trips into unforgettable
          adventures.
        </Typography>
        <Typography variant="h4">What We Offer:</Typography>
        <Typography>
          At ZoomWheels, we offer more than just cars; we provide keys to
          freedom and exploration. From sleek city rides to rugged off-road
          adventurers, our fleet is as diverse as your travel dreams. Elevate
          your experience with optional add-ons like GPS navigation, child
          seats, and even a picnic basket for spontaneous road-side stops.
        </Typography>
        <Typography variant="h4">Why Choose Us?</Typography>
        <Typography>
          Choosing ZoomWheels means stepping into a world of convenience. Our
          transparent pricing, easy reservation process, and commitment to
          customer satisfaction make us your ideal travel partner. Experience
          the thrill of the open road without any worries – we have everything
          covered!
        </Typography>
        <Typography variant="h4">Our Services:</Typography>
        <Typography>
          - Diverse Fleet: Cruise in style with our range of vehicles, from
          eco-friendly hybrids to luxurious SUVs.
          <br />
          - Adventure Packages: Unleash your inner explorer with our curated
          adventure packages, complete with insider tips on hidden gems and
          scenic routes.
          <br />
          - Concierge Service: Need assistance? Our 24/7 concierge service
          ensures you are always supported, whether it is finding the best local
          eateries or handling unexpected detours.
          <br />- Zoom Rewards: Join our loyalty program and enjoy exclusive
          perks, discounts, and priority access to new vehicle models.
        </Typography>
      </div>

      {/* Pricing Section */}
      <div className="pricing">
        <Typography variant="h3" gutterBottom>
          Choose a Plan
        </Typography>
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="pricing-card" elevation={3}>
                <Typography variant="h6" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary">
                  Choose Plan
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
