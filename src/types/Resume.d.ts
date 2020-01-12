interface ResumeItem {
	name: string;
	date: Date;
	description?: string;
}

interface Hackathon extends ResumeItem {
	project?: string;
	date: Date;
	location: {
		pos?: { lat: number; lng: number };
		country: string;
		countryCode: string;
		city: string;
		building?: string;
	};
	winner: boolean;
}

interface PersonalProject extends ResumeItem {}

interface Experience extends ResumeItem {
	startDate: Date;
	endDate: Date | null;
	position: string;
	location: {
		pos?: { lat: number; lng: number };
		country: string;
		countryCode: string;
		city: string;
		building?: string;
	};
	technologies: string[];
}
