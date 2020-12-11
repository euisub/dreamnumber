let maxNum = 45;
let arrayOfCombinations = [];
let arrayOfCombinations_2 = [];
let arrayOfNumbers = [];
let duplication = [];
let duplication_2 = [];
let dupliChange = [];
let dupliChange_2 = [];

var ran = new Array();
var ranch = new Array();
var ranResult = new Array();

let wrapper = document.getElementsByClassName('wrapper')[0];
let wrapper_2 = document.getElementsByClassName('wrapper')[1];

function generate() {
	while (arrayOfNumbers.length < 6) {
		let number = Math.floor(Math.random() * maxNum) + 1;

		if (arrayOfNumbers.indexOf(number) == -1) {
			arrayOfNumbers.push(number);
		}
	}

	arrayOfCombinations.push(
		arrayOfNumbers.sort(function (a, b) {
			return a - b;
		})
	);

	for (i = 0; i < arrayOfCombinations.length; i++) {
		duplication[i] = arrayOfCombinations[i];
	}

	arrayOfNumbers = [];

	display(1);
}

//반자동

function generate_Check() {
	BB = 4;
	var selNum1 = Number($('#btnCot_0 option:selected').val());
	var selNum2 = Number($('#btnCot_1 option:selected').val());
	var selNum3 = Number($('#btnCot_2 option:selected').val());
	var selNum4 = Number($('#btnCot_3 option:selected').val());
	var selNum5 = Number($('#btnCot_4 option:selected').val());

	var selTotal = selNum1 + selNum2 + selNum3 + selNum4 + selNum5;

	var y_count_0 = [];
	var y_count_1 = [];
	var y_count_2 = [];
	var y_count_3 = [];
	var y_count_4 = [];

	var r_count_0 = [];
	var r_count_1 = [];
	var r_count_2 = [];
	var r_count_3 = [];
	var r_count_4 = [];

	if (selTotal > 6) {
		alert('로또조합은 숫자 6개 입니다. 설정값을 확인해주세요.');
	} else {
		var result = 0;

		for (j = 0; j < redCount; j++) {
			var check_n = 0;
			if (Math.floor(redArr[j] / 10) == 0) {
				var search = r_count_0.indexOf(redArr[j]);
				if (search != -1) {
					r_count_0.splice(search, 1);
				}
				r_count_0.push(redArr[j]);
			} else if (Math.floor(redArr[j] / 10) == 1) {
				var search = r_count_1.indexOf(redArr[j]);
				if (search != -1) {
					r_count_1.splice(search, 1);
				}
				r_count_1.push(redArr[j]);
			} else if (Math.floor(redArr[j] / 10) == 2) {
				var search = r_count_2.indexOf(redArr[j]);
				if (search != -1) {
					r_count_2.splice(search, 1);
				}
				r_count_2.push(redArr[j]);
			} else if (Math.floor(redArr[j] / 10) == 3) {
				var search = r_count_3.indexOf(redArr[j]);
				if (search != -1) {
					r_count_3.splice(search, 1);
				}
				r_count_3.push(redArr[j]);
			} else if (Math.floor(redArr[j] / 10) == 4) {
				var search = r_count_4.indexOf(redArr[j]);
				if (search != -1) {
					r_count_4.splice(search, 1);
				}
				r_count_4.push(redArr[j]);
			}
		}

		for (j = 0; j < yellowCount; j++) {
			if (Math.floor(yellowArr[j] / 10) == 0) {
				y_count_0.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 1) {
				y_count_1.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 2) {
				y_count_2.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 3) {
				y_count_3.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 4) {
				y_count_4.push(yellowArr[j]);
			}
		}

		var no_to_1 =
			Number(y_count_1.length) +
			Number(y_count_2.length) +
			Number(y_count_3.length) +
			Number(y_count_4.length);
		var no_to_2 =
			Number(y_count_0.length) +
			Number(y_count_2.length) +
			Number(y_count_3.length) +
			Number(y_count_4.length);
		var no_to_3 =
			Number(y_count_1.length) +
			Number(y_count_0.length) +
			Number(y_count_3.length) +
			Number(y_count_4.length);
		var no_to_4 =
			Number(y_count_1.length) +
			Number(y_count_2.length) +
			Number(y_count_0.length) +
			Number(y_count_4.length);
		var no_to_5 =
			Number(y_count_1.length) +
			Number(y_count_2.length) +
			Number(y_count_3.length) +
			Number(y_count_0.length);
		if (
			(selNum1 != 0 && selNum1 > 9 - Number(r_count_0.length)) ||
			(selNum1 != 0 && selNum1 < y_count_0.length) ||
			(selNum1 != 0 && selNum1 > 6 - no_to_1)
		) {
			alert('Error: 1~9 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요. ');
			result = 1;
		} else if (
			(selNum2 != 0 && selNum2 > 10 - Number(r_count_1.length)) ||
			(selNum2 != 0 && selNum2 < y_count_1.length) ||
			(selNum2 != 0 && selNum2 > 6 - no_to_2)
		) {
			alert('Error: 10~19 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요.');
			result = 1;
		} else if (
			(selNum3 != 0 && selNum3 > 10 - Number(r_count_2.length)) ||
			(selNum3 != 0 && selNum3 < y_count_2.length) ||
			(selNum3 != 0 && selNum3 > 6 - no_to_3)
		) {
			alert('Error: 20~29 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요.');
			result = 1;
		} else if (
			(selNum4 != 0 && selNum4 > 10 - Number(r_count_3.length)) ||
			(selNum4 != 0 && selNum4 < y_count_3.length) ||
			(selNum4 != 0 && selNum4 > 6 - no_to_4)
		) {
			alert('Error: 30~39 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요.');
			result = 1;
		} else if (
			(selNum5 != 0 && selNum5 > 6 - Number(r_count_4.length)) ||
			(selNum5 != 0 && selNum5 < y_count_4.length) ||
			(selNum5 != 0 && selNum5 > 6 - no_to_5)
		) {
			alert('Error: 40~45 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요.');
			result = 1;
		}

		var null_count_1 = 0;
		var null_count_2 = 0;
		var null_count_3 = 0;
		var null_count_4 = 0;
		var null_count_5 = 0;
		if (selNum1 == 0 && y_count_0.length > 0) {
			null_count_1 = y_count_0.length;
		}
		if (selNum2 == 0 && y_count_1.length > 0) {
			null_count_2 = y_count_1.length;
		}
		if (selNum3 == 0 && y_count_2.length > 0) {
			null_count_3 = y_count_2.length;
		}
		if (selNum4 == 0 && y_count_3.length > 0) {
			null_count_4 = y_count_3.length;
		}
		if (selNum5 == 0 && y_count_4.length > 0) {
			null_count_5 = y_count_4.length;
		}
		var null_total =
			Number(null_count_1) +
			Number(null_count_2) +
			Number(null_count_3) +
			Number(null_count_4) +
			Number(null_count_5);

		if (null_total + selTotal > 6) {
			alert('Error: 선택갯수와 빨강(제외) or 노랑(포함) 갯수를 확인하세요.');
			result = 1;
		}
	}

	if (result == 0) {
		generate_2(selNum1, selNum2, selNum3, selNum4, selNum5, selTotal);
	}
}

function generate_2(a, b, c, d, e, t) {
	console.log(a, b, c, d, e, t);
	var numArr = new Array();

	for (i = 0; i < 45; i++) {
		numArr[i] = i + 1;
	}

	if (redCount != 0) {
		for (j = 0; j < redCount; j++) {
			var search = numArr.indexOf(redArr[j]);
			if (search != -1) {
				numArr.splice(search, 1);
			}
		}
	}

	var numResult1 = new Array();
	var numResult2 = new Array();
	var numResult3 = new Array();
	var numResult4 = new Array();
	var numResult5 = new Array();
	if (yellowCount != 0) {
		for (j = 0; j < yellowCount; j++) {
			var search = numArr.indexOf(yellowArr[j]);

			if (search != -1) {
				numArr.splice(search, 1);
			}

			if (Math.floor(yellowArr[j] / 10) == 0) {
				numResult1.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 1) {
				numResult2.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 2) {
				numResult3.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 3) {
				numResult4.push(yellowArr[j]);
			} else if (Math.floor(yellowArr[j] / 10) == 4) {
				numResult5.push(yellowArr[j]);
			}
		}
	}

	var num_set1 = new Array();
	var num_set2 = new Array();
	var num_set3 = new Array();
	var num_set4 = new Array();
	var num_set5 = new Array();

	var lend_1 = new Array();
	var lend_2 = new Array();
	var lend_3 = new Array();
	var lend_4 = new Array();
	var lend_5 = new Array();

	if (t != 0) {
		for (i = 0; i < numArr.length; i++) {
			if (Math.floor(numArr[i] / 10) == 0) {
				num_set1.push(numArr[i]);
			} else if (Math.floor(numArr[i] / 10) == 1) {
				num_set2.push(numArr[i]);
			} else if (Math.floor(numArr[i] / 10) == 2) {
				num_set3.push(numArr[i]);
			} else if (Math.floor(numArr[i] / 10) == 3) {
				num_set4.push(numArr[i]);
			} else if (Math.floor(numArr[i] / 10) == 4) {
				num_set5.push(numArr[i]);
			}
		}

		if (a != numResult1.length) {
			console.log('222' + numResult1.length);
			var num_plus = new Array();
			var coCot = a - Number(numResult1.length);

			for (j = 0; j < coCot; j++) {
				num_plus[j] = num_set1[Math.floor(Math.random() * num_set1.length)];
				var search = numArr.indexOf(num_plus[j]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
				var search = num_set1.indexOf(num_plus[j]);
				if (search != -1) {
					num_set1.splice(search, 1);
				}
			}

			for (i = 0; i < num_set1.length; i++) {
				var search = numArr.indexOf(num_set1[i]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
			}
			lend_1 = numResult1.concat(num_plus);
		} else if (a == numResult1.length) {
			// for(i=0;i<numResult1.length;i++){
			// 	var search = num_set1.indexOf(numResult1[i]);
			// 	if (search != -1) {
			// 		num_set1.splice(search, 1);
			// 	}
			// }
			if (a != 0) {
				for (i = 0; i < num_set1.length; i++) {
					var search = numArr.indexOf(num_set1[i]);
					if (search != -1) {
						numArr.splice(search, 1);
					}
				}
			}
			lend_1 = numResult1;
			console.log('aaa=' + lend_1);
		}

		if (b != numResult2.length) {
			var num_plus = new Array();
			var coCot = b - Number(numResult2.length);
			for (j = 0; j < coCot; j++) {
				num_plus[j] = num_set2[Math.floor(Math.random() * num_set2.length)];
				var search = numArr.indexOf(num_plus[j]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
				var search = num_set2.indexOf(num_plus[j]);
				if (search != -1) {
					num_set2.splice(search, 1);
				}
			}
			for (i = 0; i < num_set2.length; i++) {
				var search = numArr.indexOf(num_set2[i]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
			}
			lend_2 = numResult2.concat(num_plus);
		} else if (b == numResult2.length) {
			if (b != 0) {
				for (i = 0; i < num_set2.length; i++) {
					var search = numArr.indexOf(num_set2[i]);
					if (search != -1) {
						numArr.splice(search, 1);
					}
				}
			}

			lend_2 = numResult2;
		}

		if (c != numResult3.length) {
			var num_plus = new Array();
			var coCot = c - Number(numResult3.length);
			for (j = 0; j < coCot; j++) {
				num_plus[j] = num_set3[Math.floor(Math.random() * num_set3.length)];
				var search = numArr.indexOf(num_plus[j]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
				var search = num_set3.indexOf(num_plus[j]);
				if (search != -1) {
					num_set3.splice(search, 1);
				}
			}
			for (i = 0; i < num_set3.length; i++) {
				var search = numArr.indexOf(num_set3[i]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
			}
			lend_3 = numResult3.concat(num_plus);
		} else if (c == numResult3.length) {
			if (c != 0) {
				for (i = 0; i < num_set3.length; i++) {
					var search = numArr.indexOf(num_set3[i]);
					if (search != -1) {
						numArr.splice(search, 1);
					}
				}
			}

			lend_3 = numResult3;
		}

		if (d != numResult4.length) {
			var num_plus = new Array();
			var coCot = d - Number(numResult4.length);
			for (j = 0; j < coCot; j++) {
				num_plus[j] = num_set4[Math.floor(Math.random() * num_set4.length)];
				var search = numArr.indexOf(num_plus[j]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
				var search = num_set4.indexOf(num_plus[j]);
				if (search != -1) {
					num_set4.splice(search, 1);
				}
			}
			for (i = 0; i < num_set4.length; i++) {
				var search = numArr.indexOf(num_set4[i]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
			}
			lend_4 = numResult4.concat(num_plus);
		} else if (d == numResult4.length) {
			if (d != 0) {
				for (i = 0; i < num_set4.length; i++) {
					var search = numArr.indexOf(num_set4[i]);
					if (search != -1) {
						numArr.splice(search, 1);
					}
				}
			}

			lend_4 = numResult4;
		}

		if (e != numResult5.length) {
			var num_plus = new Array();
			var coCot = e - Number(numResult5.length);
			for (j = 0; j < coCot; j++) {
				num_plus[j] = num_set5[Math.floor(Math.random() * num_set5.length)];
				var search = numArr.indexOf(num_plus[j]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
				var search = num_set5.indexOf(num_plus[j]);
				if (search != -1) {
					num_set5.splice(search, 1);
				}
			}
			for (i = 0; i < num_set5.length; i++) {
				var search = numArr.indexOf(num_set5[i]);
				if (search != -1) {
					numArr.splice(search, 1);
				}
			}
			lend_5 = numResult5.concat(num_plus);
		} else if (e == numResult5.length) {
			if (e != 0) {
				for (i = 0; i < num_set5.length; i++) {
					var search = numArr.indexOf(num_set5[i]);
					if (search != -1) {
						numArr.splice(search, 1);
					}
				}
			}

			lend_5 = numResult5;
		}
		
		let lend_pp = [];
		var lend_to = lend_pp.concat(lend_1, lend_2, lend_3, lend_4, lend_5);
		
	}else{
		var lend_to = yellowArr;
	}
	
	console.log(lend_to);
	for (i = 0; i < lend_to.length; i++) {
		var search = numArr.indexOf(lend_to[i]);
		if (search != -1) {
			numArr.splice(search, 1);
		}
	}

	if (6 - Number(lend_to.length) != 0) {
		for (i = 0; i < 6 - Number(lend_to.length); i++) {
			let number = numArr[Math.floor(Math.random() * numArr.length)];

			if (arrayOfNumbers.indexOf(number) == -1) {
				arrayOfNumbers.push(number);
			}

			if (arrayOfNumbers[arrayOfNumbers.length - 1] == undefined) {
				alert('각 1개씩 포함하여 숫자가 5개만 나옵니다.');
			}
			var search = numArr.indexOf(number);
			if (search != -1) {
				numArr.splice(search, 1);
			}
		}
	}

	arrayOfNumbers = arrayOfNumbers.concat(lend_to);
	console.log('최종=' + arrayOfNumbers);

	arrayOfCombinations_2.push(
		arrayOfNumbers.sort(function (a, b) {
			return a - b;
		})
	);

	for (i = 0; i < arrayOfCombinations_2.length; i++) {
		duplication_2[i] = arrayOfCombinations_2[i];
	}

	arrayOfNumbers = [];
	display(2);
}

//--------------------------------------------------------

function display(num) {
	if (num == 1) {
		ranResult = [];
		let listElement = document.createElement('tr');

		wrapper.appendChild(listElement);
		var ranCount = 0;
		let lengthOfArray = arrayOfCombinations.length;
		for (let i = 0; i < lengthOfArray; i++) {
			ran = [];
			ranch = [];
			ranResult = [];
			ranCount++;
			for (j = 0; j < arrayOfCombinations[i].length; j++) {
				ran.push(arrayOfCombinations[i].slice(j, j + 1));
			}

			for (k = 0; k < ran.length; k++) {
				if (Number(ran[k]) - 50 >= -49 && Number(ran[k]) - 50 <= -40) {
					ranch.push("<span class='ball_645 lrg ball1'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -39 && Number(ran[k]) - 50 <= -30) {
					ranch.push("<span class='ball_645 lrg ball2'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -29 && Number(ran[k]) - 50 <= -20) {
					ranch.push("<span class='ball_645 lrg ball3'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -19 && Number(ran[k]) - 50 <= -10) {
					ranch.push("<span class='ball_645 lrg ball4'>" + ran[k] + '</span>');
				} else {
					ranch.push("<span class='ball_645 lrg ball5'>" + ran[k] + '</span>');
				}
			}

			listElement.innerHTML =
				'<td class="tdName popSel"><p id="chff"><input type="checkbox" id="chkStyle" name="chk_info" class="' +
				(ranCount - 1) +
				'" value=' +
				i +
				'>' +
				ranCount +
				'. 자 동</p></td><td class="tdResult popSel">' +
				ranch.join(' ') +
				'</td>';
		}

		// 		$('#lottoNum_2').html('<table class="tTable">' + ranResult.join('') + '</table>');
	} else if (num == 2) {
		let listElement = document.createElement('tr');

		wrapper_2.appendChild(listElement);
		var ranCount = 0;
		let lengthOfArray = arrayOfCombinations_2.length;
		for (let i = 0; i < lengthOfArray; i++) {
			ran = [];
			ranch = [];
			ranResult = [];
			ranCount++;
			for (j = 0; j < arrayOfCombinations_2[i].length; j++) {
				ran.push(arrayOfCombinations_2[i].slice(j, j + 1));
			}

			for (k = 0; k < ran.length; k++) {
				if (Number(ran[k]) - 50 >= -49 && Number(ran[k]) - 50 <= -40) {
					ranch.push("<span class='ball_645 lrg ball1'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -39 && Number(ran[k]) - 50 <= -30) {
					ranch.push("<span class='ball_645 lrg ball2'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -29 && Number(ran[k]) - 50 <= -20) {
					ranch.push("<span class='ball_645 lrg ball3'>" + ran[k] + '</span>');
				} else if (Number(ran[k]) - 50 >= -19 && Number(ran[k]) - 50 <= -10) {
					ranch.push("<span class='ball_645 lrg ball4'>" + ran[k] + '</span>');
				} else {
					ranch.push("<span class='ball_645 lrg ball5'>" + ran[k] + '</span>');
				}
			}

			listElement.innerHTML =
				'<td class="tdName popSel_2"><p id="chff_2"><input type="checkbox" id="chkStyle" name="chk_info_2" class="' +
				(ranCount - 1) +
				'_2" value=' +
				i +
				'>' +
				ranCount +
				'. 반자동</p></td><td class="tdResult popSel_2">' +
				ranch.join(' ') +
				'</td>';
		}
	} else if (num == 3) {
		arrayOfCombinations = [];
		// arrayOfCombinations_2 = [];
		arrayOfNumbers = [];
		duplication = [];
		// duplication_2 = [];
		dupliChange = [];
		// dupliChange_2 = [];
		$('.popSel').closest('tr').remove();
	} else if (num == 4) {
		// arrayOfCombinations = [];
		arrayOfCombinations_2 = [];
		// arrayOfNumbers = [];
		// duplication = [];
		duplication_2 = [];
		// dupliChange = [];
		dupliChange_2 = [];
		$('.popSel_2').closest('tr').remove();
	}
}

/* 삭제(체크박스된 것 전부) */
function fn_userDel(f_num) {
	var f_num = f_num;
	var userid = '';
	var memberChk = document.getElementsByName('chk_info');
	var memberChk_2 = document.getElementsByName('chk_info_2');

	var chked = false;
	var indexid = false;
	if (f_num == 1) {
		for (i = 0; i < memberChk.length; i++) {
			if (memberChk[i].checked) {
				if (indexid) {
					userid = userid + '-';
				}

				userid = userid + memberChk[i].value;

				indexid = true;
			}
		}
		var arr = new Array();
		arr = userid.split('-');

		if (!indexid) {
			alert('삭제할 번호를 체크해 주세요.');
			return;
		} else {
			for (i = 0; i < arr.length; i++) {
				ret = '.' + arr[i];

				$(ret).closest('tr').remove();
				dupliChange.push(arrayOfCombinations[arr[i]]);
				ret = '';
			}
		}
	} else if (f_num == 2) {
		for (i = 0; i < memberChk_2.length; i++) {
			if (memberChk_2[i].checked) {
				if (indexid) {
					userid = userid + '-';
				}

				userid = userid + memberChk_2[i].value;

				indexid = true;
			}
		}
		var arr = new Array();
		arr = userid.split('-');

		if (!indexid) {
			alert('삭제할 번호를 체크해 주세요.');
			return;
		} else {
			for (i = 0; i < arr.length; i++) {
				ret = '.' + arr[i] + '_2';

				$(ret).closest('tr').remove();
				dupliChange_2.push(arrayOfCombinations_2[arr[i]]);
				ret = '';
			}
		}
	}
}

function copyToClipboardRandom(val) {
	var t = document.createElement('textarea');

	document.body.appendChild(t);
	t.value = val;
	t.select();
	document.execCommand('copy');
	document.body.removeChild(t);
}
$('#btnCopy').click(function () {
	if (dupliChange.length != 0 || arrayOfCombinations.length != 0) {
		for (i = 0; i < dupliChange.length; i++) {
			var search = arrayOfCombinations.indexOf(dupliChange[i]);
			if (search != -1) {
				arrayOfCombinations.splice(search, 1);
			}
		}

		if (arrayOfCombinations.length == 0) {
			alert('복사할 내용이 없습니다.');
		} else {
			copyToClipboardRandom(' * 로또생성번호 * \n' + arrayOfCombinations.join('\n'));
			alert('복사가 완료되었습니다.');
		}
	} else {
		alert('복사할 내용이 없습니다.');
	}

	for (j = 0; j < duplication.length; j++) {
		arrayOfCombinations[j] = duplication[j];
	}
});
$('#btnCopy_2').click(function () {
	if (dupliChange_2.length != 0 || arrayOfCombinations_2.length != 0) {
		for (i = 0; i < dupliChange_2.length; i++) {
			var search = arrayOfCombinations_2.indexOf(dupliChange_2[i]);
			if (search != -1) {
				arrayOfCombinations_2.splice(search, 1);
			}
		}

		if (arrayOfCombinations_2.length == 0) {
			alert('복사할 내용이 없습니다.');
		} else {
			copyToClipboardRandom(' * 로또생성번호 * \n' + arrayOfCombinations_2.join('\n'));
			alert('복사가 완료되었습니다.');
		}
	} else {
		alert('복사할 내용이 없습니다.');
	}

	for (j = 0; j < duplication_2.length; j++) {
		arrayOfCombinations_2[j] = duplication_2[j];
	}
});

//반자동 초기화

function reSet_sel() {
	document.getElementById('btnCot_0').value = 0;
	document.getElementById('btnCot_1').value = 0;
	document.getElementById('btnCot_2').value = 0;
	document.getElementById('btnCot_3').value = 0;
	document.getElementById('btnCot_4').value = 0;

	document.getElementById('btnCot_0_0').value = 0;
	document.getElementById('btnCot_1_1').value = 0;
	document.getElementById('btnCot_2_2').value = 0;
	document.getElementById('btnCot_3_3').value = 0;
	document.getElementById('btnCot_4_4').value = 0;

	for (i = 1; i <= 45; i++) {
		const ClickNum = document.querySelector('#ClickNum' + i);
		const hasClass = ClickNum.classList.contains('clickNumOne');
		const hasClass_1 = ClickNum.classList.contains('clickNumTwo');
		const hasClass_2 = ClickNum.classList.contains('clickNumThree');
		if (!hasClass && hasClass_1 == true) {
			ClickNum.classList.remove('clickNumTwo');
			ClickNum.classList.add('clickNumOne');
		} else if (!hasClass && hasClass_2 == true) {
			ClickNum.classList.remove('clickNumThree');
			ClickNum.classList.add('clickNumOne');
		}

		redArr = [];
		yellowArr = [];
		redCount = 0;
		yellowCount = 0;
	}
}

//-----------------------------------------------------------------------------------