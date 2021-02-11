import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../../assets/styles/menu.css'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            start: 0,
            isOn: false,
            displayedTable:[],
            blackTable:[],
            tableWithData:[],
            players: []
        }
        
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentDidMount() {
        this.initTable()
        this.getPlayers()
    }

    initTable(){
        let tempRow = []
        let tempCol = []
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 1; j++){
                tempCol.push({state: false, pos: '0', div: 
                    <td className="case-black">0</td>
                })
            }
            tempRow.push(tempCol)
        }
        console.log(tempRow)
        this.setState({displayedTable: tempRow, tableWithData: tempRow, blackTable: tempRow})
    }

    getPlayers(){
        console.log('getplayer')
        axios
            .get('api/players')
            .then(response => {
                console.log('fds')
                console.log(response.data)
            })

    }

    lauchGame() {
        let count = 0
        let random = Math.floor(Math.random() * Math.floor(9))
        // let newRow = []
        // let newCol = []
        // for(let i = 0; i < 3; i++){
        //     for(let j = 0; j < 1; j++){
        //         count = i+j
        //         let check = count == random ? {state: false, pos: [i, j], div: 
        //             <td className="case-red">0</td>} 
        //             : {state: false, pos: [i, j], div: 
        //                 <td className="case-black">0</td>}
        //         newCol.push(check)
        //     }
        //     newRow.push(newCol)
        // }
        this.state.tableWithData.forEach(row =>{
            row.forEach( data => {
                count++
                if(count == random){
                    data = {state: true, pos: 1, div: 
                        <td className="case-red">0</td>}
                }
            })
        })
        console.log(random)
        console.log('new table: ')
        console.log(this.state.tableWithData)
        this.setState({displayedTable: this.state.tableWithData})
        setTimeout(() => { 
            this.setState({displayedTable: this.state.blackTable})
        }, 2000);
    }

    startTimer() {
        this.setState({
          time: this.state.time,
          start: Date.now() - this.state.time,
          isOn: true
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
        this.lauchGame()
      }
      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState({time: 0})
      }

    render() {
        let start = (this.state.time == 0) ?
        <button onClick={this.startTimer}>start</button> :
        null
        let stop = (this.state.isOn) ?
        <button onClick={this.stopTimer}>stop</button> :
        null
        let reset = (this.state.time != 0 && !this.state.isOn) ?
        <button onClick={this.resetTimer}>reset</button> :
        null
        let resume = (this.state.time != 0 && !this.state.isOn) ?
        <button onClick={this.startTimer}>resume</button> :
        null
        return (
            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-header">
                            RANK: 1
                        </div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            RANK: 2
                        </div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            RANK: 3
                        </div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                        <div className="">Bob</div>
                    </div>
                </div>

                <div className="game"> 
                    <h3>timer: {((this.state.time)/1000).toFixed(1)}</h3>
                    {start}
                    {resume}
                    {stop}
                    {reset}
                    <div>
                        <div>Demo</div>
                        <div>
                            <div>
                                <span>Etape: </span>
                                
                            </div>
                        </div>
                        <table className="demo">
                            {this.state.displayedTable.map(row => 
                                <tr>
                                    {row.map(col => 
                                        <div>
                                            {col.div}
                                        </div>                           
                                    )}
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;