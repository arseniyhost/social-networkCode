import React, { useState } from 'react';
import style from './Users.module.css';

const Paginator = ({ totalItemCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let letftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            <div className={style.blockPages}>
                {
                    portionNumber > 1 && <button className={style.btnRight} onClick={() => { setPortionNumber(portionNumber - 1) }} >back</button>
                }
                <div className={style.containerPortions}>
                    {pages
                        .filter(p => p >= letftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {

                            return <span className={(currentPage === p && style.selectedPage)}
                                key={p}
                                onClick={(e) => {
                                    onPageChange(p)
                                }}
                            >{p}</span>
                        })
                    }
                </div>
                {
                    portionCount > portionNumber && <button className={style.btnRight} onClick={() => { setPortionNumber(portionNumber + 1) }} >next</button>
                }
            </div>
        </div>
    );
}

export default Paginator;