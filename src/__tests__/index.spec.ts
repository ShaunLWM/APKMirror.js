import { getPackages } from "../";

describe("test api calls", () => {
	it("should return the correct WhatsApp information", async () => {
		const data = await getPackages(["com.whatsapp"]);
		expect(data[0].pname).toBe("com.whatsapp");
		expect(data[0].exists).toBe(true);
	});

	it("should return the correct mixed packages in correct order", async () => {
		const data = await getPackages(["com.whatsapp", "com.instagram.android"]);
		expect(data[0].pname).toBe("com.whatsapp");
		expect(data[0].exists).toBe(true);
		expect(data[1].pname).toBe("com.instagram.android");
		expect(data[1].exists).toBe(true);
	});

	it("should show exist:false for missing package name", async () => {
		const data = await getPackages(["--"]);
		expect(data[0].pname).toBe("--");
		expect(data[0].exists).toBe(false);
	});
});
