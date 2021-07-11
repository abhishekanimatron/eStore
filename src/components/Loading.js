import Loader from "react-loader-spinner";
// loading component
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Puff" color="black" height={70} width={70} />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
