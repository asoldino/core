/**
 * Created by x084676 on 10/16/2015.
 */

import angular from 'angular';
import {Directive} from './directive'
import {Feature1Controller} from './controller'

export class Feature1 {
    constructor() {
        angular.module('feature1', ['templates'])
            .controller('feature1Ctrl', Feature1Controller)
            .directive('feature1', () => {
                return new Directive();
            });
    }

    name = "feature1"
}

export var name = 'feature1';
