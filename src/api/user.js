import request from "@/utils/request";
export async function login(data) {
  return request({
    url: "/sso/login",
    method: "post",
    data,
  });
}

export function getInfo(accessToken) {
  return request({
    url: "/auth/userInfo",
    method: "get",
    data: {
      accessToken,
    },
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
