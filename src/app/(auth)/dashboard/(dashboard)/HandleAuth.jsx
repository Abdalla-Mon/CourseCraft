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
  if (!role) return null;
  let drawerData = data.filter((item) =>
    item.role.includes(role.toLowerCase()),
  );

  return (
    <>
      <div className={"min-h-screen"}>
        <section className={"flex lg:gap-5 w-full "}>
          <div className={"w-auto hidden lg:block"}>
            <DrawerList data={drawerData} />
          </div>
          <DashboardDrawer
            open={open}
            setOpen={setOpen}
            listData={drawerData}
          />
          <div
            className={
              "flex-1 lg:pt-10 max-w-full lg:max-w-[calc(100%-340px)] w-full"
            }
          >
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
