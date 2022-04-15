// import React from "react";
// import './PreEventstyle.css'
// const PreEvent = () => {
//   return (
//     <div class="pre">
//       <h1 className="eventLabel">Pre Event</h1>
//       <div id="booking" class="section">
//         <div class="section-center">
//           <div class="container-fluid">
//             <div className="row"></div>

//             <div class="booking-form">
//               <form>
//                 <div class="row">
//                   <div class="col-md-12">
//                     <div class="form-group">
//                       <div class="col-25">
//                         <span class="form-label"></span>
//                         <input
//                           disabled
//                           class="form-control"
//                           type="text"
//                           id="eId"
//                           name="eventID"
//                           placeholder="YYYY - INSTITUTE - DEPARTMENT - COUNT"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-12">
//                     <div class="form-group">
//                       <input class="form-control" type="text" />
//                       <span class="form-label">Event Name</span>
//                     </div>
//                     <div class="form-group">
//                       <span class="form-label">Type of Event</span>
//                       <select class="form-control">
//                         <option>Select Event Type</option>
//                         <option value="Webinar">Webinar</option>
//                         <option value="Seminar">Seminar</option>
//                         <option value="Confrence">Confrence</option>
//                         <option value="Technical">Technical</option>
//                         <option value="Nontechnical">Non-Technical</option>
//                         <option value="Cultural">Cultural</option>
//                         <option value="FTP">FTP</option>
//                         <option value="HTTP">HTTP</option>
//                       </select>
//                       <span class="select-arrow"></span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <input class="form-control" type="date" required />
//                       <span class="form-label">Date From</span>
//                     </div>
//                   </div>
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <input class="form-control" type="date" required />
//                       <span class="form-label">To</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <span class="form-label">Duration of Event</span>
//                       <input
//                         class="form-control"
//                         type="number"
//                         min="1"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <span class="form-label">Level of Event</span>
//                       <select class="form-control">
//                         <option>Select Level Of Event</option>
//                         <option value="Institute">Institute</option>
//                         <option value="University">University</option>
//                         <option value="International">International</option>
//                         <option value="National">National</option>
//                         <option value="State">State</option>
//                       </select>
//                       <span class="select-arrow"></span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <span class="form-label">Organising Institute</span>
//                       <select class="form-control">
//                         <option>Select Organizing Institute</option>
//                         <option value="CSPIT">CSPIT</option>
//                         <option value="DEPSTAR">DEPSTAR</option>
//                         <option value="PDPIAS">PDPIAS</option>
//                         <option value="CMPICA">CMPICA</option>
//                         <option value="I2IM">I2IM</option>
//                         <option value="RPCP">RPCP</option>
//                         <option value="ARIP">ARIP</option>
//                         <option value="MTIN">MTIN</option>
//                         <option value="CIPS">CIPS</option>
//                       </select>
//                       <span class="select-arrow"></span>
//                     </div>
//                   </div>
//                   <div class="col-md-6">
//                     <div class="form-group">
//                       <span class="form-label">Department Name</span>
//                       <select class="form-control">
//                         <option>Select Department Name</option>
//                         <option value="CSPIT">CSE</option>
//                         <option value="DEPSTAR">CE</option>
//                         <option value="PDPIAS">IT</option>
//                         <option value="CMPICA">CL</option>
//                         <option value="I2IM">ME</option>
//                         <option value="RPCP">EE</option>
//                         <option value="ARIP">EC</option>
//                         <option value="MTIN">MBA</option>
//                       </select>
//                       <span class="select-arrow"></span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-12">
//                     <div class="form-group">
//                       <input class="form-control" type="text" />
//                       <span class="form-label">Cordinator Name</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-12">
//                     <div class="form-group">
//                       <input class="form-control" type="text" />
//                       <span class="form-label">Cordinator Email</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-md-12">
//                     <div class="form-group">
//                       <input
//                         class="form-control"
//                         input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                         required
//                       />
//                       <span class="form-label" type="number">
//                         Cordinator Contact Number
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="form-btn">
//                   <button class="submit-btn">Next</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PreEvent;

import React, { useState } from "react";
import "antd/dist/antd.css";
import "./PreEventstyle.css";
import { Form, Input, Button, Select, DatePicker } from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

const PreEvent = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className="pre">
      <h1 className="eventLabel">Pre Event</h1>
      <hr /> <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Event Name">
          <Input placeholder="Event Name" />
        </Form.Item>
        <Form.Item name="eventtype" label="Type of Event">
          <Select
            placeholder="Select type of Event"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="Webinar">Webinar</Option>
            <Option value="Seminar">Seminar</Option>
            <Option value="Confrence">Confrence</Option>
            <Option value="Technical">Technical</Option>
            <Option value="Nontechnical">Nontechnical</Option>
            <Option value="Cultural">Cultural</Option>
          </Select>
        </Form.Item>

        <Form.Item name="range-time-picker" label="Event Date & Duration">
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>

        <Form.Item name="location" label="Event Location">
          <Select
            placeholder="Select Location of Event"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="Institute">Labs</Option>
            <Option value="University">Seminar Hall</Option>
            <Option value="International">Sports Ground</Option>
            <Option value="National">Central Loan</Option>
            <Option value="State">Outside University</Option>
          </Select>
        </Form.Item>

        <Form.Item name="levelevent" label="Level of Event">
          <Select
            placeholder="Select Level Of Event"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="Institute">Institute</Option>
            <Option value="University">University</Option>
            <Option value="International">International</Option>
            <Option value="National">National</Option>
            <Option value="State">State</Option>
          </Select>
        </Form.Item>

        <Form.Item name="org_institute" label="Organising Institute">
          <Select
            placeholder="Select Organizing Institute"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="CSPIT">CSPIT</Option>
            <Option value="DEPSTAR">DEPSTAR</Option>
            <Option value="PDPIAS">PDPIAS</Option>
            <Option value="CMPICA">CMPICA</Option>
            <Option value="I2IM">I2IM</Option>
            <Option value="RPCP">RPCP</Option>
            <Option value="ARIP">ARIP</Option>
            <Option value="MTIN">MTIN</Option>
            <Option value="CIPS">CIPS</Option>
          </Select>
        </Form.Item>

        <Form.Item name="departName" label="Department Name">
          <Select
            placeholder="Select Department Name"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="CSE">CSE</Option>
            <Option value="CE">CE</Option>
            <Option value="IT">IT</Option>
            <Option value="ME">ME</Option>
            <Option value="CL">CL</Option>
            <Option value="EC">EC</Option>
            <Option value="EE">EE</Option>
            <Option value="MBA">MBA</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Cordinator Name">
          <Input placeholder="Enter Cordinator Name" />
        </Form.Item>
        <Form.Item label="Cordinator Email">
          <Input placeholder="Enter Cordinator Email" />
        </Form.Item>
        <Form.Item label="Cordinator Contact No.">
          <Input placeholder="Enter Cordinator Contact No." />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Create Event</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PreEvent;
// eslint-disable-next-line no-undef
// ReactDOM.render(<FormLayoutDemo />, mountNode);
