describe('rugelach', function(){
    var rugelach;

    beforeEach(angular.mock.module('rugelach'));

    beforeEach(inject(function(_rugelach_){
        rugelach = _rugelach_;
    }));

    it("should exist", function(){
        expect(rugelach).toBeDefined();
    });

    it("should insert a key/value and return that value", function(){
        var key = "keyyyyy";
        var value = "valllll";

        rugelach.setCookie(key, value);

        expect(rugelach.getCookie(key)).toEqual(value);
    });
});