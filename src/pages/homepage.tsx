import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ReactComponent as Image1 } from "../../public/images/Picture1.svg";
import SearchBox from "../components/common/SearchBox";
import Companies from "../components/Companies";
import ExploreCategory from "../components/ExploreCategory";
import PostingPamplete from "../components/PostingPamplete";
import FeaturedJob from "../components/FeaturedJob";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const searchBoxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
};

const Home: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Box sx={{ textAlign: "left", padding: "4rem 0", marginLeft: "6rem" }}>
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography fontSize={"4.5rem"} lineHeight={"5rem"} fontWeight={700}>
            Discover
          </Typography>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography fontSize={"4.5rem"} lineHeight={"5rem"} fontWeight={700}>
            more than
          </Typography>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography fontSize={"4.5rem"} lineHeight={"5rem"} fontWeight={700} sx={{ color: "#3B82F6" }}>
            5000+ Jobs
          </Typography>
        </motion.div>

        {/* Animated Image */}
        <motion.div variants={imageVariants} initial="hidden" animate="visible">
          <Image1 />
        </motion.div>

        {/* Animated Subtext */}
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography fontSize={"1.3rem"} sx={{ opacity: 0.7, marginTop: 2, maxWidth: "32.5rem" }}>
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </Typography>
        </motion.div>

        {/* Animated Search Box */}
        <motion.div variants={searchBoxVariants} initial="hidden" animate="visible">
          <Box width={"60%"} height={"3.5rem"} m={"1rem,0"}>
            <SearchBox />
          </Box>
          <Typography fontSize={"1rem"} sx={{ opacity: 0.7, marginTop: '2rem', maxWidth: "32.5rem" }}>
            Popular : UI Designer, UX Researcher, Android, Admin
          </Typography>
        </motion.div>

      </Box>
      <Stack width={"100%"} alignItems={'center'} justifyContent={'center'}>
        <Companies />
        <ExploreCategory />
        <Box width={'85%'}>
          <PostingPamplete />
        </Box>
        <FeaturedJob/>
      </Stack>
    </Box>
  );
};

export default Home;
