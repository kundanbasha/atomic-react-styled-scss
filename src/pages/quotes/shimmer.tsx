import { ShimmerColorBlock } from "../../shared/atoms";
import "./quotes.styles.scss";

export default function QuotesShimmer() {
  return (
    <div className="quotes-shimmer-list">
      {Array(6).fill(
        <div className="shimmer-wrap">
          <ShimmerColorBlock h="25px" />
          <ShimmerColorBlock w="120px" h="25px" />
        </div>
      )}
    </div>
  );
}
