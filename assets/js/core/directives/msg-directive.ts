// Msg Directive
// 
/// <reference path="../angular.d.ts" />

module Application.Directives {

	export class MsgDirective {

		constructor() {

			console.log('hello from Msg directive');

			return this.factory();
		}
 
		factory(): any {

			return {
				//template: '<h2>{{ bobname }}</h2>',
				templateUrl: 'templates/msg-template.html',
				restrict: 'EA',
				scope: {
					msg: '='
				}
			}

		}

	}

}