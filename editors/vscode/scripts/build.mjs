#!/usr/bin/env node

import { exec, unlink } from "../../../scripts/utils.mjs";

unlink("./dist");
exec("npm", ["run", "build:syntax"]);
exec("npm", ["run", "build:node"]);
exec("npm", ["run", "build:browser-extension"]);
exec("npm", ["run", "build:browser-server"]);
