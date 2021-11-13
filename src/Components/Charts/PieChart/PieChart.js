import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from "devextreme-react/pie-chart";
import { connect } from "react-redux";
import React from "react";
class PieChartClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    };

    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
    this.createChartData = this.createChartData.bind(this);
  }

  createChartData = (data) => {
    const result = [];
    data?.forEach((e) => {
      let { country, company } = e;
      let tempData = {
        country: country,
        company: company,
        revenue: 0,
      };
      let sum = 0;
      Object.keys(e).map((key) => {
        if (Number.isInteger(+e[key])) {
          sum += +e[key];
        }
      });
      tempData["revenue"] = sum;
      result.push(tempData);
    });
    console.log(result);
    this.setState((prev) => {
      return {
        ...prev,
        chartData: result,
      };
    });
  };
  componentDidMount() {
    this.createChartData(this.props.revenuesData);
  }

  render() {
    console.log("chart Data; ",this.state.chartData);
    return (
        <div className="charts_container">
     <div className="chart__pieChart">

      <PieChart
        id="pie"
        dataSource={this.state.chartData}
        palette="Bright"
        title="Companies vs Revenue"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
        >
        <Series argumentField="company" valueField="revenue">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
            </div>
     <div className="chart__pieChart">

      <PieChart
        id="pie"
        dataSource={this.state.chartData}
        palette="Bright"
        title="Countries vs revenue"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
        >
        <Series argumentField="country" valueField="revenue">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
            </div>
          </div>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

const mapStateToProps = (state) => {
  return {
    revenuesData: state.revenues.revenuesData,
  };
};
export default connect(mapStateToProps, null)(PieChartClass);
