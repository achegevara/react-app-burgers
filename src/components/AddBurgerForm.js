import React from "react";
import PropTypes from "prop-types";

class AddBurgerForm extends React.Component {

    static propTypes = {
        addBurger: PropTypes.func
    }

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (event) => {
        event.preventDefault();
        const burger = {
            name: this.nameRef.current.value,
            price: +this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addBurger(burger);
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="burger-edit" onSubmit={this.createBurger}>
                <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off" />
                <input ref={this.priceRef} name="price" type="text" placeholder="Price" autoComplete="off" />
                <select ref={this.statusRef} name="status" className="status">
                    <option value="available">Доступен</option>
                    <option value="unavailable">Убрать из меню</option>
                </select>
                <textarea ref={this.descRef} name="desc" placeholder="Description" />
                <input ref={this.imageRef} name="image" type="text" placeholder="Image" autoComplete="off" />
                <button type="submit">+ Добавить в меню</button>
            </form>
        );
    }
}

export default AddBurgerForm;
