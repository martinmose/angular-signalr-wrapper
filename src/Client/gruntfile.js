module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowerInstall: {
          target: {
            src: [
              'index.html'
            ],

            // Optional:
            cwd: '',
            dependencies: true,
            devDependencies: true,
            exclude: [],
            fileTypes: {},
            ignorePath: '',
            overrides: {}
          }
        }
    });

    grunt.loadNpmTasks('grunt-bower-install');
};