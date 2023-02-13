import { serialize } from "@helpers/utils";
import env from "@constants/env";

export default async function handler(req, res) {

    const method = "GET";
    const options = {
        method,
        headers: {
          ...env.HEADERS,
        }
    }
    const serializeQuery = serialize(req.query);
    const resData = await fetch(`${process.env.API}/detail?${serializeQuery}`, options)
    const data = await resData.json()
    res.status(200).json(data)
  
  }
  