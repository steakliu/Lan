import request from "@/utils/request";

export function getRouterList(data) {
  return request({
    url: "/basic/selectRoutesByUserId",
    method: "get",
    data,
  });
}
