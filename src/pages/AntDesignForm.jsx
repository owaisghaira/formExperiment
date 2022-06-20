import React from "react";
import { Button, Form } from "antd";
import InputField from "../components/InputField";
import { ISDropdown } from "../components/DropDown";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const AntDesignForm = () => {
  const data = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" },
  ];

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const obj = { fathername: "bilal", name: "owasi", gender: 2 };
  const initialValues = { fathername: "", name: "", gender: "" };
  const initilize = () => {
    form.setFieldsValue({ ...obj });
  };

  return (
    <Form initialValues={initialValues} onFinish={onFinish} form={form}>
      {console.log("antredndeer")}
      <Form.Item
        name="name"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <InputField placeholder="Name" />
      </Form.Item>
      <Form.Item name="fathername">
        <InputField placeholder="Father Name" />
      </Form.Item>
      <Form.Item name="gender">
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            sx={{ height: "37px", width: "200px" }}
          >
            {data.map((v) => (
              <MenuItem key={v.id} value={v.id}>
                {console.log(v.id)}
                {v.gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Form.Item>

      {/* <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Form.Item name="gender">
          <ISDropdown data={data} ids="id" field="gender" label="Age" />
        </Form.Item>
      </FormControl> */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={() => initilize()} type="primary">
          api
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntDesignForm;
