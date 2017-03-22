(function () {
    angular
        .module("wamDirectives", [])
        .directive("wamSortable", wamSortable);

    function wamSortable() {
        console.log("in directives");
        var start = -1;
        var end = -1;
        function linker(scope, element, attributes) {
            $(".container-fluid")
                .sortable({
                    axis: 'y',
                    start: function (event, ui) {
                        start = ui.item.index();
                        console.log(start);
                    },
                    stop: function(event, ui){
                        end = ui.item.index();
                        console.log(end);
                        scope.wamCallback({
                            start: start,
                            end: end

                        });
                    }
                });
        }
        return{
            scope: {
                wamCallback: '&'
            },
            link: linker
        }

    }

})();