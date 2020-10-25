export interface IUser {
	type: string;
	fname: string;
	image: string;
	email: string;
}

export interface IOrder {
	// kl shi hon commented hutti matrahon li 3araftihon bl OrderResource class(in the backend)
	// _id: string;
	// title: string;
	// subtitle: string;
	// rating: number;
	// instructor: string;
	// duration: number;
	// lecturesCount: number;
	// level: string;
	// photoURL: string;
	products: Array<IProducts>;
}
export interface IProducts {
	// kl shi hon commented hutti matrahon li 3araftihon bl ProductResource class(in the backend)
	// _id: string;
	// fname: string;
	// lname: string;
	// email: string;
	// gender: string;
	// dob: Date;
	// fieldOfStudy: string;
	// nationality: string;
	// degreeOfEducation: string;
	// certificate: string;
	// rating: number;
	// completedAssignmentsCount: number;
	// photoURL: string;
	branches: Array<IBranch>;
}
export interface IBranch {
	// kl shi hon commented hutti matrahon li 3araftihon bl BranchResource class(in the backend)
	//courseId: string;
}


