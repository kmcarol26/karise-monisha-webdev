/**
 * Created by Monisha on 2/15/2017.
 */


(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController)

    function WidgetChooserController($sce, $routeParams, $location, WidgetService) {

        var vm = this;

        vm.doYouTrustUrl = doYouTrustUrl;
        vm.createWidget = createWidget;


        vm.userId = $routeParams.uid;
        vm.pageId = $routeParams.pid;
        // vm.widgetId=$routeParams.wgid;
        vm.websiteId = $routeParams.wid;

        function init() {
            WidgetService
                .findAllWidgetsForPage(vm.pageId)
                .success(function(widgets){
                    vm.widgets=widgets;

        } )}init();
        function createWidget(widgetType){
            var newWidget = {};
            newWidget._id = (new Date()).getTime();
            newWidget.widgetType = widgetType;

            var website=WidgetService
                                 .createWidget(newWidget,vm.pageId)
                                 .success(function(widget){
                                     vm.widget=widget;

                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widget._id);

                                            });
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);





        }
        function doYouTrustUrl(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
        /*

        function setHeaderWidgetType() {

            var pageId = vm.pageId;
            vm.widget = WidgetService.setHeaderWidgetType();
            vm.widgetId = vm.widget._id;

            WidgetService.createWidget(pageId, vm.widget);


            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widgetId);
        }

        function setImageWidgetType() {

            var pageId = vm.pageId;
            vm.widget = WidgetService.setImageWidgetType();
            vm.widgetId = vm.widget._id;

            WidgetService.createWidget(pageId, vm.widget);


            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widgetId);
        }

        function setYouTubeWidgetType() {

            var pageId = vm.pageId;
            vm.widget = WidgetService.setYouTubeWidgetType();
            vm.widgetId = vm.widget._id;

            WidgetService.createWidget(pageId, vm.widget);


            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widgetId);
        }
*/
    }


})();



