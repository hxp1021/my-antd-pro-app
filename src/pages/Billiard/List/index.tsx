import { ProTable, ActionType } from '@ant-design/pro-table'
import { queryBilliardList, deleteBilliard, queryBilliardAddress } from '@/services/billiard'
import { Button, message, Modal, Space } from 'antd'
import { useRef } from 'react'
import { useRequest } from 'ahooks'
import { history } from 'umi'

export default () => {
  const ref = useRef<ActionType>();
  const { data: addressData } = useRequest(() => queryBilliardAddress())
  const del = (record: any) => {
    deleteBilliard({ _id: record._id })
      .then(() => {
        message.success('删除成功');
        ref.current?.reload();
      })
  }


  return (
    <ProTable
      toolBarRender={() => [<Button type='primary' onClick={() => history.push('/billiard/create')}>新建</Button>]}
      actionRef={ref}
      request={queryBilliardList}
      columns={
        [
          {
            title: '选手1号姓名',
            dataIndex: 'user1',
          },
          {
            title: '选手2号姓名',
            dataIndex: 'user2',
            search: false
          },
          {
            title: '战斗地点',
            dataIndex: 'address',
            search: false,
            renderText: (text) =>
              addressData?.data?.find((item: any) => item.value === text)?.label
          },
          {
            title: '战斗日期',
            dataIndex: 'date',
            search: false
          },
          {
            title: '比分',
            render: (_, record) => record.num1 + ':' + record.num2,
            search: false
          },
          {
            title: '操作',
            search: false,
            render: (_, record) => (
              <Space>
                <a onClick={() => history.push('/billiard/create?_id=' + record?._id)}>编辑</a>
                <a onClick={() => Modal.confirm({
                  title: '确定删除吗',
                  onOk: () => del(record)
                })} >删除</a>
              </Space>
            )
          },
        ]
      }
    />
  )
}
