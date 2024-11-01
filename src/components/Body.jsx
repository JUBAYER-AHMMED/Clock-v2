function Body({ children }) {
  let random = Math.round(Math.random() * 16777215).toString(16);

  return (
    <div
      style={{
        backgroundColor: `#${random}`,
        minHeight: "45vh",
        marginTop: "10%",
      }}
      className="container d-flex flex-column justify-content-center align-items-center"
    >
      {children}
    </div>
  );
}

export default Body;
