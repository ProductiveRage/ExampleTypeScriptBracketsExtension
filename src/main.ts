import RulesValidator = require("RulesValidator");

var AppInit = brackets.getModule("utils/AppInit"),
    CodeInspection = brackets.getModule("language/CodeInspection");

AppInit.appReady(() => {
    CodeInspection.register(
        "less",
        {
            name: "Example StyleSheet Validator",
            scanFile: (text: string, fullPath: string) => {
                return { errors: RulesValidator.getAnyErrorsInLessStyleSheet(text) };
            }
        }
    );
});