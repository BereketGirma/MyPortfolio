import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix a public asset path with the deployment base path so links keep
 * working on GitHub Pages (served under /MyPortfolio) and in local dev.
 */
export const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : ""

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
