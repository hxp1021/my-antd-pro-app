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

// 新增用户
export async function saveUser(
  params: {
    address: string;
    name: string;
    age: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/healer/saveUser`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

// 查询用户详情
export async function queryUserDetail(
  params: {
    id:string
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/healer/queryUserDetail`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

// 更新用户信息
export async function updateUser(
  params: {
    id:string
    address: string;
    name: string;
    age: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/healer/updateUser`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

// 查询欠债金额操作记录
export async function queryMoneyEditList() {
  return request<any>(`${API_PREFIX}/healer/queryMoneyEditList`);
}