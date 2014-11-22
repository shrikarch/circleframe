module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/base.css' : 'sass/style.scss'
				}
			}
		},
		concat: {
			/*js: {
				src: 'js/*.js',
				dest: 'js/main.min.js'
			},*/
			css: {
				src: ['css/base.css'],
				dest: 'css/style.css'
			}
		},
		cssmin: {
			dist: {
				files: {'css/style.min.css':'css/style.css'}
			}
		}, 
		uglify: {
			dist: {
				src: 'js/main.min.js',
				dest: 'js/main.min.js'
			}
		},
		watch: {
			dist: {
				files: ['sass/*.scss','js/main.js','js/base.js'],
				tasks: ['sass','concat','cssmin']
			},
			grunt: {
				files: ['Gruntfile.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
};