import { createClient } from "next-sanity";

export const client=createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_ID,
    dataset:"production",
    apiVersion:"2024-03-07",
    useCdn:false,
})