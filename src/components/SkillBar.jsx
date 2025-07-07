import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SkillBar = ({ skill, value }) => {
  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {skill}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#ddd"
      }}
      />

    </Box>
  );
};

export default SkillBar;