// Msg Directive
// 
/// <reference path="../angular.d.ts" />

module Application.Directives {

	export class MsgDirective {

		constructor() {

			var ret = this.factory();
			console.log('hello from Msg directive');
			console.log(ret);

			return ret;
		}
 
		factory(): any {

			return {
				//template: '<h2>{{ bobname }}</h2>',
				templateUrl: 'templates/msg-template.html',
				restrict: 'EA',
				scope: {
					sysMsg: '='
				}
			};

		}

	}

}