import React from "react";

import "./homepage.styles.scss";

const items = [
    { title: "HATS", subtitle: "Shop now!" },
    { title: "JACKETS", subtitle: "Shop now!" },
    { title: "WOMENS", subtitle: "Shop now!" },
    { title: "MENS", subtitle: "Shop now!" },
];

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                {items.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div className="content">
                            <h1 className="title">{item.title}</h1>
                            <span className="subtitle">{item.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
