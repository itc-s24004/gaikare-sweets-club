import { AppDB, AppDB_Types } from "@/libs/db";
import { app_api_map_gen, app_api_response } from "../../api";
import { AppAPI } from "@/libs/api";
import { NextResponse } from "next/server";

export type AppAPI_staff_Order_Map = app_api_map_gen<{
    GET: {
        req: {
            params: undefined,
            body: undefined
        },
        res: app_api_response<AppDB_Types["order"]["model"][]>
    }
}>



export async function GET() {
    const email = await AppAPI.session.getEmail();
    if (!email) return AppAPI.response.errorResponse.Unauthorized;

    const permission = await AppAPI.permission.getDetail(email);
    if (!permission) return AppAPI.response.errorResponse.Unauthorized;
    if (permission.isLock) return AppAPI.response.errorResponse.Forbidden;

    const orders = await AppDB.order.getAll();

    return NextResponse.json<AppAPI_staff_Order_Map["GET"]["res"]>({
        success: true,
        data: orders
    })
}