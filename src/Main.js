import { Component } from "react";
import MyLogo from './My-new-Logo.png';
import BannerImg from './3D1.png';
import Time from './TestTime';

export class Main extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            taskList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addTask(input) {
        if(input === "") {
            alert("Please add your task!");
        }
        else {
            let listArray = this.state.taskList;
            listArray.push(input)
            this.setState({taskList: listArray, userInput: ""});
        }
    }

    crossedWord(event) {
        const li = event.target;
        const check = event.target;
        li.classList.toggle("crossed");
        check.classList.toggle("delete");
    }

    deleteList() {
        let listArray = this.state.taskList;
        listArray = [];
        this.setState({taskList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container" onLoad={this.animate}>

                <div className="ToDoListApp">
                    <div className="animate-text">TO-DO LIST</div>
                    <form onSubmit={this.onFormSubmit}>
                        <div className="buttons">
                            <button onClick={() => this.addTask(this.state.userInput)}data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add</button>
                            <button onClick={() => this.deleteList()}>Del</button>
                        </div>
                        <div className="SeparatorTop"></div>
                        <div className="InputBox">
                            <input type="text" placeholder="Type your task..." onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
                        </div>
                        <div className="SeparatorBottom"></div>
                        <div className="ButtonBox">
                            <button className="btn btn-lg w-100 ViewBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View your list</button>
                        </div>
                        
                        <div className="imageBox">
                            <p className="TextOne">Write down your <br />ideas!</p>
                            <p className="TextTwo">Save & manage them <br /> in your list</p>
                            <img className="ImageLogo" src={BannerImg} alt="logoImage" />
                        </div>

                        <div className="timeBox">
                            <Time />
                        </div>
                        <div className="SeparatorTop"></div>
                    </form>
                    <div className="MyLogoBox">
                        <p>Created with <i className="fa fa-heart"></i> by</p>
                        <img className="MyLogoImage" src={MyLogo} alt="My-Logo" />
                    </div>
                </div>
                
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4 text-center w-100" id="staticBackdropLabel">YOUR LIST OF TASKS</h1>
                            <i className="fa fa-close" data-bs-dismiss="modal"></i>
                        </div>
                        <div className="modal-body">
                            <ul>
                            {this.state.taskList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}>
                                    <span></span>
                                    {item}
                                </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-secondary"onClick={() => this.deleteList()} >Delete list</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}