import fetch from "node-fetch";
import { ApkData, BodyForm, RootObject } from "./typings";

export const getPackages = async (packages: string[], excludeExperimental = true): Promise<ApkData[]> => {
	try {
		if (packages.length < 1) throw new Error("Empty list of packages");
		const body: BodyForm = {
			pnames: packages,
		};

		if (excludeExperimental) {
			body.exclude = ["alpha", "beta"];
		}

		const response = await fetch("https://www.apkmirror.com/wp-json/apkm/v1/app_exists/", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"User-Agent": "APKMirror.js-v0.0.1",
				"Content-Type": "application/json",
				Authorization: `Basic ${Buffer.from(`api-apkupdater:rm5rcfruUjKy04sMpyMPJXW8`).toString("base64")}`,
			},
		});

		const result = (await response.json()) as RootObject;
		return result.data;
	} catch (error) {
		throw new Error(error);
	}
};
