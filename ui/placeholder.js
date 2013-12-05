define(function(require, exports, module) {
	/**
	*	模拟placeholder
	*
	**/
	var widget = avalon.ui['placeholder'] = function(element, data, vmodels) {
		var $element = $(element),
			option = data.placeholderOptions;			
		
		$element.attr({'ms-click': 'blurInput', 'ms-visible': option.name + '===\'\''});

		var model = avalon.define(data.placeholderId, function(vm) {

			//模拟placeholder
			vm.blurInput = function() {				
				$(this).prev().focus();
			};

			avalon.mix(vm, data.placeholderOptions);
		});

		avalon.nextTick(function() {						
			avalon.scan(element, [model].concat(vmodels));
		});		

		return model;
	};	

	return widget;
});