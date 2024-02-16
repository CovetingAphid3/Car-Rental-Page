import { Typography, Paper, Grid, Button } from "@mui/material";
import "./Pricing.css"; // You can create this stylesheet for additional styling
import AddCardIcon from '@mui/icons-material/AddCard';
const Pricing = () => {
  const plans = [
    {
      title: "BASIC PLAN",
      price: "R99.99/month",
      features: [
        "Access To Category C Cars*",
        "24/7 Customer Support",
        "Limited Mileage",
      ],
    },
    {
      title: "STANDARD PLAN",
      price: "R199.99/month",
      features: [
        "Access To Category B and C Cars*",
        "24/7 Customer Support",
        "Unlimited Mileage",
        "Roadside Assistance",
      ],
    },
    {
      title: "PREMUIM PLAN",
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
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("price");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pricing" id="pricing">
      {/* Explanation of How It Works */}
      <Typography variant="h4">How It Works:</Typography>
      <Typography>
        Welcome to ZoomWheels, where your journey begins with simplicity and
        excitement. Follow these steps to experience the ultimate freedom of the
        open road:
      </Typography>
      <ol>
        <li>
          Choose Your Plan: Select from our range of plans – Basic, Standard, or
          Premium, each tailored to meet your unique needs.
        </li>
        <li>
          Flexible Booking: Customize your rental period to fit your schedule,
          whether it be a day, a week, or a month.
        </li>
        <li>
          Extensive Fleet: Explore our diverse fleet, ranging from economical
          options for city adventures to premium models for a touch of luxury.
        </li>
        <li>
          Reservation Made Easy: Reserve your vehicle effortlessly with our
          user-friendly platform and 24/7 customer support.
        </li>
        <li>
          Additional Services: Enhance your journey with optional add-ons like
          GPS navigation, child seats, or a designated driver.
        </li>
        <li>
          Pick Up and Go: Collect your vehicle from our convenient location when
          the day arrives, ready for your adventure.
        </li>
        <li>
          Return with Ease: Effortlessly return the vehicle, concluding your
          journey with great memories.
        </li>
      </ol>
      <Button variant="contained" color="primary" onClick={handleSmoothScroll}>
        Choose Your Plan Below
      </Button>

      <Grid container spacing={3} id="price">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper className="pricing-card" elevation={3}>
              <Typography variant="h6" gutterBottom>
                {plan.title}
              </Typography>
              <AddCardIcon/>
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
        <p style={{marginLeft:"30px"}}>*subject to availability</p>
      </Grid>
    </div>
  );
};

export default Pricing;
