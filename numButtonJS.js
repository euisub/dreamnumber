var redCount = 0;
var yellowCount = 0;
var redArr = new Array();
var yellowArr = new Array();
var yellowCount = 0;
var BB = 0;

function s_Btn() {
	console.log("aaa"+BB);
		const s_Btn = document.querySelector('#sbot2');
		const s_Btn_2 = document.querySelector('#sbot3');
		const s_Btn_3 = document.querySelector('#sbot1');
		const S_CLASS_1 = 'sbot2';
		const S_CLASS_2 = 'sbot2_2';
	
		const S_CLASS_1_2 = 'sbot3';
		const S_CLASS_2_2 = 'sbot3_2';
	
		const S_CLASS_1_3 = 'sbot1';
		const S_CLASS_2_3 = 'sbot1_2';

		const bbClass_1 = s_Btn.classList.contains(S_CLASS_1);
		const bbClass_2 = s_Btn.classList.contains(S_CLASS_2);
	
		const bbClass_1_2 = s_Btn_2.classList.contains(S_CLASS_1_2);
		const bbClass_2_2 = s_Btn_2.classList.contains(S_CLASS_2_2);
	
		const bbClass_1_3 = s_Btn_3.classList.contains(S_CLASS_1_3);
		const bbClass_2_3 = s_Btn_3.classList.contains(S_CLASS_2_3);
	if (BB == 2) {

		if (bbClass_1 == true) {
			s_Btn.classList.remove(S_CLASS_1);
			s_Btn.classList.add(S_CLASS_2);
		}
	} else{
		s_Btn.classList.remove(S_CLASS_2);
		s_Btn.classList.add(S_CLASS_1);
	}
	
	if (BB == 1) {
		
		if (bbClass_1_2 == true) {
			s_Btn_2.classList.remove(S_CLASS_1_2);
			s_Btn_2.classList.add(S_CLASS_2_2);
		} 
	} else{

		s_Btn_2.classList.remove(S_CLASS_2_2);
		s_Btn_2.classList.add(S_CLASS_1_2);
	}
	
	if (BB == 0) {
		
		if (bbClass_1_3 == true) {
			s_Btn_3.classList.remove(S_CLASS_1_3);
			s_Btn_3.classList.add(S_CLASS_2_3);
		} 
	} else{

		s_Btn_3.classList.remove(S_CLASS_2_3);
		s_Btn_3.classList.add(S_CLASS_1_3);
	}

}
function handleClick(num) {
	const ClickNum = document.querySelector('#ClickNum' + num);
	const CLICKED_CLASS_1 = 'numBtn';
	const CLICKED_CLASS_2 = 'numBtn_x';
	const CLICKED_CLASS_3 = 'numBtn_f';

	const hasClass_1 = ClickNum.classList.contains(CLICKED_CLASS_1);
	const hasClass_2 = ClickNum.classList.contains(CLICKED_CLASS_2);
	const hasClass_3 = ClickNum.classList.contains(CLICKED_CLASS_3);
	// console.log(!hasClass_1);
	// if (!hasClass_1) {
	//     ClickNum.classList.add(CLICKED_CLASS_2);
	// } else {
	//     ClickNum.classList.remove(CLICKED_CLASS_1);
	// }

	if (BB == 2) {
		if (hasClass_2 == true) {
			alert('제외수에 포함된 숫자입니다.');
		} else if (hasClass_1 == true) {
			if (yellowCount > 5) {
				alert('더이상 포함시킬 수 없습니다.');
			} else {
				ClickNum.classList.remove(CLICKED_CLASS_1);
				ClickNum.classList.add(CLICKED_CLASS_3);
				yellowArr[yellowCount] = num;
				yellowCount++;
			}
		} else if (hasClass_3 == true) {
			ClickNum.classList.remove(CLICKED_CLASS_3);
			ClickNum.classList.add(CLICKED_CLASS_1);
			yellowArr.splice(yellowArr.indexOf(num), 1);
			yellowCount--;
		}
	} else if (BB == 1) {
		if (hasClass_3 == true) {
			alert('고정수에 포함된 숫자입니다.');
		} else if (hasClass_1 == true) {
			if (redCount > 38) {
				alert('더이상 제외시킬 수 없습니다.');
			} else {
				ClickNum.classList.remove(CLICKED_CLASS_1);
				ClickNum.classList.add(CLICKED_CLASS_2);
				redArr[redCount] = num;
				redCount++;
			}
		} else if (hasClass_2 == true) {
			ClickNum.classList.remove(CLICKED_CLASS_2);
			ClickNum.classList.add(CLICKED_CLASS_1);
			redArr.splice(redArr.indexOf(num), 1);
			redCount--;
		}
	}
}

function s_Releace() {
	if (BB == 1) {
		for (i = 1; i <= 45; i++) {
			const ClickNum = document.querySelector('#ClickNum' + i);
			const hasClass = ClickNum.classList.contains('numBtn');
			const hasClass_1 = ClickNum.classList.contains('numBtn_x');
			const hasClass_2 = ClickNum.classList.contains('numBtn_f');
			if (!hasClass && hasClass_1 == true) {
				ClickNum.classList.remove('numBtn_x');
				ClickNum.classList.add('numBtn');
			}
		}
		redArr = [];
		redCount = 0;
	} else if (BB == 2) {
		for (i = 1; i <= 45; i++) {
			const ClickNum = document.querySelector('#ClickNum' + i);
			const hasClass = ClickNum.classList.contains('numBtn');
			const hasClass_1 = ClickNum.classList.contains('numBtn_x');
			const hasClass_2 = ClickNum.classList.contains('numBtn_f');
			if (!hasClass && hasClass_2 == true) {
				ClickNum.classList.remove('numBtn_f');
				ClickNum.classList.add('numBtn');
			}
		}

		yellowArr = [];
		yellowCount = 0;
	}
}

function reSet_sel() {
	document.getElementById('btnCot_0').value = 0;
	document.getElementById('btnCot_1').value = 0;
	document.getElementById('btnCot_2').value = 0;
	document.getElementById('btnCot_3').value = 0;
	document.getElementById('btnCot_4').value = 0;

	for (i = 1; i <= 45; i++) {
		const ClickNum = document.querySelector('#ClickNum' + i);
		const hasClass = ClickNum.classList.contains('numBtn');
		const hasClass_1 = ClickNum.classList.contains('numBtn_x');
		const hasClass_2 = ClickNum.classList.contains('numBtn_f');
		if (!hasClass && hasClass_1 == true) {
			ClickNum.classList.remove('numBtn_x');
			ClickNum.classList.add('numBtn');
		} else if (!hasClass && hasClass_2 == true) {
			ClickNum.classList.remove('numBtn_f');
			ClickNum.classList.add('numBtn');
		}

		redArr = [];
		yellowArr = [];
		redCount = 0;
		yellowCount = 0;
	}
}