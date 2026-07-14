import api from "./apis";
import type { ApiResponse, Menu } from "../types/menus";

export const getMenus = async () => {
  const response = await api.get<ApiResponse<Menu[]>>("/menu");
  return response.data;
};

export const getMenusByMealType = async (mealType: string) => {
  const response = await api.get<ApiResponse<Menu[]>>(
    `/menu/type?mealType=${mealType}`
  );
  return response.data;
};

export const createMenu = async (formData: FormData) => {
  const response = await api.post("/menu/addnew", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
export const createPlanner = async (request: {
    plannedDate: string;
    mealType: string;
    menuIds: number[];
}) => {

    const response = await api.post("/menu/planner", request);

    return response.data;
};