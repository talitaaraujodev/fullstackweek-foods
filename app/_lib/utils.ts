import { OrderStatus } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getOrderStatusLabel = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.CANCELED:
      return "Cancelado";
    case OrderStatus.COMPLETED:
      return "Finalizado";
    case OrderStatus.CONFIRMED:
      return "Confirmado";
    case OrderStatus.DELIVERING:
      return "Em Transporte";
    case OrderStatus.PREPARING:
      return "Preparando";
  }
};
