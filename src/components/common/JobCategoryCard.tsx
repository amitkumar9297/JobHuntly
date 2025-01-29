import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
interface JobCategoryCardProps {
  name: string;
  info: string;
  children: React.ReactNode;
}
const JobCategoryCard: React.FC<JobCategoryCardProps> = ({
  children,
  name,
  info,
}) => {
  return (
    <Card
      sx={{
        width: 250,
        padding: 2,
        borderRadius: 0,
        boxShadow: 1,
        cursor: "pointer",
        "&:hover": { boxShadow: 3 },
      }}
    >
      <CardContent>
        <Box sx={{ color: "primary.main", mb: 2 }}>{children}</Box>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info} jobs available
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <ArrowForwardIcon fontSize="medium" color="action" />
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCategoryCard;
