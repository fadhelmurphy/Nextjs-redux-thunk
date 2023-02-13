import env from "@constants/env";

export const GET = async (
    url,
    header = env.HEADERS
  ) => {
    // const parseBody = JSON.stringify(body);
    try {
      const data = await fetch(url, {
        method: 'GET',
        headers: header,
        // credentials: 'include'
      });
  
      return {
        status: data.status,
        data: await data.json(),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export function getGeneralApiProblem(status){
    switch (status) {
      case 503:
        return { kind: "service-unavailable", message: "503 Service Unavailable" }
      case 502:
        return { kind: "bad-gateway", message: "502 Bad Gateway" }
      case 500:
        return { kind: "internal-server-error", message: "500 Internal Server Error" }
      case 400: {
        return { kind: "bad-request", message: "Bad Request" }
      }
      case 401:
        return { kind: "unauthorized", message: "Your session has expired" }
      case 403:
        return { kind: "forbidden", message: "403 Forbidden" }
      case 404:
        return { kind: "not-found", message: "404 Not Found" }
      default: {
        return {
          kind: "server",
          message: "Server Error"
        }
      }
    }
  }

  export const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}


export const Rupiah = (props) => {

	const reverse = props && props.toString().split("").reverse().join("");
	const ribuan = reverse && reverse.match(/\d{1,3}/g);
	const final = ribuan && ribuan.join(".").split("").reverse().join("");

	return `Rp ${final}`;

};

export const IdrConvert = (props) => {

	if (props && props?.toString() && props?.toString().includes(".")) {

		const rp = Number(props?.toString()?.replace(/[^0-9.-]+/g, ""));
		return Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(rp);

	}

	return Rupiah(props);

};