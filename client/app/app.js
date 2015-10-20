'use strict';

import angular from 'angular';
import {Feature1} from './feature1/module';

export class App {
    constructor() {
        var feature1Inst = new Feature1();
        angular.module('myApp', [feature1Inst.name]);
    }

    name = 'myApp'
}