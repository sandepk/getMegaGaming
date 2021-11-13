import React from "react";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Margin,
  Title,
  Label,
  Tooltip,
  Connector,
  Grid,
} from "devextreme-react/chart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "line",
      chartKeys: [{ value: "yValue", name: `${this.props.name}` }],
    };
  }

  render() {
    console.log(this.props.chartData["monthWiseData"])
    return (
      <React.Fragment>
      {this.props.chartData && this.props.chartData["monthWiseData"] && this.props.chartData["monthWiseData"].length > 0 &&   <Chart palette="Violet" dataSource={this.props.chartData["monthWiseData"]}>
          <CommonSeriesSettings
            argumentField="xValue"
            type={this.state.type}
          />
          {this.state.chartKeys.map((item) => (
            <Series key={item.value} valueField={item.value} name={item.name}
            visible={true}
            />
          ))}
          <Margin bottom={20} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
          </ArgumentAxis>
          <Label visible={false} text="xValue">
            {/* <Connector visible={true} /> */}
          </Label>

          <Tooltip enabled={true} />
        </Chart>
  }
      </React.Fragment>
    );
  }
}

export default App;
