import React from 'react'
import { ProTable, ActionType } from '@ant-design/pro-table'
import { message, Popconfirm } from 'antd'
import { queryUserList, deleteUser } from '@/services/healer'

export default () => {
  const ref = React.useRef<ActionType>()
  const request = async () => {
    const res = await queryUserList()
    return {
      data: res.data
    }
  }

  const handleDelete = async (id: string) => {
    await deleteUser({ _id: id })
    message.success('删除成功')
    ref.current?.reload()
  }

  return (
    <ProTable
      actionRef={ref}
      rowKey='_id'
      request={request}
      columns={[
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age'
        },
        {
          title: '地址',
          dataIndex: 'address'
        },
        {
          title: '操作',
          search: false,
          render: (_, record) =>
            <Popconfirm onConfirm={() => handleDelete(record._id)} title='确定要删除吗？'>
              <a>删除</a>
            </Popconfirm>
        }
      ]}
    />
  )
}
