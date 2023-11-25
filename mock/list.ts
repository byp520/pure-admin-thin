// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

const getDatas = () => {
  const renData = [];
  for (let i = 0; i < 10; i++) {
    renData.push({
      id: i + 1,
      name: `张三${i + 1}`
    });
  }
  return renData;
};

export default [
  {
    url: "/getList",
    method: "get",
    response: () => {
      return {
        success: true,
        data: getDatas
      };
    }
  }
] as MockMethod[];
