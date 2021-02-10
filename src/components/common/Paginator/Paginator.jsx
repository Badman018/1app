import style from './Paginator.module.css'
import React, {useState} from 'react'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPaginator = (portionNumber - 1) * portionSize + 1
    let rightPortionPaginator = portionNumber * portionSize

    return (
        <div>
            {
                portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPaginator && p <= rightPortionPaginator)
                    .map(p => {
                    return <span className={currentPage === p && style.selectedPage} onClick={() => {
                        onPageChanged(p)
                    }}>{p}</span>
                })
            }
            {
                portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
            }
        </div>
    )
}

export default Paginator