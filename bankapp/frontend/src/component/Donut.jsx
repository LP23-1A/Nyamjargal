'use client'
import { useEffect } from 'react';
import { Tooltip, Title, ArcElement, Legend, Chart as ChartJs } from 'chart.js';
import { Doughnut } from "react-chartjs-2";


ChartJs.register (
    Tooltip, Title, ArcElement, Legend
);


const  data = {
    labels: [
      'Bills',
      'Food',
      'Shopping',
      'Insurance',
      'Clothing'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [15.5, 15.5, 15.5,15.5,15.5],
      backgroundColor: [
        'rgb(28, 100, 242)',
        'rgb(231, 70, 148)',
        'rgb(242, 144, 28)',
        'rgb(22,189,202)',
        'rgb(253,186,140)'
      ],
      hoverOffset: 5
    }]
  };

function Donut(){
  useEffect(()=>{

  },[])
    return(
        <div>
            <Doughnut data={data}  style={{ width: "156px", height: "156px" }}/>
        </div>
    );
}
export {Donut};