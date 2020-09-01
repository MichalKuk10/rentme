import React, {useState, useEffect} from "react";
import "../../css/edit-item.css"
import "../../css/add-item.css"
import "../../css/header-and-body.css"

function EditItem(id) {


    const [itemId, setItemID] = useState(id.value);

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchCategories();
        fetchItemDetails(itemId)
    }, []);

    const [category, setItems] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:8080/api/categories/all');
        const category = await response.json();
        setItems(category);
    }
    //Tu zostawiam funkcje do pobrania adresu
    // const fetchUserAddress = async (itemId) => {
    //     const response = await fetch(`http://localhost:8080/renters/find-by/item/${itemId}`);
    //     const address = await response.json();
    //     console.log(address);
    // }

    const fetchItemDetails = async (itemId) => {

        const response = await fetch(`http://localhost:8080/api/items/${itemId}`);
        const item = await response.json();
        setItem(item);
    }

    return (
        <div className="container">
            <h1 id="lets-get-started">Here you can edit your item</h1>
            <div className="inputs">
                <h4>Item name</h4>
                <input className="item-name" placeholder={item.name}/>

                <h2>Item Info</h2>
                <h4><label htmlFor="quest-type">Category</label></h4>
                <select className="type-selector" id="quest-type" name="quest-type">
                    {category.map(element => (
                        <option>{element.description}</option>
                    ))}
                </select>

                <h4>Description:</h4>
                <input className="item-description" type="text" placeholder={item.description}/>

                <h2>Price</h2>
                <h4>Price (PLN/per day):</h4>
                <input className="item-price" placeholder={item.price}/>

                <h2>Address</h2>
                <h4>City:</h4>
                <input className="item-details" placeholder="Enter your city"/>
                <h4>Street with household number:</h4>
                <input className="item-details" placeholder="What is the address?"/>
                <h4>Post-code:</h4>
                <input className="item-details" placeholder="Post-code"/>
                <h4>Manage item's images</h4>
                <div className="input-image-grid">
                    <div className="item-photo-container" type="button" href="#">
                    </div>
                    <div className="item-photo-container"></div>
                    <div className="item-photo-container"></div>
                    <div className="item-photo-container 4"></div>
                    <div className="item-photo-container 5"></div>
                    <div className="item-photo-container 6"></div>
                    <div className="add-item-photo-container 7"></div>
                </div>
            </div>
            <div className="submit-button">
                <button className="button" type="submit">Update Item</button>
            </div>

        </div>
    );
}

export default EditItem;
