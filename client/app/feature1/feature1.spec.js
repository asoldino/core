/**
 * Created by x084676 on 10/19/2015.
 */

describe('Simple spec', function () {
    beforeEach(function () {
        module('myApp');
    });

    var $rootScope,
        $controller,
        $compile;

    beforeEach(inject(function (_$rootScope_, _$controller_, _$compile_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $compile = _$compile_;
    }));

    it('should create feature1 controller correctly', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('feature1Ctrl', {
            $scope: $scope
        });

        expect(controller.testVal).toBe('world');
    });

    it('should create feature1 correctly', function() {
        var element = $compile('<feature1></feature1>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('<div class="ng-binding">Hello world!</div>');
    });
});