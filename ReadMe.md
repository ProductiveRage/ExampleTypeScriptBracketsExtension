# Example structure for an Adobe Brackets extension, written in TypeScript, developed in Brackets

This demonstrates how you can develop an extension for Brackets in TypeScript, within Brackets. If you clone this repository and run Grunt from the command line where it's checked out then it will build it in its current state and wait for changes to be made to files in the "src" folder.

To make these changes, install the Brackets extension [Brackets TypeScript](https://github.com/fdecampredon/brackets-typescript) from the Brackets Extension Manager and then open the "src" folder in Brackets. Don't try to open the TypeScript files before opening the containing "src" folder first, the extension doesn't like it!

The built files will appear in the "build" folder. This folder may be deployed as a Bracket extension. If you do so, then change the details in the package.json file in the root folder! (This gets copied into in the build folder).

Note that future versions of the Brackets TypeScript extension may natively handle compile-on-save, but as of May 2015 the additional [grunt-ts](https://github.com/TypeStrong/grunt-ts) work configured in the included gruntfile.js is required.