/**
 * 计算两个数的和、差
 */
; (function($){
	$.extend({
		"addNum":function(p1,p2){
			p1=(p1==undefined)?0:p1;
			p2=(p2==undefined)?0:p2;
			var intResult=parseInt(p1)+parseInt(p2);
			return intResult;
		},
		"subNum":function(p1,p2){
			var intResult=0;
			p1=(p1==undefined)?0:p1;
			p2=(p2==undefined)?0:p2;
			if (p1>p2) {
				intResult=parseInt(p1)-parseInt(p2);
			}
			return intResult;
		}
	});
})(jQuery);