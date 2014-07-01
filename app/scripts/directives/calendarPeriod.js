'use strict';

angular.module('datePicker').directive('calendarPeriod', [function(){
  return {
    restrict : 'EA',
    templateUrl: 'templates/calendar/calendar-period.html',
    scope : {
      date : '='
    },
    link : function(scope) {
      scope.day = scope.date.getDate();
    }
  };
}]);