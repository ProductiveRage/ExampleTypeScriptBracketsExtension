/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        ts: {
            "default": {
                src: ["src/**/*.d.ts", "src/**/*.ts"]
            },
            options: {
                module: "amd",
                target: "es5",
                sourceMap: true,
                noImplicitAny: true,
                
                // Without this, when watch is set to ".", it seems like ".d.ts" declaration files are not
                // respected after the first compile (in this case, that means that "Cannot find name 'brackets'"
                // errors will prevent the compilation process from completing successfully)
                fast: "never"
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: "src/", src: ["**.js"], dest: "build/" },
                    { src: ["package.json"], dest: "build/" }
                ]
            }
        },
        watch: {
            scripts: {
                files: ["src/**/*.d.ts", "src/**/*.ts"],
                tasks: ["ts", "copy"],
                options: {
                    spawn: false
                }
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-ts");
    
    grunt.registerTask("default", ["ts", "copy", "watch"]);
};