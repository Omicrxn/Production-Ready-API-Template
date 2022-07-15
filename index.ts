import "module-alias/register";
import { server } from "./src/core/server";
let aps = server();
export const apserver = aps;
