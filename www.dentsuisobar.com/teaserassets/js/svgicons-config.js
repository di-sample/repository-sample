var svgIconConfig = {
	
	hamburgerCross : {
		url : 'teaserassets/svg/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "M12.5,19.4h25"}' }, 
					to : { val : '{"path" : "M16.2,33.8l17.7-17.7"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "M12.5,30.6h25"}' }, 
					to : { val : '{"path" : "M16.2,16.2l17.7,17.7"}' }
				} 
			}
		]
	},
	
};
