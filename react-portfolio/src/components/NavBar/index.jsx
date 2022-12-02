import React, { useEffect } from 'react';

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
        <nav>
            <ul>
                {pages.map((page)=>(
                    <li className={`${currentPage.name===page.name && "navActive"}`} key={page.name}>
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