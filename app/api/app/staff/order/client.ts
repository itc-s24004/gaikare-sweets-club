import { api_client_req } from "../../client"
import { AppAPI_staff_Order_Map } from "./route"



export function getAll() {
    return api_client_req<AppAPI_staff_Order_Map, "GET">(
        "/api/app/staff/order", "GET",
        undefined,
        undefined
    );
}




export * from "./[id]/client"