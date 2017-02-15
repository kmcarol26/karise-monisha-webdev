
/**
 * Created by Monisha on 2/15/2017.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController",WidgetEditController)

    function WidgetEditController($sce,$routeParams,$location,WidgetService) {

        var vm=this;
        vm.userId=$routeParams.uid;
        vm.pageId=$routeParams.pid;
        vm.widgetId=$routeParams.wgid;
        vm.websiteId=$routeParams.wid;

        vm.widgets  =WidgetService.findWidgetsByPageId(vm.pageId);

        vm.doYouTrustUrl=doYouTrustUrl;
        vm.updateWidget=updateWidget;
        vm.deleteWidget=deleteWidget;
        function init(){
            vm.widget=WidgetService.findWidgetById(vm.widgetId);

        }init();

        function doYouTrustUrl(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }

        function updateWidget(widget){

            WidgetService.updateWidget(vm.widgetId,widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
        }
        function deleteWidget(){

            WidgetService.deleteWidget(vm.widgetId);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
        }



    }


})();


