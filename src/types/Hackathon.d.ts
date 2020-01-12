interface Hackathon {
	name: string;
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
