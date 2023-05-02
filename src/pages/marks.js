import React from "react";
import "./marks.css";

const tableData = [  {    subject: "Object Oriented Software Engineering (CS107)",    group: "20CS-G07",    testType: "Internal (Component 2)",    testDate: "17-Mar-23",    studyPeriod: "6 SEM",    teacherName: "MALVINDER SINGH BALI",    test: "ST-11",    mm: "40",    ms: "19",    percent: "47.5%",  },  {    subject: "Cloud Computing (CS194)",    group: "20CSE-CC-G7",    testType: "Internal (Component 2)",    testDate: "24-Mar-23",    studyPeriod: "6 SEM",    teacherName: "AMANDEEP",    test: "ST1",    mm: "40",    ms: "14",    percent: "35%",  },  {    subject: "Advanced Back End Engineering (CS191)",    group: "20CS-G07",    testType: "Internal (Component 2)",    testDate: "28-Mar-23",    studyPeriod: "6 SEM",    teacherName: "AMANDEEP",    test: "ST1",    mm: "40",    ms: "23",    percent: "57.5%",  },  {    subject: "Advanced Data Structure (CS192)",    group: "20CS-G07",    testType: "Internal (Component 2)",    testDate: "30-Mar-23",    studyPeriod: "6 SEM",    teacherName: "AMANDEEP",    test: "ST1",    mm: "40",    ms: "8",    percent: "20%",  },  {    subject: "Advanced Front End Engineering (CS190)",    group: "20CS-G07",    testType: "Internal (Component 2)",    testDate: "31-Mar-23",    studyPeriod: "6 SEM",    teacherName: "AMANDEEP",    test: "ST1",    mm: "40",    ms: "22",    percent: "55%",  },  {    subject: "Object Oriented Software Engineering (CS107)",    group: "20CS-G07",    testType: "Internal (Component 2)",    testDate: "14-Apr-23",    studyPeriod: "6 SEM",    teacherName: "MALVINDER SINGH BALI",    test: "ST-22",    mm: "40",    ms: "34",    percent: "85%",  },];

const Table = () => {
  return (
    <div className="container1122">
      <table className="table1122">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Group</th>
            <th>Test Type</th>
            <th>Test Date</th>
            <th>Study Period</th>
            <th>Teacher Name</th>
            <th>Test</th>
            <th>M.M</th>
            <th>M.S</th>
            <th>%age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.subject}</td>
              <td>{data.group}</td>
              <td>{data.testType}</td>
              <td>{data.testDate}</td>
          <td>{data.studyPeriod}</td>
          <td>{data.teacherName}</td>
          <td>{data.test}</td>
          <td>{data.mm}</td>
          <td>{data.ms}</td>
          <td>{data.percent}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
};

export default Table;