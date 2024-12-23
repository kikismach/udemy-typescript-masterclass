type Post = {
	title: string;
	content: string;
	date: Date;
	author: Author;
	awards: Awards;
	category?: string; // optional property ?
};

type Author = {
	name: string;
	age: number;
	readonly email: string;
	readonly type: "human" | "ai"; // readonly property
};

type Awards = {
	[key: string]: AwardDetails; // Index Signature [key:type]
};

type AwardDetails = {
	name: string;
	date: Date;
};

let post: Post = {
	title: "This is a blog post",
	content: "Content of the post",
	date: new Date(),
	author: {
		name: "John",
		age: 22,
		email: "john.doe@email.com",
		type: "human",
	},
	awards: {
		web3: {
			name: "web",
			date: new Date(),
		},
		web2: {
			name: "web",
			date: new Date(),
		},
	},
};

let post2: Post = {
	title: "This is a blog post",
	content: "Content of the post",
	date: new Date(),
	author: {
		name: "John",
		age: 22,
		email: "john.doe@email.com",
		type: "ai",
	},
	awards: {
		web3: {
			name: "web",
			date: new Date(),
		},
		web2: {
			name: "web",
			date: new Date(),
		},
	},
};

//post.author.email = "" //Cannot assign to 'email' because it is a read-only property.

// Union Types

type Dog = {
	name: string;
	barks: boolean;
	wags: boolean;
};

type Cat = {
	name: string;
	purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
	name: "Buddy",
	barks: true,
	wags: true,
};

let cat: DogAndCatUnion = {
	name: "Bigotes",
	purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
	name: "Bigotes",
	purrs: true,
	wags: true,
};

function checkAnimal(animal: DogAndCatUnion) {}

type Airplane = {
	model: string;
	flightNumber: string;
	timeOfDeparture: Date;
	timeOfArrival: Date;
	caterer: Caterer;
	seats: Seat;
};

type Caterer = {
	name: string;
	addres: string;
	phone: number;
};

type Seat = {
	[key: string]: string;
};

export default {};
