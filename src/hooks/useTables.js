import {useState, useEffect} from "react"

//utils
import {ArraySort} from "../utils/ArraySort"

const useTables = ({tableRecords = [], orderByProp = "id", counts=0}) =>{
    const [records, setRecords] = useState(tableRecords)
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState(orderByProp)
    const [pageNo, setPageNo] = useState(1);
    const [pageCount, setPageCount] = useState(counts);
    const [searchText, setSearchText] = useState('')

    const handleSearchText = (e) => {
        setSearchText(e.target.value)
    }


    const handleSortRequest = (property) => (event) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder (isAsc ? 'desc' : 'asc');
        setOrderBy (property);
    }

    useEffect (() => {
        const filteredData = ArraySort(records, order, orderBy)
        setRecords (filteredData);
    }, [order, orderBy])

    const handlePagination = (event, page) => {
        setPageNo(page);
      }

    return {
        records,
        setRecords,
        order,
        orderBy,
        handleSortRequest,

        pageNo,
        pageCount,
        setPageCount,
        handlePagination,

        searchText,
        handleSearchText,
    }
}

export default useTables