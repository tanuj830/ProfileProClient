import { usePDF } from "react-to-pdf";
import Experience from "./Experience";
const ConvertToPDF = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>{/* <Experience /> */}</div>
    </div>
  );
};

export default ConvertToPDF;
