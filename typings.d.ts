interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

interface Asset {
	_ref: string;
	_type: 'referece';
}

interface Image {
	asset: Asset;
	_type: 'image';
}

interface File {
	asset: Asset;
	_type: 'file';
}

interface Color {
	alpha: number;
	hex: string;
	hsl: { _type: 'hslaColor'; h: number; s: number; l: number; a: number };
	hsv: { _type: 'hsvaColor'; h: number; s: number; v: number; a: number };
	rgb: { _type: 'rgbaColor'; r: number; b: number; b: number; a: number };
	_type: 'color';
}

export interface Social extends SanityBody {
	name: string;
	url: string;
}

export interface PageInfo extends SanityBody {
	bio: string[];
	email: string;
	figmaURL: string;
	name: string;
	profilePic: Image;
	resume: File;
	resumeURL: string;
	socials: Social[];
	sourceCodeURL: string;
	typings: string[];
}

export interface Experience extends SanityBody {
	company: string;
	endDate?: date;
	isWorkingHere: boolean;
	points: string[];
	startDate: date;
	technologies: Skill[] | Tool[];
	title: string;
}

export interface Project extends SanityBody {
	image: Image;
	isCompleted: boolean;
	isInProgress: boolean;
	liveDemoURL?: string;
	name: string;
	summary: string;
	sourceCodeURL: string;
	technologies: Skill[] | Tool[];
}

export interface Skill extends SanityBody {
	name: string;
	image: Image;
	progress: number;
	skillColor: Color;
}

export interface Tool extends SanityBody {
	name: string;
	image: Image;
}
