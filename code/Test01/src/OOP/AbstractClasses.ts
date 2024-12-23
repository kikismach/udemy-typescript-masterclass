type Holidays = {
	date: Date;
	reason: string;
}[];

abstract class Department {
	protected abstract holidays: Holidays;
	protected constructor(protected name: string) {}

	public addHolidays(holidays: Holidays) {
		if (Array.isArray(holidays)) {
			for (const holiday of holidays) {
				this.holidays.push(holiday);
			}
		}
	}

	protected abstract printHolidayTitle(): void;

	public printHolidays() {
		if (this.holidays.length === 0) {
			console.log(`There are not holidays for ${this.name}`);
		} else {
			this.printHolidayTitle();
			this.holidays.forEach((holiday, index) => {
				console.log(`${index + 1}. ${holiday.date} - ${holiday.reason}`);
			});
		}
	}
}

class ItDepartment extends Department {
	protected holidays: Holidays = [];

	constructor() {
		super("IT Department");
	}

	protected printHolidayTitle(): void {
		console.log(`This are the holidays for ${this.name}`);
	}
}

class AdminDepartment extends Department {
	protected holidays: Holidays = [];

	constructor() {
		super("Admin Department");
	}

	protected printHolidayTitle(): void {
		console.log("Super admiiiiiiins!!!");
		console.log("---------------------------");
		console.log(`This are the holidays for ${this.name}`);
	}
}

const itHolidays: Holidays = [
	{
		date: new Date(2024, 5, 4),
		reason: "It Holiday",
	},
];

const adminHolidays: Holidays = [
	{
		date: new Date(2024, 11, 8),
		reason: "Admin Holiday",
	},
];

const itDepartment = new ItDepartment();
itDepartment.addHolidays(itHolidays);

const adminDepartment = new AdminDepartment();
adminDepartment.addHolidays(adminHolidays);

itDepartment.printHolidays();
adminDepartment.printHolidays();

export abstract class SectionTest {
	public abstract init(): void;
}
