import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import request from "request";

dotenv.config();

const port = process.env.PORT || 5000;

const servers = [
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
  "http://localhost:5004",
];
let cur = 0;

const handler = (req: any, res: Response) => {
  const _req = request({ url: servers[cur] + req.url }).on("error", (error) => {
    let _req = request({ url: servers[cur] + req.url })
    req.message=error
    req.status=500
    req.pipe(_req).pipe(res);
    
    cur = (cur + 1) % servers.length;
  });

  req.pipe(_req).pipe(res);
  cur = (cur + 1) % servers.length;
};

const middleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  res.on("finish", () => {

    
    console.log(
      
      new Date(), ' - ',
      req.status===500 ? "Error on" : "Success on",
      req.method + ": ",
      req.url+' - ',
      "ON NODE: " + cur+' - ',
      Date.now() - start + 'ms - ',
      JSON.stringify(req.message) ?? null
    );
  });
  next();
};

express()
  .use(middleware)
  .get("*", handler)
  .post("*", handler)
  .listen(port);

//PORT=5002 node server.js
