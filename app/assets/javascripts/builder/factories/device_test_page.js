builderApp.factory('DeviceTestPage',function($http){
    var DeviceTestPage = function(parentController){
        //TODO null checks
        var self = this;
        this.parentController = parentController;
        
    }
    DeviceTestPage.prototype.reload = function() {
      var self = this;
      //alert('Loading Test Page');
      var iframe = $('<iframe>',{
        id:"device_test_iframe",
        style:"border:none;", 
        width:"100%", 
        height:"100%",
        src:'/iframetest.html'
       }).appendTo('#device_iframe_holder').load(function(){
        console.log(self.parentController.getUpdatedAppHtml());
        var custom_js = renderTemplate('custom_js_template',{});
        var body = renderTemplate('device_test_iframe_template',{});

        $(iframe).contents().find('body').html(self.parentController.getUpdatedAppHtml());
        $(iframe).contents().find('head').append(custom_js);
        //mainJquery = document.getElementById('device_test_iframe').contentWindow.jQuery; 
        //mainJquery(document.getElementById('device_test_iframe').contentWindow.document).trigger('load');
        //alert(document.getElementById("device_test_iframe"));
        document.getElementById("device_test_iframe").contentWindow.reset();

      });
       
     };
     DeviceTestPage.prototype.destroy = function() {
       $('#device_test_iframe').remove();
     };

    return DeviceTestPage;
});
