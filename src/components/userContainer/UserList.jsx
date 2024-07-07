import AddButton from "./AddButton";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";
import UserDetails from "./UserDetails";  
import { useEffect, useState } from "react";
const URL = "http://localhost:3030/jsonstore";

export default function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(Object.values(data));
        setUsers(Object.values(data));
      });
  }, []);
  return (
    <>
      <section className="card users-container">
        <Search />
        <Table
        users={users}
        />
        <AddButton />
        <Pagination/>
      </section>
      {/* <UserDetails /> */}
    </>
  );
}
