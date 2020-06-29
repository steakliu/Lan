import request from "@/utils/request";

export function getList() {
  return request({
    url: "/basic/websocket",
    method: "get",
  });
}

export function doEdit(data) {
  return request({
    url: "/face/edit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/face/delete",
    method: "post",
    data,
  });
}
