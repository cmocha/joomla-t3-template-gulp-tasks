var gulp = require('gulp');

// PLUGINS
var browserSync = require('browser-sync');



// BROWSER SYNC TASK
// gulp browserSync
// Either proxy setting worked for the Joomla-Tools Vagrant Box
// Note I added these lines below in the Vagrantfile to expose the ports for Browsersync
// config.vm.network "forwarded_port", guest: 3000, host: 3000
// config.vm.network "forwarded_port", guest: 3001, host: 3001
//  
// Enable public network 
// config.vm.network "public_network"
// 
// run ifconfig inside vagrant box to see the appropriate address available to connect via the network from external device. 
gulp.task('browserSync', function() {
  browserSync({

          //proxy: "joomla.box/mysite/"
          proxy: "33.33.33.58:80"
          // View browser sync at - http://33.33.33.58:3000/mysite/
          // View browsersync control at http://localhost:3001/
  });
});



// WATCH TASK
// gulp watch
// This task starts browsersync and watches our files. 
gulp.task('watch', ['browserSync'], function(){
  var watchLess = gulp.watch(['./less/*.less', './less/**/*.less'], browserSync.reload);
  watchLess.on('change', function (event) {
    console.log('Event type: ' + event.type); // added, changed, or deleted
    console.log('Event path: ' + event.path); // The path of the modified file
  });
  gulp.watch(['*.php', './html/**/*.php'] , browserSync.reload);
  gulp.watch('./js/**/*.js', browserSync.reload);
});

