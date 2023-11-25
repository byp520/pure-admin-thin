import { http } from "@/utils/http";
export type UserResult = {
  success: boolean;
  data: {
    id: number;
    name: string;
  };
};
export const getList = (data?: object) => {
  return http.request<UserResult>("get", "/getList", { data });
};
