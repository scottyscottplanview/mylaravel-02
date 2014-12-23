module.exports = function (grunt) {
	//grunt.loadNpmTasks('grunt-contrib-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				style: 'nested',
				sourcemap: 'auto',
				unixNewlines: true,
				loadPath: 'public/bower_components'
			},
			dev: {
				files: [{
					expand: true,
					cwd: 'public/scss',
					src: ['*.scss'],
					dest: 'public/css',
					ext: '.build.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['public/scss/**/*.scss'],
				tasks: ['sass:dev']
			},
			css: {
				files: ['public/css/{,*/}*.css'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['sass:dev','watch']);
}