function ChartBar({data, width, offset}) {

  return (
    <div className="chartbar">
      <div className="chartbar-load" style={{width: `${width}%`, marginLeft: `${offset}%`}}>{data}</div>
    </div>
  )
}

export default ChartBar;
