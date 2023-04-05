import { ShimmerColorBlock } from "../../shared/atoms";

export default function AuthorsShimmer() {
  return (
    <div className="shimmer-list">
      {Array(6).fill(
        <div className="shimmer-wrap">
          <div className="avatar-shimmer">
            <ShimmerColorBlock h="148px" />
          </div>
          <div className="details-shimmer">
            <ShimmerColorBlock h="28px" />
            <ShimmerColorBlock h="18px" />
            <ShimmerColorBlock h="64px" />
          </div>
        </div>
      )}
    </div>
  );
}
