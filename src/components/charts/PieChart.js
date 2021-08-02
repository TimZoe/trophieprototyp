import React  from 'react'
import {Pie} from 'react-chartjs-2'
import '../design/sonstiges/PieChart.css'

const PieChart = (props) => {

    return (
    <div>

       <Pie   id="jj"
       const data = {{

           datasets: [{        
            data: [props.TrophieKarten,props.RareKarten,props.ClassicKarten],

            backgroundColor: [

            'rgb(195, 235, 239)',
            'rgb(255, 218, 191)',
            'rgb(30, 20, 173)'
          ],
          hoverOffset: 4
        }]
      }}
        width={85}
        height={85}
        />
        
    </div>
)}  
    
   

export default PieChart