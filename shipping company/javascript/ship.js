$(function() {
    $('#buttonClick').click(function(){
        var newDiv = $('<div class="row justify-content-center"><div class="col-md-6 justify-content-center mb-5"><div class="form-group"><label for="">Item Name</label><input class="form-control" type="text" name="itemName" value=""><label for="">Brief Name (Optional)</label><input class="form-control" type="text" name="itemDescription" value=""></div></div><div class="col-md-6 justify-content-center mb-5"><div class="form-group"><label for="">Item Weight (KG)</label><input class="form-control" type="text" name="itemWeight" value=""><label for="">Quantaty</label><input class="form-control" type="text" name="itemQuantaty" value=""></div></div></div>');

       $('#moreItem').append(newDiv);
    });
});
