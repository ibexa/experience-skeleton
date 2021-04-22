/*
    Document        : storm.socialshare.actions
    Author          : mkr
    Dependencies    : jquery.socialshareprivacy plugin
    Description:
        Actions for storm responsive navigation plugin.
*/

jQuery(document).ready(function($){
    if($('.socialshareprivacy').length > 0){
        var self = $('.socialshareprivacy');
        self.socialSharePrivacy({
            info_link   : self.data('info-link'),
            perma_type  : self.data('perma-type'),
            services: {
                facebook: {
                    status: self.data('facebook-status'),
                    share: self.data('facebook-share')
                },
                twitter: {
                    status: self.data('twitter-status')
                },
                pinterest: {
                    status: self.data('pinterest-status')
                }
            }
        });
    }
});
var storePath = [];

function include(path){
    if(!storePath[path]){
        storePath[path]= true;
        var e = document.createElement("script");
        e.src = path;
        e.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(e);
        return false;
    }
}
