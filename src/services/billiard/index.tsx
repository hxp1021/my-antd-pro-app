import { request } from 'umi';
import { API_PREFIX } from '../../../config/apiPrefix';

// 查询台球列表
export async function queryBilliardList(params?: any,) {
  return request<any>(`${API_PREFIX}/billiard/queryBilliardList`,
    {
      method: 'GET',
      params: { ...(params || {}) },
    }
  );
}

// 查询台球地点
export async function queryBilliardAddress() {
  return request<any>(`${API_PREFIX}/billiard/queryBilliardAddress`);
}

// 提交台球
export async function saveBilliard(
  params: any,
  options?: { [key: string]: any }
) {
  return request<any>(`${API_PREFIX}/billiard/saveBilliard`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

// 查询台球详情
export async function queryBilliardDetail(
  params: {
    _id:string
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/billiard/queryBilliardDetail`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

// 更新台球
export async function updateBilliard(
  params: any,
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/billiard/updateBilliard`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}



// 删除用户
export async function deleteBilliard(
  params: {
    _id: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>(`${API_PREFIX}/billiard/deleteBilliard`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}



