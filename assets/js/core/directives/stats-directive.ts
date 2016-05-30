// Stats Directive
// 
/// <reference path="../angular.d.ts"/>

module Application.Directives {
	export class statsDirective {
		constructor() {

			console.log("statsDirective");
			return this.instanceDirective();
		}

		instanceDirective(): any {
			return {
				templateUrl: 'templates/stats-template.html',
				restrict: 'EA' ,
				scope: {
					player: "="
				}
			};
		}
	}
}