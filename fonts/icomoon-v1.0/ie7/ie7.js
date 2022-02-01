/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-btn': '&#xe900;',
		'icon-arrow-top': '&#xe901;',
		'icon-CardList': '&#xe902;',
		'icon-CashCoin': '&#xe903;',
		'icon-Chat': '&#xe904;',
		'icon-ChatText': '&#xe905;',
		'icon-CheckCircle': '&#xe906;',
		'icon-ClipboardCheck': '&#xe907;',
		'icon-Coin': '&#xe908;',
		'icon-DiamondHalf': '&#xe909;',
		'icon-email': '&#xe90a;',
		'icon-Eye': '&#xe90b;',
		'icon-GraphUp': '&#xe90c;',
		'icon-HandThumbsUp': '&#xe90d;',
		'icon-hours': '&#xe90e;',
		'icon-instagram': '&#xe90f;',
		'icon-location': '&#xe910;',
		'icon-Magic': '&#xe912;',
		'icon-pencil': '&#xe913;',
		'icon-People': '&#xe914;',
		'icon-phone': '&#xe915;',
		'icon-vector': '&#xe916;',
		'icon-vk_alt': '&#xe917;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
