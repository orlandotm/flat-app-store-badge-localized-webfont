/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Flat-App-Store-Badge-Localized-Webfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'aapl-zh_Hant': '&#xe600;',
		'aapl-zh_Hans': '&#xe601;',
		'aapl-ja': '&#xe602;',
		'aapl-ko': '&#xe603;',
		'aapl-thai': '&#xe604;',
		'aapl-he': '&#xe605;',
		'aapl-bg': '&#xe606;',
		'aapl-el': '&#xe607;',
		'aapl-tr': '&#xe608;',
		'aapl-vi': '&#xe609;',
		'aapl-fil': '&#xe60a;',
		'aapl-sv': '&#xe60b;',
		'aapl-fi': '&#xe60c;',
		'aapl-sl': '&#xe60d;',
		'aapl-sk': '&#xe60e;',
		'aapl-ro': '&#xe60f;',
		'aapl-ru': '&#xe610;',
		'aapl-pt_BR': '&#xe611;',
		'aapl-pt': '&#xe612;',
		'aapl-pl': '&#xe613;',
		'aapl-nn': '&#xe614;',
		'aapl-nl': '&#xe615;',
		'aapl-mt': '&#xe616;',
		'aapl-hu': '&#xe617;',
		'aapl-lt': '&#xe618;',
		'aapl-lv': '&#xe619;',
		'aapl-it': '&#xe61a;',
		'aapl-fr_FR': '&#xe61b;',
		'aapl-es_419': '&#xe61c;',
		'aapl-es_ES': '&#xe61d;',
		'aapl-en': '&#xe61e;',
		'aapl-et': '&#xe61f;',
		'aapl-de': '&#xe620;',
		'aapl-da': '&#xe621;',
		'aapl-cs': '&#xe622;',
		'aapl-ms': '&#xe623;',
		'aapl-id': '&#xe624;',
		'aapl-ar': '&#xe625;',
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
		c = c.match(/aapl-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
