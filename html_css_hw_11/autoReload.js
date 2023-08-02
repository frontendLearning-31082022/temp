  var userAgent = navigator.userAgent;
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        if(!isOpera){
          let frame=document.createElement('meta');
          frame.setAttribute("http-equiv", 'refresh');
          frame.setAttribute("content", '3');
           document.head.appendChild(frame);
        }