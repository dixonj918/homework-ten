function initListeners(){
    $("a").click(function(e){
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

 
    MODEL.updateView(contentID)
        // $(".app").html(eval(contentID));
        // console.log(aID);
    });
    }
    
    
    $(document).ready(function(){
        initListeners();
        MODEL.updateView("homeContent");
    });