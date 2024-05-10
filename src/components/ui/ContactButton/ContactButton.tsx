import { memo } from "react";
import Button from "@mui/material/Button";
import { IContactButtonProps } from "@/components/ui/ContactButton/types";

function ContactButton(props: IContactButtonProps) {
  const { children, buttonProps } = props;
  const { sx, ...restProps } = buttonProps;
  return (
    <Button
      sx={{
        textTransform: "none",
        bgcolor: "#f5f5f5",
        color: "#172a48",
        padding: "24px",
        "&:hover": {
          opacity: 1,
          bgcolor: "#f5f5f5",
          transform: "scale(1.02)",
        },
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
}

export default memo(ContactButton);
