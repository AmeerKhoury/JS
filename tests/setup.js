import app from "../src/app";
import { Server } from "http";

let server: Server;

beforeAll(done => {
  server = app.listen(4000, () => {
    console.log("Test server running on port 4000");
    done();
  });
});

afterAll(done => {
  server.close(done);
});
