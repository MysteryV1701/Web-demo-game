/* eslint-disable jsx-a11y/anchor-is-valid */
export const Button = (props) => {
  const {
    color,
    bg,
    size,
    icon,
    transparent,
    center,
    width,
    children,
    onClick,
    type,
  } = props;
  return (
    <a
      className={`inline-flex items-center cursor-pointer rounded-xl ${
        width ? width : "w-full"
      } ${center && "mx-auto"} ${size ? size : "text-base"} ${
        color ? color : "text-dark"
      } `}
      onClick={onClick}
    >
      {icon && icon} {children}
    </a>
  );
};
