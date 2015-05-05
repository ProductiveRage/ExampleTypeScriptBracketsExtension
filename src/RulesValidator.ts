var CodeInspection = brackets.getModule("language/CodeInspection");

export function getAnyErrorsInLessStyleSheet(content: string) {
    // TODO: Some real sort of analysis would go here, this is just an example!
    return [{
        pos: { line: 4, ch: 0 },
        message: "Error on line 5 in file: This is just an example!",
        type: CodeInspection.Type.ERROR
    }];
}