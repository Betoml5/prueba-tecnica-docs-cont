import Skeleton from "@/components/common/Skeleton";
import React from "react";

interface Props {
  count?: number;
}

const Skeletons = ({ count = 4 }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} />
        ))}
    </div>
  );
};

export default Skeletons;
