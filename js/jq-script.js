/**
* 功能：消费数据（jQuery版）
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
$(function() {
	$("#creatData").click(function() {
		// 调用函数“设置消费数据”
		setExpensData();
		$(".data-create-group input").val("")
	});
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
	var input  = $(".data-create-group input"),
		input_leng = input.length;
	// 创建一个新的<tr>
	var tbody = $("#expenseData tbody");
	tbody.append("<tr></tr>");
	// 获取tr的个数
	var tr = tbody.children("tr"),
		tr_leng = tr.length;
	// 定义一个计数器
	var count = 0;
	// 遍历对象
	for(var x in expensData) {
		// 取得当前文本框的值
		var currentInputVal = input.eq(count).val();
		if(currentInputVal == "") {
			currentInputVal = 0;
		}
		// 为对象的每个属性的数组添加当前的文本框值
		expensData[x].push(Number(currentInputVal));
		tr.eq(tr_leng - 1).append('<td>￥' + expensData[x][tr_leng-1].toFixed(2) + '</td>');
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
	// 设置平均值
	$(".avgExpense").html("￥" + avgExpense.toFixed(2));
	$(".sumExpense").html("￥" + sum.toFixed(2));
}

/**
 * 功能：自动添加数据（测试用）
 **/
function autoCreateData() {
	$("#autoCreate").click(function() {
		$(".data-create-group input").each(function(idx, ele) {
			$(ele).val(Math.round(Math.random() * 10000) / 10);
		});
	});
}











