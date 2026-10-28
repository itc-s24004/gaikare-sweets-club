import { AppAPI } from "@/libs/api";
import { PageView } from "./view";
import { forbidden, unauthorized } from "next/navigation";
import { connection } from "next/server";

export const instant = false;

export default async function Page() {
    const email = await AppAPI.session.getEmail();
    if (!email) unauthorized();

    const permission = await AppAPI.permission.get(email);
    if (!permission) unauthorized();
    if (permission.isLock) forbidden();


    return <PageView />;
}