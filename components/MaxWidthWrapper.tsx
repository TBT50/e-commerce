import { cn } from "@/lib/utils";
import React from "react";

type MaxWidthWrapper = {
  className?: string;
  children: React.ReactNode;
};

export const MaxWidthWrapper = ({ className, children }: MaxWidthWrapper) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
};
