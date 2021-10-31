import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard'

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filterItem=(category)=>{
        const updatedList = Menu
    };
    console.log(menuData)
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item">Lunch</button>
                    <button className="btn-group__item">Evening</button>
                    <button className="btn-group__item">Dinner</button>
                    <button className="btn-group__item">All</button>
                </div>
            </nav>
           <MenuCard menuData = {menuData} /> 
        </>
    )
}

export default Resturant
