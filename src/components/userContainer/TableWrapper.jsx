import AddButton from "./AddButton";
import Spinner from "./Spinner";
import Table from "./Table";
import { useState, useEffect } from "react";
export default function TableWrapper(props) {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    return(
        <>
        {/* {loading && <Spinner />} */}
        <Table />
        </>
    )
}