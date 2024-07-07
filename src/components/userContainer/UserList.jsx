import AddButton from "./AddButton";
import Pagination from "./Pagination";
import Search from "./Search";
import TableWrapper from "./TableWrapper";

export default function UserList(props) {
  return (
    <>
      <section className="card users-container">
        <Search />
        <TableWrapper />
        <AddButton />
        <Pagination/>
      </section>
    </>
  );
}
