'use strict';

angular.module('datePicker').directive('datePickerCalendar', ['displayConfig', 'datePickerUtils', function(displayConfig, datePickerUtils){
  function setDisplayConfig(scope){
    if(scope.viewConfig){
      return;
    }

    if(scope.calendarView === 'month'){
      scope.viewConfig = displayConfig.month;
    } else if(scope.calendarView === 'year'){
      scope.viewConfig = displayConfig.year;
    }
  }

  return {
    restrict : 'EA',
    templateUrl: 'templates/calendar/calendar-container.html',
    controller : function($scope){
      var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];
      //default
      $scope.calendarView = 'month';

      $scope.getDaysOfWeek = function(row){
        return datePickerUtils.getDaysOfWeek(row);
      };
      $scope.getMonthName = function(monthIndex){
        return monthNames[monthIndex -1];
      };
    },
    link : function(scope) {
      setDisplayConfig(scope);
      scope.baseDate = new Date();
      scope.rows = datePickerUtils.getVisibleWeeks(scope.baseDate);
    }
  };
}]);