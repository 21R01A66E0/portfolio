import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ResumeSkillBar = ({ skill, value }) => {
  return (
    <Box sx={{ width: "100%"}} mb={0.5}>
      <Typography variant="subtitle1" gutterBottom>
        {skill}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 5,
          borderRadius: 5,
          backgroundColor: "#ddd"
      }}
      />

    </Box>
  );
};

export default ResumeSkillBar;