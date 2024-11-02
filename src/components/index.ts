export interface AttendanceRecord {
	date: string;
	status: 'present' | 'absent';
}

export interface Student {
	id: string;
	name: string;
	course: string;
	rollNumber: string;
	email: string;
	attendance: number;
	avatar: string;
	status: 'active' | 'inactive';
	semester: number;
	recentAttendance: AttendanceRecord[];
}

export const students: Student[] = [
	{
		id: '1',
		name: 'Johnson Wood',
		course: 'Computer Science',
		rollNumber: 'CS2024-001',
		email: 'johnson.w@university.edu',
		attendance: 85.5, // percentage
		avatar: 'https://images.pexels.com/photos/18593901/pexels-photo-18593901/free-photo-of-man-sitting-and-posing-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'active',
		semester: 3,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'absent' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '2',
		name: 'John Doe',
		course: 'Electrical Engineering',
		rollNumber: 'EE2024-045',
		email: 'john.d@university.edu',
		attendance: 92.0,
		avatar: 'https://images.pexels.com/photos/18949912/pexels-photo-18949912/free-photo-of-man-with-beard-and-dyed-hair-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'active',
		semester: 4,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '3',
		name: 'Alex Mode',
		course: 'Mechanical Engineering',
		rollNumber: 'ME2024-032',
		email: 'alex.m@university.edu',
		attendance: 78.5,
		avatar: 'https://images.pexels.com/photos/8114127/pexels-photo-8114127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'inactive',
		semester: 2,
		recentAttendance: [
			{ date: '2024-02-28', status: 'absent' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'absent' },
		]
	},
	{
		id: '4',
		name: 'Jamie Rivera',
		course: 'Information Technology',
		rollNumber: 'IT2024-078',
		email: 'jamie.r@university.edu',
		attendance: 95.0,
		avatar: 'https://images.pexels.com/photos/13143554/pexels-photo-13143554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'active',
		semester: 5,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '5',
		name: 'Denver Thompson',
		course: 'Computer Science',
		rollNumber: 'CS2024-089',
		email: 'denver.t@university.edu',
		attendance: 88.5,
		avatar: 'https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'inactive',
		semester: 3,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'absent' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '6',
		name: 'Morgan Lee',
		course: 'Civil Engineering',
		rollNumber: 'CE2024-056',
		email: 'morgan.l@university.edu',
		attendance: 82.0,
		avatar: 'https://images.pexels.com/photos/1161267/pexels-photo-1161267.jpeg?auto=compress&cs=tinysrgb&w=600',
		status: 'active',
		semester: 4,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'absent' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '7',
		name: 'Taylor Bennett',
		course: 'Electronics Engineering',
		rollNumber: 'ECE2024-034',
		email: 'taylor.b@university.edu',
		attendance: 76.5,
		avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
		status: 'inactive',
		semester: 6,
		recentAttendance: [
			{ date: '2024-02-28', status: 'absent' },
			{ date: '2024-02-27', status: 'absent' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
	{
		id: '8',
		name: 'Casey Williams',
		course: 'Information Technology',
		rollNumber: 'IT2024-092',
		email: 'casey.w@university.edu',
		attendance: 91.5,
		avatar: 'https://images.pexels.com/photos/16004754/pexels-photo-16004754/free-photo-of-woman-and-letters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		status: 'inactive',
		semester: 5,
		recentAttendance: [
			{ date: '2024-02-28', status: 'present' },
			{ date: '2024-02-27', status: 'present' },
			{ date: '2024-02-26', status: 'present' },
			{ date: '2024-02-25', status: 'present' },
		]
	},
];