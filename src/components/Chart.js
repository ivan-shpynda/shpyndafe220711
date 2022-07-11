import { useEffect } from "react";
import ChartBar from "./ChartBar";

function Chart({data}) {
  const total = data.map(item => item.time).reduce((acc, curr) => acc + curr).toFixed(1);

  const offset = (i) => {
    const sliceedArr = (data.slice(0, i).map(item => item.time));
    if (!sliceedArr.length) {
      return 0;
    }

    return sliceedArr.reduce((acc, curr) => acc + curr) / total * 100;
  };

  return (
    <div className="chart">
      {data.map((item, i) => (
        <div key={item.name}>
          <div className="chartLine">
            <span className="label">{item.name}</span>
            <ChartBar
              data={item.time}
              width={(item.time / total * 100).toFixed(1)}
              offset={offset(i)}
            />
          </div>
        </div>))}
    </div>
  );
}

export default Chart;
