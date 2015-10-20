/**
 * Created by x084676 on 10/14/2015.
 */

import {App} from './app'
import angular from 'angular'

var appInst = new App();

angular.element(document).ready(() => angular.bootstrap(document, [appInst.name]));
