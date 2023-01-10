import React from 'react'
import { ProTable } from '@ant-design/pro-table'
import {queryMoneyEditList} from '@/services/healer'

export default () => {
  return (
    <ProTable
    request={queryMoneyEditList}
      columns={
        [
          {
            title:'原姓名',
            dataIndex:'oldName'
          },
          {
            title:'新姓名',
            dataIndex:'name'
          },
          {
            title:'原欠债金额',
            dataIndex:'oldMoney'
          },
          {
            title:'新欠债金额',
            dataIndex:'money'
          },
          {
            title:'更新/创建理由',
            dataIndex:'reason'
          },
        ]
      }
    />
  )
}
