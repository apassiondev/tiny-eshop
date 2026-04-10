import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

// Consistent decimal number formatter (for price)
// e.g. 49 becomes "49.00", 49.9 becomes "49.90`"
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');

  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}