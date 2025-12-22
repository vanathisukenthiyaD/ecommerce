export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setPage("jewellery")}>Jewellery</li>
        </ul>           
    </div>
  );
}