/**
 * Created by Monisha on 3/1/2017.
 */
(function () {
    angular
        .module('wbdvDirectives',[])
        .directive('wbdvSortable', sortableDir );

    function sortableDir() {
        function linkFunc(scope, element, attributes) {

            element.sortable({axis: 'y'});
        }
        return {
            link: linkFunc
        };
    }


})();
