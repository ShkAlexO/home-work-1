import Button from "@mui/material/Button";

function CustomButton({ title, actionOnClick }) {
  return (
    <Button variant="contained" onClick={actionOnClick}>
      {title}
    </Button>
  );
}

export default CustomButton;
