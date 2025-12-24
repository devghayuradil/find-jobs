import { cn } from "@/lib/utils";
import React from "react";

const GlobalButton = ({ children, className }) => {
  return (
    <button
      className={cn(
        `bg-accent-100 text-nowrap py-[14px] px-5 rounded-lg body-medium text-light-100 transition-all duration-300 ease-in-out border border-accent-100 hover:text-accent-100 hover:border hover:border-accent-100 hover:bg-transparent`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default GlobalButton;
