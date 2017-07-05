/**
* 功能：消费数据（原生JS版）
**/

/*************************************************/
/* 全局对象声明部分 */
/*************************************************/
var expensData = {
	food: [],
	shopping: [],
	aodu: [],
	traffic: [],
	entertainment: [],
	socialContact: [],
	financial: [],
	medical: [],
	other: []
}

/*************************************************/
/* 页面文档加载完成后触发 */
/*************************************************/
document.addEventListener("DOMContentLoaded", function() {
	// 添加数据按钮
	var creatData = document.getElementById("creatData");
	creatData.onclick = function() {
		// 调用函数“设置消费数据”
		setExpensData();
		// 清空输入框
		var numInput = document.getElementsByClassName("data-create-group")[0].getElementsByTagName("input"),
			numInput_leng = numInput.length;
		for(var i = 0; i < numInput_leng; i++) {
			numInput[i].value = "";
		}
	}
	// 自动添加数据（测试用）
	autoCreateData();
});

/*************************************************/
/* 函数定义部分 */
/*************************************************/
/**
* 功能：设置消费数据
**/
function setExpensData() {
	// 获取文本框的个数
	var input = document.getElementsByClassName("data-create-group")[0].getElementsByTagName("input"),
		input_leng = input.length;
	// 创建一个新的<tr>
	var tbody = document.getElementsByTagName("tbody")[0];
	tbody.innerHTML += '<tr></tr>'
	// 获取tr的个数
	var tr = tbody.getElementsByTagName("tr"),
		tr_leng = tr.length;
	// 定义一个计数器
	var count = 0;
	// 遍历对象
	for(var x in expensData) {
		// 取得当前文本框的值
		var currentInputVal = input[count].value;
		if(currentInputVal == "") {
			currentInputVal = 0;
		}
		// 为对象的每个属性的数组添加当前的文本框值
		expensData[x].push(Number(currentInputVal));
		tr[tr_leng-1].innerHTML += '<td>￥' + expensData[x][tr_leng-1].toFixed(2) + '</td>';
		count++;
	}
	// 总值
	var sum = 0;
	// 计算出总消费
	for(var y in expensData) {
		var lineSum = expensData[y].reduce(function(e1,e2) {
			return Number(e1) + Number(e2);
		});
		sum += lineSum;
	}
	// 计算平均每日消费
	var avgExpense = sum / tr_leng;
	
	// 获取平均值和总值的td
	var avgExpenseTd = document.getElementsByClassName("avgExpense")[0];
	var sumExpenseTd = document.getElementsByClassName("sumExpense")[0];
	// 设置平均值
	avgExpenseTd.innerHTML = "￥" + avgExpense.toFixed(2);
	sumExpenseTd.innerHTML = "￥" + sum.toFixed(2);
}

/**
 * 功能：自动添加数据（测试用）
 **/
function autoCreateData() {
	autoCreate.onclick = function() {
		var numInput = document.getElementsByClassName("data-create-group")[0].getElementsByTagName("input"),
			numInput_leng = numInput.length;
		for(var i = 0; i < numInput_leng; i++) {
			numInput[i].value = Math.round(Math.random() * 10000) / 10;
		}
	}
}



