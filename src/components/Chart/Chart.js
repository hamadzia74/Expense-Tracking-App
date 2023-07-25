import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {
    // Check if props.dataPoints is defined and not empty
    if (!props.dataPoints || props.dataPoints.length === 0) {
        return <p>No data available</p>;
    }

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart