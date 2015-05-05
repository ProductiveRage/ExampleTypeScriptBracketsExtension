declare module brackets {
    function getModule(name: "utils/AppInit"): AppInit;
    function getModule(name: "language/CodeInspection"): CodeInspection;
    function getModule(name: string): void;
    
    interface AppInit {
        appReady: (callback: () => void) => void;
    }

    interface CodeInspection {
        register: (extension: string, lintOptions: LintOptions) => void;
        Type: CodeInspectionTypeOptions
    }
    
    interface LintOptions {
        name: string;
        scanFile: (text: string, fullPath: string) => LintErrorSet
    }
    
    interface LintErrorSet { errors: LintErrorDetails[] }
    
    interface LintErrorDetails {
        pos: { line: number; ch: number };
        message: string;
        type: string
    }
    
    interface CodeInspectionTypeOptions {
        WARNING: string;
        ERROR: string
    }
}