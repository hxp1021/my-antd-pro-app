import React from 'react'
import { history, useLocation, useRequest } from 'umi'
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, InputNumber, Button, message } from 'antd'
import { saveUser, updateUser, queryUserDetail } from '@/services/healer';

export default () => {
  const [form] = Form.useForm()
  const { query = {} } = useLocation() as any
  const { id } = query

  const {data: oldFormValue} = useRequest(() => queryUserDetail({ id }),
    {
      ready: !!id,
      onSuccess: (res) => {
        form.setFieldsValue({ ...res })
      }
    })

  const submit = async () => {
    const values = await form.validateFields()
    if (!id) {
      await saveUser(values)
      message.success('创建成功')
    } else {
      await updateUser({ ...values, id, oldName:oldFormValue?.name, oldMoney:oldFormValue?.money })
      message.success('更新成功')
    }

    history.replace('/user-center/list')
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
          <Form.Item name='money' rules={[{ required: true }]} label='负债金额'>
            <InputNumber />
          </Form.Item>
          <Form.Item name='reason' rules={[{ required: true }]} label='创建/更新理由'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
            <Button onClick={submit} type='primary' >提交</Button>
          </Form.Item>
        </Form>
      </PageContainer>
    </div>
  )
}
