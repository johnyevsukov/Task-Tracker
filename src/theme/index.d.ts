import 'styled-components';

declare module 'styled-components' {
    export interface  DefaultTheme {
        cancelColor: string,
        confirmColor: string,
        confirmBoxColor: string,
        cancelBoxColor: string
    }
}
