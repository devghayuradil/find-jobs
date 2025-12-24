// src/utils/cn.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes intelligently
 * @param  {...any} inputs - clsx input values
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
