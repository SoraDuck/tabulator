Tabulator.plugins.format = {

	//default data formatters
	formatters:{
		plaintext:function(value, data, cell, row, options, formatterParams){ //plain text value
			return value;
		},
		textarea:function(value, data, cell, row, options, formatterParams){ //multiline text area
			cell.css({"white-space":"pre-wrap"});
			return value;
		},
		money:function(value, data, cell, row, options, formatterParams){

			var floatVal = parseFloat(value);

			if(isNaN(floatVal)){
				return value;
			}

			var number = floatVal.toFixed(2);

			var number = number.split(".");

			var integer = number[0];
			var decimal = number.length > 1 ? "." + number[1] : "";

			var rgx = /(\d+)(\d{3})/;

			while (rgx.test(integer)){
				integer = integer.replace(rgx, "$1" + "," + "$2");
			}

			return integer + decimal;
		},
		email:function(value, data, cell, row, options, formatterParams){
			return "<a href='mailto:" + value + "'>" + value + "</a>";
		},
		link:function(value, data, cell, row, options, formatterParams){
			return "<a href='" + value + "'>" + value + "</a>";
		},
		tick:function(value, data, cell, row, options, formatterParams){
			var tick = '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';

			if(value === true || value === "true" || value === "True" || value === 1){
				cell.attr("aria-checked", true);
				return tick;
			}else{
				cell.attr("aria-checked", false);
				return "";
			}
		},
		tickCross:function(value, data, cell, row, options, formatterParams){
			var tick = '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
			var cross = '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';

			if(value === true || value === "true" || value === "True" || value === 1){
				cell.attr("aria-checked", true);
				return tick;
			}else{
				cell.attr("aria-checked", false);
				return cross;
			}
		},
		star:function(value, data, cell, row, options, formatterParams){
			var maxStars = formatterParams && formatterParams.stars ? formatterParams.stars : 5;
			var stars=$("<span style='vertical-align:middle;'></span>");

			value = parseInt(value) < maxStars ? parseInt(value) : maxStars;

			var starActive = $('<svg width="14" height="14" viewBox="0 0 512 512" xml:space="preserve" style="margin:0 1px;"><polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>');
			var starInactive = $('<svg width="14" height="14" viewBox="0 0 512 512" xml:space="preserve" style="margin:0 1px;"><polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>');

			for(var i=1;i<= maxStars;i++){

				var nextStar = i <= value ? starActive : starInactive;

				stars.append(nextStar.clone());
			}

			cell.css({
				"white-space": "nowrap",
				"overflow": "hidden",
				"text-overflow": "ellipsis",
			});

			cell.attr("aria-label", value);

			return stars.html();
		},
		progress:function(value, data, cell, row, options, formatterParams){ //progress bar
			//set default parameters
			var max = formatterParams && formatterParams.max ? formatterParams.max : 100;
			var min = formatterParams && formatterParams.min ? formatterParams.min : 0;

			var color = formatterParams && formatterParams.color ? formatterParams.color : "#2DC214";

			//make sure value is in range
			value = parseFloat(value) <= max ? parseFloat(value) : max;
			value = parseFloat(value) >= min ? parseFloat(value) : min;

			//workout percentage
			var percent = (max - min) / 100;
			value = 100 - Math.round((value - min) / percent);

			cell.css({
				"min-width":"30px",
				"position":"relative",
			});

			cell.attr("aria-label", value);

			return "<div style='position:absolute; top:8px; bottom:8px; left:4px; right:" + value + "%; margin-right:4px; background-color:" + color + "; display:inline-block;' data-max='" + max + "' data-min='" + min + "'></div>";
		},
		color:function(value, data, cell, row, options, formatterParams){
			cell.css({"background-color":value});
			return "";
		},
		buttonTick:function(value, data, cell, row, options, formatterParams){
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
		},
		buttonCross:function(value, data, cell, row, options, formatterParams){
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
		},
		rownum:function(value, data, cell, row, options, formatterParams){
			var self = this;

			var rownum = $(".tabulator-row", self.table).length + 1;

			if(self.options.pagination){
				rownum = (self.options.paginationSize * (self.paginationCurrentPage-1)) + rownum;
			}

			return rownum;
		}
	},
}