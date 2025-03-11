import { FaArrowUpLong } from "react-icons/fa6";
import "./Scroll.css";

function ScrollToTop({}) {
  return (
    <div className="scroll-to-top">
      <a href="#header"><FaArrowUpLong /></a>
    </div>
  );
}

export default ScrollToTop;
