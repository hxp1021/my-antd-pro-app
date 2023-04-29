import { useEffect } from 'react'
import { Form, Input, DatePicker, InputNumber, Space, Select, Button, message } from 'antd'
import { saveBilliard, queryBilliardDetail, updateBilliard } from '@/services/billiard'
import moment from 'moment';
import { history, useLocation } from 'umi';

const { Item, useForm } = Form;
export default function index() {
  const [form] = useForm()
  const { query } = useLocation() as any;
  const { _id } = query;

  useEffect(() => {
    if (_id) {
      queryBilliardDetail({ _id })
        .then((res) => {
          const {
            user1,
            user2,
            address,
            date,
            num1,
            num2
          } = res.data
          form.setFieldsValue({
            user1,
            user2,
            address,
            date: moment(date, 'YYYY-MM-DD'),
            num1,
            num2
          })
        })
    }
  }, [_id])


  const submit = async () => {
    const value = form.getFieldsValue()
    if (_id) {
      await updateBilliard({
        ...value,
        date: moment(value.date).format('YYYY-MM-DD'),
        _id
      })
      message.success('更新成功')
    } else {
      await saveBilliard({
        ...value,
        date: moment(value.date).format('YYYY-MM-DD')
      })
      message.success('提交成功')
    }

    history.push('./list')
  }

  return (
    <div>
      <Form form={form}>
        <Item label='选手1号姓名' style={{ width: 240 }} name='user1'>
          <Input placeholder='请输入姓名' />
        </Item>
        <Item label='选手2号姓名' style={{ width: 240 }} name='user2'>
          <Input placeholder='请输入姓名' />
        </Item>
        <Item label='战斗地点' style={{ width: 240 }} name='address'>
          <Select
            placeholder='请选择地点'
            options={[
              {
                label: '李克',
                value: 'like'
              },
              {
                label: '悟空',
                value: 'wukong',
              },
              {
                label: 'ET',
                value: 'et',
              },
              {
                label: '橙小乐',
                value: 'chengxiaole',
              },
            ]}
          />
        </Item>
        <Item label='战斗日期' style={{ width: 240 }} name='date'>
          <DatePicker />
        </Item>
        <Item label='比分'>
          <Space>
            <Item name='num1'>
              <InputNumber min={0} precision={0} placeholder='请输入' />
            </Item>
            <Item>
              :
            </Item>
            <Item name='num2'>
              <InputNumber min={0} precision={0} placeholder='请输入' />
            </Item>
          </Space>
        </Item>
      </Form>
      <Space>
        <Button type='primary' onClick={submit}>提交</Button>
        <Button onClick={() => form.resetFields()}>重置</Button>
      </Space>
    </div>
  )
}
