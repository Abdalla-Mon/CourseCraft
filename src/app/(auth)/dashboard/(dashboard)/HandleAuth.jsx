"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardDrawer, {
  DrawerList,
} from "../../../components/DashboardDrawer/DashboardDrawer";
import { data } from "./data";

export default function HandleAuth({ children }) {
  let { role } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  let drawerData = data.filter((item) =>
    item.role.includes(role.toLowerCase()),
  );

  return (
    <div className="bg-white  fixed top-0 left-0 w-full h-full z-[100000] ">
      <section className={"flex"}>
        <div className={"w-[250px] hidden lg:block"}>
          <DrawerList data={drawerData} />
        </div>
        <DashboardDrawer open={open} setOpen={setOpen} listData={drawerData} />
        <div className={"flex-1"}>{children}</div>
      </section>
    </div>
  );
}
