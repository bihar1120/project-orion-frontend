import { Outlet } from "react-router-dom";

function Team() {
  return (
    <div>
      <h1>Our Teams</h1>
      {/* yahan child render honge */}
      <Outlet />
    </div>
  );
}

export default Team;
