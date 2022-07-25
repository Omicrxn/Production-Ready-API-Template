import "module-alias/register";
import "reflect-metadata";

import { server } from "./src/core/server";
let aps = server();
export const apserver = aps;
