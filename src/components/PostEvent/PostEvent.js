// import React from 'react'

// const PostEvent = () => {
//   return (
//     <div>
//         <h1 className="eventLabel">Post Event</h1>
//         <div class="grid-container">
//                 <div className="col-25" id="card">
//                     <div className="container">
//                         <div>
//                             <div className="row">
//                                 <div class="col-25">
//                                     <label htmlFor="eventId"><b>Event ID</b></label>
//                                 </div>
//                                 <div class="col-75">
//                                     <input className="input" type="text" id="eId" name="eventID" placeholder="YYYY - INSTITUTE - DEPARTMENT - COUNT"
                                
//                                     />
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-25">
//                                     <label for="adate"><b>Actual Date</b></label>
//                                 </div>
//                                 <div class="col-75">
//                                     <input className="input" type="date" id="adate" name="actualdate" 
                                     
//                                     />
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-25">
//                                     <label for="atdate"><b>To</b></label>
//                                 </div>
//                                 <div class="col-75">
//                                     <input className="input" type="date" id="atdate" name="eventenddate" 
                                   
//                                     />
//                                 </div>
//                             </div>
                        
//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="date"><b>Speaker's Details</b></label>
//                                     </div>
//                                     <div class="col-75">
//                                         {/* <SpeakerFields /> */}
                                        
//                                             <div>
//                                                 <div className="row">
//                                                     <div class="col-25">
//                                                         <label for="date">Speaker's Name</label>
//                                                     </div>
//                                                     <div className="col-75">
//                                                         <input
//                                                         className="input"
//                                                         type="text"
//                                                         name="spkName"
//                                                         placeholder="Speaker Name"
                                                        
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="row">
//                                                     <div class="col-25">
//                                                         <label for="date">Speaker's Email</label>
//                                                     </div>
//                                                     <div className="col-75">
//                                                         <input
//                                                         type="email"
//                                                         className="input"
//                                                         name="spkEmail"
//                                                         placeholder="Speaker Email"
                                                        
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="row">
//                                                     <div class="col-25">
//                                                         <label for="date">Speaker's CV<br/><i>(file format: jpg, jpeg, png) Under 1MB</i></label>
//                                                     </div>
//                                                     <div className="col-75">
//                                                         <input
//                                                         type="file"
//                                                         className="input"
//                                                         name="spkCV"
//                                                         placeholder="Speaker CV"
//                                                         // value={x.spkCV}
                                                        
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="row">
//                                                     <div class="col-25">
//                                                         <label for="date">Speaker's Photo<br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
//                                                     </div>
//                                                     <div className="col-75">
//                                                         <input
//                                                         type="file"
//                                                         className="input"
//                                                         name="spkPhoto"
//                                                         placeholder="Speaker Photo"
//                                                         // value={x.spkCV}
                                                       
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="btn-box">
//                                                </div>
//                                             </div>
                                        
//                                         {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
//                                     </div>
//                             </div>
                            
//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="edesc"><b>Event Description</b></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <textarea className="input" id="edesc" name="eventdesc" rows="10"
                                       
//                                         />
//                                     </div>
//                             </div>

//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="studno"><b>Number of Student's Attended the Event</b></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <input className="input" type="number" id="studno" name="studentno" 
                                        
//                                         />
//                                     </div>
//                             </div>

//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="ephoto"><b>Photograph's Of Even</b>t<br/>(upload 4 photographs)<br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <input className="input" type="file" id="ephoto" name="eventPhoto1" 
                                         
//                                         />
//                                         <br/>
//                                         <input className="input" type="file" id="ephoto" name="eventPhoto2" 
                                       
//                                         />
//                                         <br/>
//                                         <input className="input" type="file" id="ephoto" name="eventPhoto3" 
                                        
//                                         />
//                                         <br/>
//                                         <input className="input" type="file" id="ephoto" name="eventPhoto4" 
                                        
//                                         />
//                                         <br/>
//                                     </div>
//                             </div>
//                             <br />
//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="cert"><b>Certificate</b><br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <input className="input" type="file" id="cert" name="certificate" 
                                        
//                                         />
//                                     </div>
//                             </div>
//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="poster"><b>Event Poster</b><br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <input className="input" type="file" id="poster" name="poster" 
                                       
//                                         />
//                                     </div>
//                             </div>
//                             <div class="row">
//                                     <div class="col-25">
//                                         <label for="cert"><b>Sheet Of Registered Student's</b></label>
//                                     </div>
//                                     <div class="col-75">
//                                         <input className="input" type="url" id="cert" name="sheeturl" placeholder="https://www.google.com"
                                        
//                                         />
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
//             <div>
//                 <div className="sub-btn">
//                     <div class="row">
//                         <input className="submit"  type="submit" value="Submit" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//   )
// }
// export default PostEvent

import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./PreEventstyle.css";
import { Form, Input, Button, Select, DatePicker } from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

const PostEvent = () => {
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
      <h1 className="eventLabel">Post Event</h1>
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
export default PostEvent;