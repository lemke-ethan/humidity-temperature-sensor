import { Request, Response } from "express";

export const indexRequestPath = "/";
export function indexRequestHandler(
  req: Request<
    {},
    {
      message: string;
    },
    undefined,
    undefined,
    Record<string, any>
  >,
  res: Response<
    {
      message: string;
    },
    Record<string, any>
  >,
) {
  res.json({ message: "Humidity & Temperature Sensor API" });
}
