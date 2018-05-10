import React, { Component } from 'react';
import {LineChart, Line, BarChart, PieChart, Pie, CustomAxisTick, Bar, CustomBarLabel, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './index.css';
import axios from 'axios';

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

const data02 = [{name: 'A1', value: 100},
                    {name: 'A2', value: 300},
                    {name: 'B1', value: 100},
                    {name: 'B2', value: 80},
                    {name: 'B3', value: 40},
                    {name: 'B4', value: 30},
                    {name: 'B5', value: 50},
                    {name: 'C1', value: 100},
                    {name: 'C2', value: 200},
                    {name: 'D1', value: 150},
                    {name: 'D2', value: 50}]

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [1,2],
            datt15: [1,2],
            data16: [1,2],
            data17: [1,2],
            data14: [1,2]
        }
    };

    componentDidMount(){
        axios.get('https://diaas-backend.herokuapp.com/v1/disaster/year')
        .then( (response) => {
            this.setState({
                data:response.data.obj
            })    
        })
        .catch( (error) => {
            console.log(error);
        });
        
        
        axios.get('https://diaas-backend.herokuapp.com/v1/disaster/item/2015')
        .then( (response) => {
            this.setState({
                data15:response.data.obj
            })    
        })
        .catch( (error) => {
            console.log(error);
        });


        axios.get('https://diaas-backend.herokuapp.com/v1/disaster/item/2016')
        .then( (response) => {
            this.setState({
                data16:response.data.obj
            })    
        })
        .catch( (error) => {
            console.log(error);
        });

        
        axios.get('https://diaas-backend.herokuapp.com/v1/disaster/item/2017')
        .then( (response) => {
            this.setState({
                data17:response.data.obj
            })    
        })
        .catch( (error) => {
            console.log(error);
        });

        axios.get('https://diaas-backend.herokuapp.com/v1/disaster/item/2014')
        .then( (response) => {
            this.setState({
                data14:response.data.obj
            })    
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <div style={{align: "center"}}>
            <div className="container">
            <h4> Count of Requested Items during Disater Recovery for the following years </h4>
            </div>
            <div class="container-fluid" >
                <div class="row">
                    <div class="col-xs-6">
                        <div style={{align:"center"}}>
                        <h4> year: 2017 </h4>
                        </div>
                        <BarChart width={600} height={300} data={this.state.data17}
                                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="_id"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar type="monotone" dataKey="count" barSize={30} fill="#8884d8"/>
                        </BarChart>
                    </div>
                    <div class="col-xs-6">
                        <h4> year: 2016 </h4>
                        <BarChart width={600} height={300} data={this.state.data16}
                                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="_id"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar type="monotone" dataKey="count" barSize={30} fill="#8884d8"/>
                        </BarChart>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <h4> year: 2015 </h4>
                        <BarChart width={600} height={300} data={this.state.data15}
                                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="_id"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar type="monotone" dataKey="count" barSize={30} fill="#8884d8"/>
                        </BarChart>
                    </div>
                    <div class="col-xs-6">
                        <h4> year: 2014 </h4>
                        <BarChart width={600} height={300} data={this.state.data14}
                                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="_id"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar type="monotone" dataKey="count" barSize={30} fill="#8884d8"/>
                        </BarChart>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <h4> Number of Disaster per year </h4>
                        <LineChart width={600} height={300} data={this.state.data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="_id"/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
                        </LineChart>
                    </div>
                    <div class="col-xs-6">

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                     
                    </div>
                    <div class="col-xs-6">
                        <PieChart width={800} height={400}>
                            <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>
                            <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                        </PieChart>
                    </div>
                </div>
            </div>
            </div>
           
        );
    }
}
export default Dashboard;