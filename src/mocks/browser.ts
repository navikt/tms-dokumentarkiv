import { handlers } from "./handlers";
import { setupWorker } from "msw";

// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers)