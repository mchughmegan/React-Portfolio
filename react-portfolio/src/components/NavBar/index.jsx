import React, { useEffect } from 'react';
import "../../style/NavBar.css";

function NavBar(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    useEffect (()=>{
        document.title=currentPage.name;
    }, [currentPage]);
    return (
        <nav className="navbar flex-row-reverse">
            <ul className="navbar-nav list-group-horizontal">
                {pages.map((page)=>(
                    <li className={`btn nav-item me-1 ${currentPage.name===page.name && "navActive "} `} key={page.name}>
                        <span onClick={()=>setCurrentPage(page)}>
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;