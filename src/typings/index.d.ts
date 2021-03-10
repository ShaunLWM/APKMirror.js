interface BodyForm {
	pnames: string[];
	exclude?: ["alpha", "beta"];
}

interface Developer {
	name: string;
	link: string;
}

interface App {
	name: string;
	description: string;
	link: string;
}

interface Release {
	version: string;
	publish_date: string;
	whats_new: string;
	downloads: string;
	link: string;
}

interface Apk {
	version_code: string;
	link: string;
	publish_date: string;
	"signature-sha1": string;
	"signature-sha256": string;
	pname: string;
	arches: string[];
	dpis: string[];
	minapi: string;
	description: string;
	capabilities: string[];
}

interface ApkData {
	pname: string;
	exists: boolean;
	developer: Developer;
	app: App;
	release: Release;
	apks: Apk[];
}

interface RootObject {
	data: ApkData[];
	status: number;
}
