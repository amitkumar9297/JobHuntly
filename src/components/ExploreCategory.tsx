import React from "react";
import { Box, Typography } from "@mui/material";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import JobCategoryCard from "./common/JobCategoryCard";

const categories = [
  { name: "Design", info: "235" },
  { name: "Sales", info: "756" },
  { name: "Marketing", info: "412" },
  { name: "Engineering", info: "678" },
  { name: "Finance", info: "289" },
  { name: "HR", info: "142" },
  { name: "Operations", info: "523" },
  { name: "Support", info: "365" },
];

const ExploreCategory: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }} width="85%" marginX={"auto"}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Explore Categories
      </Typography>
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        {categories.map((job, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" }, // Responsive Width
              display: "flex",
              justifyContent: "center",
            }}
          >
            <JobCategoryCard name={job.name} info={job.info}>
              <DesignServicesOutlinedIcon fontSize="large" />
            </JobCategoryCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreCategory;
