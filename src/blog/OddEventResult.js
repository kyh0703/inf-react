function OddEventResult({ count }) {
  console.log("render :>> ");
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
}

export default OddEventResult;
