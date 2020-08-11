import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './index.css'
import ReactDOM from 'react-dom';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      offset: 0,
      perPage: 1  ,
      currentPage: 0
    }
  this.handlePageClick = this
  .handlePageClick
  .bind(this);

}

receivedData() {
axios
  .get(`api/users`)
  .then(res => {

      const data = res.data;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      const postData = slice.map(pd => <React.Fragment>
          <table border="2" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Friends</th>
              <th>Friends's Of Friends</th>
            </tr>
          </thead>

          <tbody>
              <tr>
                <td>{pd.user_id}</td>
                <td>{pd.user_fname}</td>
                <td>{pd.user_lname}</td>
                <td><a>Friends</a></td>
                <td><a >FOFriends</a></td>
              </tr>
          </tbody>
        </table>
      </React.Fragment>)

      this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
         
          postData
      })
  });
}
handlePageClick = (e) => {
const selectedPage = e.selected;
const offset = selectedPage * this.state.perPage;

this.setState({
  currentPage: selectedPage,
  offset: offset
}, () => {
  this.receivedData()
});

};
  componentDidMount() {
    this.receivedData()
 }


  render() {
    return (
      <div>
        {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
    );
  }
}



class App1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    fetch('api/friend')
    .then(data => data.json())
   .then(users => users.forEach(user => this.setState({
      users: [...this.state.users, user]
    })))
    }
 

  render() {
    return (
      <div>
        <table border="2" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map(user => (
              <tr>
                <td>{user.user_id}</td>
                <td>{user.user_fname}</td>
                <td>{user.user_lname}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    );
  }
}


class App2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('api/friend_f')
    .then(data => data.json())
   .then(users => users.forEach(user => this.setState({
      users: [...this.state.users, user]
    })))
 }


  render() {
    return (
      <div>
        <table border="2" width="100%">
          <thead>
            <tr  text-align= "center" >
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map(user => (
              <tr>
                <td >{user.user_id}</td>
                <td >{user.user_fname}</td>
                <td >{user.user_lname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById("root")
);
ReactDOM.render(
  <App1 />,
  document.getElementById("left")
);
ReactDOM.render(
  <App2 />,
  document.getElementById("right")
);