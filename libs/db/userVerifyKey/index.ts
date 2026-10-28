import { db } from "../db";


export async function verify(userId: string, key: string) {
    return db.userVerifyKey.findUnique({
        where: {
            user: {
                id: userId
            },
            key,
            expiresAt: {
                gte: new Date()
            }
        },
        select: {
            id: true
        }
    }).then(res => res ? true : false)
}


export * as email from "./email";

export type { models } from "./type";