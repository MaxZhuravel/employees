import {Component} from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const {name, salary} = this.state;
        const {onSubmitAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Як його звати?"
                           onChange={this.onValueChange}
                           value={name}
                           name="name"/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           value={salary}
                           name="salary"/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => onSubmitAdd(e, name, salary)}>Додати
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;