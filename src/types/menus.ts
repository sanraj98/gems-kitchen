export interface Menu {
  id: number;
  itemCode: string;
  itemName: string;
  mealType: string;
  price: number;
  imageUrl?: string;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}