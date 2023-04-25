import moment from "moment";

// Get date of upload new acc
export const getUploadDate = () => moment().format("D/MM/YYYY HH:mm:ss");

// Calculating score
export const calcPassedLvls = (lvls) => {
	let passedAmount = 0;
	for (const lvl in lvls) {
		if (lvls[lvl].passed) passedAmount++;
	}
	return passedAmount;
};

export const calcGatesAmount = (gates) => {
	let sum = 0;
	for (const gate in gates) sum += gates[gate];
	return sum;
};

export const lvlUp = (lvls, lvlNum) => {
	lvls[lvlNum - 1].passed = true;
	lvls[lvlNum].active = true;
};
