export const Container = ({ wide, children }) => {
  return (
    <div
      className={`h-full mx-auto w-full ${wide ? "max-w-[1620]" : "max-w-7xl"}`}
    >
      {children}
    </div>
  );
};
