import { Box } from "@mui/material";
import React from "react"
import JobCard from "./common/JobCard";
const FeaturedJob : React.FC =()=>{
    const recomandedCompanies = [
        {
          name: "Nomad",
          icon: "https://www.svgrepo.com/show/448241/nomad.svg",
          job: 2,
          bio: "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
          tag: ["Bussiness Service"],
        },
        {
          name: "Discord",
          icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.png",
          job: 3,
          bio: "We'd love to work with someone like you. We care about creating a delightful experience.",
          tag: ["Bussiness Service"],
        },
        {
          name: "Maze",
          icon: "https://www.datocms-assets.com/38511/1627404461-publisherlogo.jpg",
          job: 3,
          bio: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
          tag: ["Bussiness Service"],
        },
        {
          name: "Udacity",
          icon: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1456467107/nbygauewgh0ezwnbcmcx.png",
          job: 3,
          bio: "Udacity is a new type of online university that teaches the actual programming skills.",
          tag: ["Bussiness Service"],
        },
        {
          name: "Webflow",
          icon: "https://img.icons8.com/color/512/webflow.png",
          job: 3,
          bio: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
          tag: ["Bussiness Service", "Technology"],
        },
        {
          name: "Foundation",
          icon: "https://img.icons8.com/color/512/webflow.png",
          job: 3,
          bio: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
          tag: ["Bussiness Service", "Crypto"],
        },
      ];
    return (
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px 0",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {recomandedCompanies.map((data, index) => (
          <JobCard data={data} key={index} />
        ))}
      </Box>
    );
    
}

export default FeaturedJob;