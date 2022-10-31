import { request } from 'umi';
import { API_PREFIX } from '../../../config/apiPrefix';

// 查询用户列表
export async function queryUserList() {
  return request<any>(`${API_PREFIX}/healer/queryUserList`);
}

// 删除用户
export async function deleteUser(
  params: {
    _id: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/healer/deleteUser`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}