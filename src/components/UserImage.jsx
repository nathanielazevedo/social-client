import { Box } from "@mui/material";

const userImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
        }}
        width={size}
        height={size}
        alt="user"
        src={`https://social-server-production-bda9.up.railway.app/assets/${image}`}
      />
    </Box>
  );
};

export default userImage;
