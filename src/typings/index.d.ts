export interface BodyForm {
	pnames: string[];
	exclude?: ["alpha", "beta"];
}

export interface Developer {
	name: string;
	link: string;
}

export interface App {
	name: string;
	description: string;
	link: string;
}

export interface Release {
	version: string;
	publish_date: string;
	whats_new: string;
	downloads: string;
	link: string;
}

export interface Apk {
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

export interface ApkData {
	pname: string;
	exists: boolean;
	developer: Developer;
	app: App;
	release: Release;
	apks: Apk[];
}

export interface RootObject {
	data: ApkData[];
	status: number;
}
