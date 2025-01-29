import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Amd from "../../public/images/Amd"
import Vodafone from "../../public/images/Vodafone"
import Talkit from "../../public/images/Talkit"
import Intel from "../../public/images/Intel"
import Tesla from "../../public/images/Tesla"


const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "-2rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        background: "#fff",
        padding: "0.5rem",
        borderRadius: "50%",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <ArrowBackIos />
    </Box>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "-2rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        background: "#fff",
        padding: "0.5rem",
        borderRadius: "50%",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <ArrowForwardIos />
    </Box>
  );
};

const Companies: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "85%", margin: "auto", textAlign: "left", mt: 5 }}>
      <Typography variant="h5" fontWeight={400} fontSize={"1.1rem"} mb={3}>
        Companies we helped grow
      </Typography>
      <Slider {...settings}>
        <Vodafone/> <Intel /> <Tesla /> <Amd /> <Talkit />
      </Slider>
    </Box>
  );
};

export default Companies;
