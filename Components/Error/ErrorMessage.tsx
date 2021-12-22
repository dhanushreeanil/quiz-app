const ErrorMessage = ({ children }: any) => {
  return (
    <div
      style={{
        width: "95%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "#ed1f65",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
