
module.exports = function(grunt) {
  grunt.config.set('bower', {
    // Copy all needed files by types
    dev: {
      /* eslint-disable camelcase */
      dest: 'source/assets/images',
      js_dest: 'source/assets/js',
      css_dest: 'source/assets/css',
      fonts_dest: 'source/assets/fonts',
      /* eslint-enable camelcase */
      options: {
        expand: false,
        keepExpandedHierarchy: false,
        packageSpecific: {
          fontawesome: {
            files: [
              'css/font-awesome.css',
              'fonts/FontAwesome.otf',
              'fonts/fontawesome-webfont.eot',
              'fonts/fontawesome-webfont.svg',
              'fonts/fontawesome-webfont.ttf',
              'fonts/fontawesome-webfont.woff',
              'fonts/fontawesome-webfont.woff2'
            ]
          },
          fancybox: {
            files: [
              'dist/jquery.fancybox.js',
              'dist/jquery.fancybox.css'
            ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');
};
