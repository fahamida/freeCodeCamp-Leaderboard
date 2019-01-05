import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import './Chart.css';


class Chart extends Component {
  
  constructor(){
    super();
    this.state = {
      alltime:[],
      recent:[],
      status:true,
      err: false
    }
  }
  getRecentData(){
    const l1 = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    fetch(l1)
    .then(results => results.json())
    .then(data => {this.setState({recent: data});
    }).catch(
      this.setState({err: true})
    );
    
  }
  getAlltimeData(){
    const l2 = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    fetch(l2)
    .then(results => results.json())
    .then(data => {this.setState({alltime: data});
    }).catch(
      this.setState({err:true})
    );
    
  }

    changeStatus(val){
      if (this.state.status !== val) {
        this.setState({ status: val});
      }

    }
    componentDidMount(){
      this.getRecentData();
      this.getAlltimeData();
    
    }


  render() {
    const { recent, alltime, status, err } = this.state;

    return (
      <div>
        <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-8">
      {err? " The data is currently not available, please try agian later.":
        <Table>
        <thead>
            <tr>
              <th>Rank</th>
              <th>Camper Name</th>

              <th className="click1" onClick={() => this.changeStatus(true)}>Recent Points {status && (<i className="fas fa-caret-down" aria-hidden="true"></i>)}</th>
              <th className="click1" onClick={() => this.changeStatus(false)}>All Time Points {status === false && (<i className="fas fa-caret-down" aria-hidden="true"></i>)}</th>
            </tr>
          </thead>
        <tbody>
        {status && (
              recent.map((row, i) => (
                <tr key={row.username}>
                  <td>{i + 1}</td>
                  <td><a href={`https://www.freecodecamp.org/${row.username}`} ><img src={row.img} className='pic' alt='User' /> {row.username}</a></td>
                  <td>{row.recent}</td>
                  <td>{row.alltime}</td>
                </tr>
              ))
        )}

        {status === false && (
              alltime.map((row, i) => (
                <tr key={row.username}>
                  <td>{i + 1}</td>
                  <td><a href={`https://www.freecodecamp.org/${row.username}`} ><img src={row.img} className='pic' alt='User' /> {row.username}</a></td>
                  <td>{row.recent}</td>
                  <td>{row.alltime}</td>
                </tr>
              ))
        )}
            </tbody>
          </Table>
        }
      </div>
      <div className="col-md-2">
      </div>
      </div>
      </div>
    );
  }
}

export default Chart;