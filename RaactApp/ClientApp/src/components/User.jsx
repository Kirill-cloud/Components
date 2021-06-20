import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        //this.state = { data: props.user };
        //this.onClick = this.onClick.bind(this);
        //this.formatDate = this.formatDate.bind(this);
        this.name = props.name;
    }

    //onClick(e) {
    //    this.props.onRemove(this.state.data);
    //}

    //render() {
    //    return <div>
    //        <p>Registration Date {this.formatDate(this.state.data.registrationDate)}</p>
    //        <p>Last Activity Date {this.formatDate(this.state.data.lastActivityDate)}</p>
    //        <p><button onClick={this.onClick}>Удалить</button></p>
    //    </div>;
    //}

    //formatDate(date) {
    //    var newDate = new Date(date);
    //    newDate.setDate(newDate.getDate() + 1);
    //    return newDate.toISOString().slice(0, 10);
    //}
    render() {
        return (
            <div>
                <p> Lorem - huerem  </p >
                <p>{this.name} content from constructor</p>
            </div>
        )
    }
}

export default User;