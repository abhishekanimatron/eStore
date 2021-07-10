import Loader from "react-loader-spinner";
// loading component
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Rings" color="black" height={70} width={70} />
    </div>
  );
}

export default Loading;
