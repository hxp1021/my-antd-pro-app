import React from 'react'
import {history} from 'umi'
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, InputNumber, Button, message } from 'antd'
import { saveUser } from '@/services/healer'

export default () => {
  const [form] = Form.useForm()
  const submit = async () => {
    const values = await form.validateFields()
    await saveUser({...values})
    message.success('创建成功')
    history.replace('./list')
  }
  return (
    <div
      style={{
        background: '#F5F7FA',
      }}
    >
      <PageContainer
        title='新建用户'
      >
        <Form
        form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          <Form.Item name='name' rules={[{ required: true }]} label='姓名'>
            <Input />
          </Form.Item>
          <Form.Item name='address' rules={[{ required: true }]} label='地址'>
            <Input />
          </Form.Item>
          <Form.Item name='age' rules={[{ required: true }]} label='年龄'>
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
            <Button onClick={submit} type='primary' >提交</Button>
          </Form.Item>
        </Form>
      </PageContainer>
    </div>
  )
}
