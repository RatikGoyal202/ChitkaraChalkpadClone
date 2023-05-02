import React from "react";
import './attendence.css'
const tableData = [  {    subjectCode: "CS107",    subjectName: "Object Oriented Software Engineering",    teacher: "MALVINDER SINGH BALI",    fromDate: "20-Feb-23",    toDate: "01-May-23",    attended: "27",    DL: "0",    ML: "0",    delivered: "39",    percentage: "69.23",    totalApproved: "0",  },  {    subjectCode: "CS190",    subjectName: "Advanced Front End Engineering",    teacher: "AMANDEEP",    fromDate: "03-Mar-23",    toDate: "28-Apr-23",    attended: "35",    DL: "0",    ML: "0",    delivered: "42",    percentage: "83.33",    totalApproved: "0",  },  {    subjectCode: "CS191",    subjectName: "Advanced Back End Engineering",    teacher: "AMANDEEP",    fromDate: "02-Mar-23",    toDate: "27-Apr-23",    attended: "30",    DL: "0",    ML: "0",    delivered: "39",    percentage: "76.92",    totalApproved: "0",  },  {    subjectCode: "CS192",    subjectName: "Advanced Data Structure",    teacher: "AMANDEEP",    fromDate: "20-Feb-23",    toDate: "28-Apr-23",    attended: "43",    DL: "0",    ML: "0",    delivered: "45",    percentage: "95.56",    totalApproved: "0",  },];

const Table = () => {
  return (
    <div className="table-container">
      <table className="table__">
        <thead>
          <tr>
            <th className="table__header">#</th>
            <th className="table__header">Subject Code</th>
            <th className="table__header">Subject Name</th>
            <th className="table__header">Teacher</th>
            <th className="table__header">From</th>
            <th className="table__header">To</th>
            <th className="table__header">Attended</th>
            <th className="table__header">DL</th>
            <th className="table__header">ML</th>
            <th className="table__header">Delivered</th>
            <th className="table__header">%age</th>
            <th className="table__header">Total Approved</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="table__row">
              <td className="table__data">{index + 1}</td>
              <td className="table__data">{data.subjectCode}</td>
              <td className="table__data">{data.subjectName}</td>
              <td className="table__data">{data.teacher}</td>
              <td className="table__data">{data.fromDate}</td>
              <td className="table__data">{data.toDate}</td>
              <td className="table__data">{data.attended}</td>
              <td className="table__data">{data.DL}</td>
              <td className="table__data">{data.ML}</td>
              <td className="table__data">{data.delivered}</td>
              <td className="table__data">{data.percentage}</td>
              <td className="table__data">{data.totalApproved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;