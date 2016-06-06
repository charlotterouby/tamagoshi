// Msg Directive
// 
/// <reference path="../angular.d.ts"/>

module Application.Directives {
	export class msgDirective {
		constructor() {

			console.log("msgDirective");
			return this.instanceDirective();
		}

		instanceDirective(): any {
			return {
				templateUrl: 'templates/msg-template.html',
				restrict: 'EA',
				scope: {
					msgText: "=",
					msgType: "="
				}
			};
		}
	}
}