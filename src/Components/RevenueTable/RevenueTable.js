import React, { useState, useEffect } from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";
import TransitionsModal from "../../Modal/ModalTag";
import LineChart from "../Charts/LineChart/LineChart";
const RevenueTable = (props) => {
  const [chartData, setChartData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [countryName, setCountryName] = useState("");
  const createChartData = (data) => {
      let { country, company } = data;
      let modifiedData = {
        country: country,
        company: company,
        monthWiseData:[],
      };
      let tempMonthData = [];
      Object.keys(data).map((key) => {
        if (Number.isInteger(+data[key])) {
          let temp = {
              xValue:key,
              yValue:+data[key],

          }
          tempMonthData.push(temp)

        }
      });
      modifiedData["monthWiseData"] = tempMonthData;
      setChartData((prev) => { return {...prev, ...modifiedData }});
  };
  const onRowClick = (selectedListItem) => {
    setShowModal(true);

    setCompanyName(selectedListItem.data.company);
    setCountryName(selectedListItem.data.country);
    createChartData(selectedListItem.data)

  };
  return (
    <div>
      <DataGrid
        dataSource={props.data}
        showBorders={true}
        remoteOperations={true}
        showColumnLines={true}
        showRowLines={true}
        rowAlternationEnabled={true}
        allowColumnReordering={false}
        hoverStateEnabled={true}
        onRowClick={onRowClick}
      >
        <Column dataField="company" dataType="string"></Column>
        <Column dataField="country" dataType="string"></Column>
        <Column dataField="january" dataType="string"></Column>
        <Column dataField="february" dataType="string"></Column>
        <Column dataField="march" dataType="string"></Column>
        <Column dataField="april" dataType="string"></Column>
        <Column dataField="may" dataType="string"></Column>
        <Column dataField="june" dataType="string"></Column>
        <Column dataField="july" dataType="string"></Column>
        <Column dataField="august" dataType="string"></Column>
        <Column dataField="september" dataType="string"></Column>
        <Column dataField="october" dataType="string"></Column>
        <Column dataField="november" dataType="string"></Column>
        <Column dataField="december" dataType="string"></Column>
      </DataGrid>
      {chartData && (
        <TransitionsModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalHeader={`Revenue Analysis of ${companyName} \n (${countryName})`}
        >
          <LineChart chartData={chartData} />
        </TransitionsModal>
      )}
    </div>
  );
};

export default RevenueTable;
