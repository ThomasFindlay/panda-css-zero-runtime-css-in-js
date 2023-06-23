import { cva } from "../../styled-system/css";

const button = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    rounded: "sm",
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.800",
        color: "blue.100",
      },
      success: {
        bg: "green.800",
        color: "green.100",
      },
      danger: {
        bg: "red.800",
        color: "red.100",
      },
    },
    size: {
      sm: { padding: "6px 8px", fontSize: "12px" },
      md: { padding: "8px 12px", fontSize: "16px" },
      lg: { padding: "10px 16px", fontSize: "20px" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonCVAProps = NonNullable<Parameters<typeof button>[0]>;

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: ButtonCVAProps["variant"];
  size?: ButtonCVAProps["size"];
};

const Button = (props: ButtonProps) => {
  const { className, children, variant, size } = props;
  return (
    <button
      className={`${button({
        variant,
        size,
      })} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
