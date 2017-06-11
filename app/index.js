import jquery from 'jquery';
import UIkit from 'uikit';
import Icons from 'react-uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Hello world.');