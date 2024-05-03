import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useToastContext } from "../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useAuth } from "../../../Contexts/Auth/AuthProvider";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import Image from "next/image";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardDrawer({ open, setOpen, listData }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className={""}>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList data={listData} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export function DrawerList({ data, toggleDrawer }) {
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();
  const pathName = usePathname();
  const router = useRouter();
  console.log("what is the path name", pathName);

  async function handleLogout() {
    const signout = await handleRequestSubmit(
      {},
      setLoading,
      `auth/signout`,
      false,
      "Logging out...",
      setRedirect,
    );
    console.log(signout);
    if (signout?.status === 200) {
      router.push("/login");
    }
  }

  return (
    <Box
      onClick={toggleDrawer && toggleDrawer(false)}
      className={
        " p-5 shadow-xl h-screen w-[250px] lg:w-[270px] xl:w-[300px] bg-white"
      }
    >
      <Link href={"/"}>
        <Image src="/logo.png" alt="Edu " width={160} height={160} />
      </Link>
      <List className={"w-full"}>
        {data.map((item) => {
          if (item.text === "Logout")
            return (
              <ListItem key={item.id} onClick={handleLogout}>
                <ListItemButton
                  className={"hover:bg-[--color_secondary] hover:text-white"}
                >
                  <ListItemText primary={item.text} className={"capitalize"} />
                </ListItemButton>
              </ListItem>
            );
          return (
            <ListItem key={item.id} className={""}>
              <Link href={item.href} className={"block w-full ]"}>
                <ListItemButton
                  className={`rounded-[6px] hover:bg-[--color_primary] hover:text-white ${pathName === item.href ? "bg-[--color_primary] text-white" : ""} `}
                >
                  <ListItemText primary={item.text} className={"capitalize "} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
